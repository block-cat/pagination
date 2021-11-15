import { extend, override } from 'flarum/extend';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionListState from 'flarum/states/DiscussionListState';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Placeholder from 'flarum/common/components/Placeholder';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import DiscussionControls from 'flarum/utils/DiscussionControls';

app.initializers.add('block-cat/pagination', () => {
    override(DiscussionListState.prototype, 'parseResults', function (original) {
        // get page number from arguments of
        // parseResults(this, page, results)
        const pageNum = Number(arguments[1]);
        
        // get links from arguments of
        // parseResults(this, page, results)
        const links = arguments[2].payload?.links || {};
        // create page by following structure
        const page = {
            number: pageNum,
            items: arguments[2],
            hasNext: !!links.next,
            hasPrev: !!links.prev,
        };

        // declare a function to check if
        // page already registred
        this.hasPage = function (page) {
            let allPages = this.getPages();

            if (allPages.length == 0) return false;

            for (let i = 0; i < allPages.length; i ++) {
                if (allPages[i].number == page) return true;
            }

            return false;
        };

        // if page doesn't registred yet,
        // then page will added
        if (!this.hasPage(pageNum)) {
            this.pages.push(page);
        }

        // refresh current location
        this.location = { page: pageNum };

        m.redraw();
    });

    override(DiscussionListState.prototype, 'refresh', function (original) {
        this.initialLoading = true;
        this.loadingPrev = false;
        this.loadingNext = false;

        // Modified by BlockCat
        let page = arguments[1] || 1;
        this.totalDiscussionCount = Stream(app.data.statistics['discussions'].total);

        this.options = {
            perPage: Number(app.forum.attribute('block-cat.articlePerPage')),
            limit: 10,
            edges: 2,
            ellipsis: 'ellip',
        };

        this.getTotalPages = function () {
            return Math.ceil(this.totalDiscussionCount() / this.options.perPage)
        };
        this.page = Stream(page);
        this.perPage = Stream(this.options.perPage);
        this.totalPages = Stream(this.getTotalPages());

        this.ctrl = {
            prevPage: function () {
                let current = this.page();

                --current;

                if (current < 1) {
                    current = 1;
                    return; // do not load if at the begin
                }

                this.page(current);
                let next = current;
                this.loadPage(next).then(this.parseResults.bind(this, next));
            }.bind(this),

            nextPage: function () {
                let current = this.page();

                ++current;

                if (current > (this.totalPages())) {
                    current = (this.totalPages()); // do not load if at the end
                    return;
                }
                debugger;
                this.page(current);
                let next = current;
                this.loadPage(next).then(this.parseResults.bind(this, next));
            }.bind(this),

            toPage: function (page) {
                if (this.page() == Number(page) || page < 1 || page > this.totalPages()) return;
                //console.log(page);
                this.page(Number(page));
                let next = Number(page);
                this.loadPage(next).then(this.parseResults.bind(this, next));//.then(this.preLoadNextDiscussionPage(next + 1));
            }.bind(this),

            pageList: function () {
                const params = this.requestParams();
                if ('q' in params.filter) {
                    let tagSlug = params.filter.q.split(':')[1];
                    let disTagCount;
                    let totalPageForTag;
                    for (let i = 0; i < app.store.all('tags').length; i++) {
                        if (app.store.all('tags')[i].slug() === tagSlug) {
                            disTagCount = app.store.all('tags')[i].discussionCount();
                            totalPageForTag = Math.ceil(disTagCount / this.perPage())
                            break;
                        }
                    }

                    if (totalPageForTag) {
                        this.totalPages(totalPageForTag);
                    }
                } else {
                    this.totalPages(this.getTotalPages());
                }

                let p = [],
                    start = 1,
                    end = this.totalPages() + 1,
                    left = Math.max(parseInt(this.page()) - this.options.edges, 1),
                    right = Math.min(parseInt(this.page()) + this.options.edges, this.totalPages())

                for (let i = start; i < end; i++) {

                    if (i === 1
                        || i === parseInt(this.totalPages()) - 1
                        || parseInt(this.totalPages()) < this.options.limit) {

                        p.push(i);

                    } else {

                        if (i === (right + 1) || i === (left - 1)) p.push(this.options.ellipsis);

                        if (i <= right && i >= left) p.push(i);
                    }
                }

                return p;
            }.bind(this),

            changePerPage: function (value) {
                this.perPage(value);

                /* Recalculate total pages */

                this.totalPages(this.getTotalPages());

                /* Jump to page 1 */

                this.page(1);
            }.bind(this)
        };
    

    this.clear();
    page = this.page();
    this.location = { page };

    return this.loadPage(page)
        .then((results) => {
            this.pages = [];
            this.parseResults(this.location.page, results);
        })
        .finally(() => (this.initialLoading = false));
    });

    override(DiscussionListState.prototype, 'loadPage', function (original) {
        let page = arguments[1] || 1;

        const params = this.requestParams();
        params.page = { offset: this.options.perPage * (page - 1) };

        if (Array.isArray(params.include)) {
            params.include = params.include.join(',');
        }
        
        // modified `if` by BlockCat
        return app.store.find(this.type, params).then((res) => {
            return res;
        });
    });

    extend(DiscussionList.prototype, 'view', function (view) {
        if (app.forum.attribute('block-cat.paginationPosition') == 'none') return;
        // info about discussions
        const state = this.attrs.state;
        const params = state.getParams();

        // console.log(state);
        // console.log(state.getPages());
        let DiscussionListView;
        
        if (state.isEmpty()) {
            const text = app.translator.trans('core.forum.discussion_list.empty_text');
            DiscussionListView = (
                Placeholder.component({ text })
            );
            view.children = [];
            view.children.push(DiscussionListView);
            return;
        }

        if (state.isLoading()) {
            DiscussionListView = (
                <div className="DiscussionList-loadMore">
                    {LoadingIndicator.component()}
                </div>
            );
        } else {
            let dicussionsOnPage = [];
            const pages = state.getPages();

            for (let index = 0; index < pages.length; index++) {
                const page = pages[index];
                if (page.number == state.location.page) {
                    page.items.map((discussion) => {
                        dicussionsOnPage.push(
                            <li key={discussion.id()} data-id={discussion.id()}>
                                {DiscussionListItem.component({ discussion, params })}
                            </li>
                        );
                    });
                    break;
                }
            }
        
            DiscussionListView = (
                <ul className="DiscussionList-discussions">
                    {dicussionsOnPage.map((i) => i)}
                </ul>
            );
        }
        // console.log(DiscussionListView);
        view.children = [];
        view.children.push(DiscussionListView);
        // console.log(view);
        // console.log(arguments);

        // define buttons
        let buttonFirst = Button.component({
            title: "Prima",
            icon: 'fa fa-angle-double-left',
            className: 'Button Button--icon',
            onclick: () => {
                state.ctrl.toPage(1);
            }
        });
        let buttonBack = Button.component({
            title: "Înapoi",
            icon: 'fa fa-angle-left',
            className: 'Button Button--icon',
            onclick: () => {
                let page = state.page();
                state.ctrl.toPage(parseInt(page) - 1);
            }
        });
        let buttonNext = Button.component({
            title: "Următoarea",
            icon: 'fa fa-angle-right',
            className: 'Button Button--icon',
            onclick: () => {
                let page = state.page();
                state.ctrl.toPage(parseInt(page) + 1);
            }
        });
        let buttonLast = Button.component({
            title: "Ultima",
            icon: 'fa fa-angle-double-right',
            className: 'Button Button--icon',
            onclick: () => {
                let page = parseInt(state.totalPages());
                state.ctrl.toPage(parseInt(page));
            }
        });

        let buttonPage = [];
        let buttons;
        let toolbar;

        // console.log(state.ctrl.pageList());
        
        // for normal desktop
        state.ctrl.pageList().map(function (page) {
            let me = this;
            switch (page) {
                case me.options.ellipsis:
                    buttonPage.push(Button.component({
                        title: '...',
                        icon: '',
                        className: 'Button',
                        'data-page': '...',
                        style: 'cursor:default;',
                    }, m('strong', { className: '' }, '...')));
                    break;
                default:
                    buttonPage.push(Button.component({
                        title: parseInt(page),
                        icon: '',
                        className: (page == me.page()) ? 'Button Button--primary' : 'Button',
                        'data-page': page,
                        onclick: (page != me.page()) ? () => {
                            me.ctrl.toPage(parseInt(page));
                        } : '' /*  FIX BUG CLICK CURRENT PAGE LOAD FOREVER WHEN this.preLoadNextDiscussionPage(2,300); AT INIT */
                    }, m('strong', { className: '' }, parseInt(page))));
                    break;
            }
        }, state);
    
        buttons = [buttonFirst].concat(buttonBack, buttonPage, buttonNext, buttonLast);
    
        toolbar = {
            view: function (vnode) {
                return m('div', { id: 'toolbar' + Math.floor((Math.random() * 10) + 1), className: 'Pagination' },
                    m('ul', { class: 'IndexPage-toolbar-view' }, vnode.attrs.groupbuttons.map((ibutton) => {
                        return m('li', { class: '' }, ibutton);
                    }))
                );
            }
        }

        app.forum.attribute('block-cat.paginationPosition') == 'above' && !state.isLoading()
            ? view.children.unshift(m(toolbar, { groupbuttons: buttons })) : '';

        app.forum.attribute('block-cat.paginationPosition') == 'under' && !state.isLoading()
            ? view.children.push(m(toolbar, { groupbuttons: buttons })) : '';

        app.forum.attribute('block-cat.paginationPosition') == 'both' && !state.isLoading()
            ? view.children.unshift(m(toolbar, { groupbuttons: buttons }))
                && view.children.push(m(toolbar, { groupbuttons: buttons })) : '';
        // console.log(view.children);
      
    
    //   let res = m('div', { className: 'Paginate' }, [
    //       !mystate.isLoading() && mystate.totalPages() > 1 ? m(toolbar, { groupbuttons: buttons }) : '',
    //       listItem,
    //       //this.loading === false ? paginateControl : '',
    //       !mystate.isLoading() && mystate.totalPages() > 1 && morethan10 ? m(toolbar, { groupbuttons: buttons }) : '',
          
    //   ]);
    
      // return res;

        // unneed functionality yet

        // adaptation for mobile device
        // if (window.matchMedia('screen and (max-width: 768px)').matches || $('.DiscussionPage-list').length) { //mobile or page list showed on the left
        //     //we need a new toolbar for mobile device
        //     mystate.ctrl.pageList().map(function (page) {
        //         let me = this;
        //         switch (page) {
        //             case me.options.ellipsis:
        //                 break;
        //             default:
        //                 if (Math.abs(parseInt(page) - parseInt(me.page())) <= 1 || parseInt(page) === parseInt(me.totalPages()) - 1) { //only display previous or next page and the last page
        //                     buttonPage.push(Button.component({
        //                         title: parseInt(page),
        //                         icon: '',
        //                         className: (page == me.page()) ? 'Button Button--primary' : 'Button',
        //                         'data-page': page,
        
        //                         onclick: (page !== me.page()) ? () => {
        //                             me.ctrl.toPage(parseInt(page));
        //                         } : '' /*  FIX BUG CLICK CURRENT PAGE LOAD FOREVER WHEN this.preLoadNextDiscussionPage(2,300); AT INIT */
        //                     }, m('strong', { className: '' }, parseInt(page))));
        //                 }
        //                 break;
        //         }
        //     }, mystate);
        
        //     //buttons = [buttonBegin].concat(buttonBack,buttonPage,buttonNext,buttonEnd);
        //     buttons = [buttonBegin].concat(buttonPage, buttonEnd);
        
        // } else {
    });

    // clear pagination
    extend(DiscussionControls, 'deleteAction', function () {
        if (app.discussions) {
            let page = app.discussions.location.page;
            app.discussions.refresh(page);
        }
    });

    extend(DiscussionComposer.prototype, 'onsubmit', function () {
        if (app.discussions) {
            // let page = app.discussions.location.page;
            app.discussions.refresh();
        }
    });
});
