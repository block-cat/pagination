module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionList */ "flarum/components/DiscussionList");
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/states/DiscussionListState */ "flarum/states/DiscussionListState");
/* harmony import */ var flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Placeholder */ "flarum/common/components/Placeholder");
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9__);










app.initializers.add('block-cat/pagination', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'parseResults', function (original) {
    var _arguments$2$payload;

    // get page number from arguments of
    // parseResults(this, page, results)
    var pageNum = Number(arguments[1]); // get links from arguments of
    // parseResults(this, page, results)

    var links = ((_arguments$2$payload = arguments[2].payload) == null ? void 0 : _arguments$2$payload.links) || {}; // create page by following structure

    var page = {
      number: pageNum,
      items: arguments[2],
      hasNext: !!links.next,
      hasPrev: !!links.prev
    }; // declare a function to check if
    // page already registred

    this.hasPage = function (page) {
      var allPages = this.getPages();
      if (allPages.length == 0) return false;

      for (var i = 0; i < allPages.length; i++) {
        if (allPages[i].number == page) return true;
      }

      return false;
    }; // if page doesn't registred yet,
    // then page will added


    if (!this.hasPage(pageNum)) {
      this.pages.push(page);
    } // refresh current location


    this.location = {
      page: pageNum
    };
    m.redraw();
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'refresh', function (original) {
    var _this = this;

    this.initialLoading = true;
    this.loadingPrev = false;
    this.loadingNext = false; // Modified by BlockCat

    var page = arguments[1] || 1;
    this.totalDiscussionCount = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(app.data.statistics['discussions'].total);
    this.options = {
      perPage: Number(app.forum.attribute('block-cat.articlePerPage')),
      limit: 10,
      edges: 2,
      ellipsis: 'ellip'
    };

    this.getTotalPages = function () {
      return Math.ceil(this.totalDiscussionCount() / this.options.perPage);
    };

    this.page = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(page);
    this.perPage = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.options.perPage);
    this.totalPages = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.getTotalPages());
    this.ctrl = {
      prevPage: function () {
        var current = this.page();
        --current;

        if (current < 1) {
          current = 1;
          return; // do not load if at the begin
        }

        this.page(current);
        var next = current;
        this.loadPage(next).then(this.parseResults.bind(this, next));
      }.bind(this),
      nextPage: function () {
        var current = this.page();
        ++current;

        if (current > this.totalPages()) {
          current = this.totalPages(); // do not load if at the end

          return;
        }

        debugger;
        this.page(current);
        var next = current;
        this.loadPage(next).then(this.parseResults.bind(this, next));
      }.bind(this),
      toPage: function (page) {
        if (this.page() == Number(page) || page < 1 || page > this.totalPages()) return; //console.log(page);

        this.page(Number(page));
        var next = Number(page);
        this.loadPage(next).then(this.parseResults.bind(this, next)); //.then(this.preLoadNextDiscussionPage(next + 1));
      }.bind(this),
      pageList: function () {
        var params = this.requestParams();

        if ('q' in params.filter) {
          var tagSlug = params.filter.q.split(':')[1];
          var disTagCount;
          var totalPageForTag;

          for (var i = 0; i < app.store.all('tags').length; i++) {
            if (app.store.all('tags')[i].slug() === tagSlug) {
              disTagCount = app.store.all('tags')[i].discussionCount();
              totalPageForTag = Math.ceil(disTagCount / this.perPage());
              break;
            }
          }

          if (totalPageForTag) {
            this.totalPages(totalPageForTag);
          }
        } else {
          this.totalPages(this.getTotalPages());
        }

        var p = [],
            start = 1,
            end = this.totalPages() + 1,
            left = Math.max(parseInt(this.page()) - this.options.edges, 1),
            right = Math.min(parseInt(this.page()) + this.options.edges, this.totalPages());

        for (var _i = start; _i < end; _i++) {
          if (_i === 1 || _i === parseInt(this.totalPages()) - 1 || parseInt(this.totalPages()) < this.options.limit) {
            p.push(_i);
          } else {
            if (_i === right + 1 || _i === left - 1) p.push(this.options.ellipsis);
            if (_i <= right && _i >= left) p.push(_i);
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
    this.location = {
      page: page
    };
    return this.loadPage(page).then(function (results) {
      _this.pages = [];

      _this.parseResults(_this.location.page, results);
    })["finally"](function () {
      return _this.initialLoading = false;
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'loadPage', function (original) {
    var page = arguments[1] || 1;
    var params = this.requestParams();
    params.page = {
      offset: this.options.perPage * (page - 1)
    };

    if (Array.isArray(params.include)) {
      params.include = params.include.join(',');
    } // modified `if` by BlockCat


    return app.store.find(this.type, params).then(function (res) {
      return res;
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (view) {
    if (app.forum.attribute('block-cat.paginationPosition') == 'none') return; // info about discussions

    var state = this.attrs.state;
    var params = state.getParams(); // console.log(state);
    // console.log(state.getPages());

    var DiscussionListView;

    if (state.isEmpty()) {
      var text = app.translator.trans('core.forum.discussion_list.empty_text');
      DiscussionListView = flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        text: text
      });
      view.children = [];
      view.children.push(DiscussionListView);
      return;
    }

    if (state.isLoading()) {
      DiscussionListView = m("div", {
        className: "DiscussionList-loadMore"
      }, flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component());
    } else {
      (function () {
        var dicussionsOnPage = [];
        var pages = state.getPages();

        for (var index = 0; index < pages.length; index++) {
          var page = pages[index];

          if (page.number == state.location.page) {
            page.items.map(function (discussion) {
              dicussionsOnPage.push(m("li", {
                key: discussion.id(),
                "data-id": discussion.id()
              }, flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default.a.component({
                discussion: discussion,
                params: params
              })));
            });
            break;
          }
        }

        DiscussionListView = m("ul", {
          className: "DiscussionList-discussions"
        }, dicussionsOnPage.map(function (i) {
          return i;
        }));
      })();
    } // console.log(DiscussionListView);


    view.children = [];
    view.children.push(DiscussionListView); // console.log(view);
    // console.log(arguments);
    // define buttons

    var buttonFirst = flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      title: "Prima",
      icon: 'fa fa-angle-double-left',
      className: 'Button Button--icon',
      onclick: function onclick() {
        state.ctrl.toPage(1);
      }
    });
    var buttonBack = flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      title: "Înapoi",
      icon: 'fa fa-angle-left',
      className: 'Button Button--icon',
      onclick: function onclick() {
        var page = state.page();
        state.ctrl.toPage(parseInt(page) - 1);
      }
    });
    var buttonNext = flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      title: "Următoarea",
      icon: 'fa fa-angle-right',
      className: 'Button Button--icon',
      onclick: function onclick() {
        var page = state.page();
        state.ctrl.toPage(parseInt(page) + 1);
      }
    });
    var buttonLast = flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      title: "Ultima",
      icon: 'fa fa-angle-double-right',
      className: 'Button Button--icon',
      onclick: function onclick() {
        var page = parseInt(state.totalPages());
        state.ctrl.toPage(parseInt(page));
      }
    });
    var buttonPage = [];
    var buttons;
    var toolbar; // console.log(state.ctrl.pageList());
    // for normal desktop

    state.ctrl.pageList().map(function (page) {
      var me = this;

      switch (page) {
        case me.options.ellipsis:
          buttonPage.push(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
            title: '...',
            icon: '',
            className: 'Button',
            'data-page': '...',
            style: 'cursor:default;'
          }, m('strong', {
            className: ''
          }, '...')));
          break;

        default:
          buttonPage.push(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
            title: parseInt(page),
            icon: '',
            className: page == me.page() ? 'Button Button--primary' : 'Button',
            'data-page': page,
            onclick: page != me.page() ? function () {
              me.ctrl.toPage(parseInt(page));
            } : ''
            /*  FIX BUG CLICK CURRENT PAGE LOAD FOREVER WHEN this.preLoadNextDiscussionPage(2,300); AT INIT */

          }, m('strong', {
            className: ''
          }, parseInt(page))));
          break;
      }
    }, state);
    buttons = [buttonFirst].concat(buttonBack, buttonPage, buttonNext, buttonLast);
    toolbar = {
      view: function view(vnode) {
        return m('div', {
          id: 'toolbar' + Math.floor(Math.random() * 10 + 1),
          className: 'Pagination'
        }, m('ul', {
          "class": 'IndexPage-toolbar-view'
        }, vnode.attrs.groupbuttons.map(function (ibutton) {
          return m('li', {
            "class": ''
          }, ibutton);
        })));
      }
    };
    app.forum.attribute('block-cat.paginationPosition') == 'above' && !state.isLoading() ? view.children.unshift(m(toolbar, {
      groupbuttons: buttons
    })) : '';
    app.forum.attribute('block-cat.paginationPosition') == 'under' && !state.isLoading() ? view.children.push(m(toolbar, {
      groupbuttons: buttons
    })) : '';
    app.forum.attribute('block-cat.paginationPosition') == 'both' && !state.isLoading() ? view.children.unshift(m(toolbar, {
      groupbuttons: buttons
    })) && view.children.push(m(toolbar, {
      groupbuttons: buttons
    })) : ''; // console.log(view.children);
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
  }); // clear pagination

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default.a, 'deleteAction', function () {
    if (app.discussions) {
      var page = app.discussions.location.page;
      app.discussions.refresh(page);
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'onsubmit', function () {
    if (app.discussions) {
      // let page = app.discussions.location.page;
      app.discussions.refresh();
    }
  });
});

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Placeholder":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Placeholder']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Placeholder'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionList']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionList'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/states/DiscussionListState":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['states/DiscussionListState']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['states/DiscussionListState'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map