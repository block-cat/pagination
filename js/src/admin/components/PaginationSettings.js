import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Select from 'flarum/common/components/Select';
import saveSettings from 'flarum/utils/saveSettings';

export default class PaginationSettings extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.paginationPositionOptions = {
      'none': app.translator.trans('block-cat-pagination.admin.settings.pagination.position.none'),
      'above': app.translator.trans('block-cat-pagination.admin.settings.pagination.position.above'),
      'under': app.translator.trans('block-cat-pagination.admin.settings.pagination.position.under'),
      'both': app.translator.trans('block-cat-pagination.admin.settings.pagination.position.both'),
    };

    this.paginationPosition = app.data.settings["block-cat.pagination_position"];
    this.articlePerPage = app.data.settings["block-cat.article_per_page"];
  }

  content() {
    return [
      m('.ExtensionPage-settings', [
        m('.container', [
          m('Form', [
            m('.Form-group', [
              m('label', app.translator.trans('block-cat-pagination.admin.settings.pagination.position_label')),
              m('.helpText', app.translator.trans('block-cat-pagination.admin.settings.pagination.position_help_text')),
              Select.component({
                options: this.paginationPositionOptions,
                value: this.paginationPosition || 'none',
                onchange: (e) => {
                  this.paginationPosition = e;
                  saveSettings({["block-cat.pagination_position"]: this.paginationPosition});
                },
              }),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans('block-cat-pagination.admin.settings.pagination.articlePage_label')),
              m('.helpText', app.translator.trans('block-cat-pagination.admin.settings.pagination.articlePage_help_text')),
              m('input.FormControl', {
                type: 'number',
                min: 1,
                max: 50,
                step: 1,
                placeholder: 20,
                value: this.articlePerPage,
                onchange: (e) => {
                  this.articlePerPage = e.target.value;
                  this.articlePerPage = Math.min(Math.max(1, this.articlePerPage), 50);
                  saveSettings({["block-cat.article_per_page"]: this.articlePerPage});
                },
              }),
            ]),
          ]),
        ]),
      ]),
    ];
  }
}