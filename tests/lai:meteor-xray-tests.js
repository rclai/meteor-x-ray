Tinytest.add('google title', function (test) {
  xray('http://google.com')
    .select('title')
    .run(function (err, title) {
      var expected = 'Google';
      if (!err) {
        test.equal(title, expected);
      }
    });
});
