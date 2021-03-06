Package.describe({
  name: 'photonic:active-record',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Photonic::ActiveRecord',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/awatson1978/active-record/packages/active-record',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.use('photonic:active-record-core@0.0.1');
  api.use('photonic:active-record-imagegrid@0.0.1');
  api.use('photonic:active-record-list@0.0.1');
  api.use('photonic:active-record-preview@0.0.1');
  api.use('photonic:active-record-table@0.0.1');
  api.use('photonic:active-form-upsert@0.0.1');

  // api.use('photonic:active-record-edit@0.0.1');
  // api.use('photonic:active-record-new@0.0.1');

  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.addFiles([
    // 'components/recordFooter/recordFooter.html',
    // 'components/recordFooter/recordFooter.js',
    // 'components/recordFooter/recordFooter.less',
    //
    // 'components/recordHeader/recordHeader.html',
    // 'components/recordHeader/recordHeader.js',
    // 'components/recordHeader/recordHeader.less',

    // 'components/recordImageGridPage/recordImageGridPage.html',
    // 'components/recordImageGridPage/recordImageGridPage.js',
    // 'components/recordImageGridPage/recordImageGridPage.less',
    //
    // 'components/recordPreviewPage/recordPreviewPage.html',
    // 'components/recordPreviewPage/recordPreviewPage.js',
    // 'components/recordPreviewPage/recordPreviewPage.less',
    //
    // 'components/recordsListPage/recordsListPage.html',
    // 'components/recordsListPage/recordsListPage.js',
    // 'components/recordsListPage/recordsListPage.less',
    //
    // 'components/recordsTablePage/recordsTablePage.html',
    // 'components/recordsTablePage/recordsTablePage.js',
    // 'components/recordsTablePage/recordsTablePage.less',
    //
    // 'components/recordUpsertPage/recordUpsertPage.html',
    // 'components/recordUpsertPage/recordUpsertPage.js',
    // 'components/recordUpsertPage/recordUpsertPage.less',

  ], 'client');

  api.addFiles('active-record.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('photonic:active-record');
  api.use('clinical:verification');

  api.addFiles('active-record-tests.js');
});
