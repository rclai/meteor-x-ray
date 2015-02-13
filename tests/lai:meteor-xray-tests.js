Tinytest.add('google title', function (test) {
  // Meteor will complain about not running this
  // in a Fiber, but will still pass
  xray('http://google.com')
    .select('title')
    .run(function (err, title) {
      var expected = 'Google';
      if (!err) {
        test.equal(title, expected);
      }
    });
});

Tinytest.add('google title synchronous', function (test) {
  var future = new (Npm.require('fibers/future'))();

  xray('http://google.com')
    .select('title')
    .run(function (err, title) {
      if (!err) {
        future.return(title);
      } else {
        future.throw(err);
      }
    });

  // Google's title will get stored
  var title = future.wait();
  test.equal(title, 'Google');
});