import PaginationSettings from './components/PaginationSettings';
import { extend } from 'flarum/extend';
import Store from 'flarum/Store';

app.initializers.add('block-cat/pagination', () => {
  app.extensionData.for('block-cat-pagination')
    .registerPage(PaginationSettings);
  
  // extend(Store.prototype, 'pushPayload', function() {
  //   console.log(arguments);
  // });
  // extend(Store.prototype, 'pushObject', function() {
  //   console.log(arguments);
  // });
});
