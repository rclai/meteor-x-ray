Package.describe({
  name: 'lai:meteor-xray',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rclai/meteor-x-ray.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'x-ray': '1.0.3'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0.1');
  api.addFiles('lai:meteor-xray.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lai:meteor-xray');
  api.addFiles('lai:meteor-xray-tests.js');
});
