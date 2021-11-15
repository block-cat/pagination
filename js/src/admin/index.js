import PaginationSettings from './components/PaginationSettings';

app.initializers.add('block-cat/pagination', () => {
  app.extensionData.for('block-cat-pagination')
    .registerPage(PaginationSettings);
});
