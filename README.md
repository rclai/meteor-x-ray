### No longer maintained

Use `meteorhacks:npm` instead to include `x-ray` into your app.

# Meteor X-Ray Scraper

Meteor wrapper for the [NPM x-ray web scraper](https://github.com/lapwinglabs/x-ray).

# Installation

`meteor add lai:meteor-xray`

# Usage

To use the `xray` variable has been exposed globally on the server.

Go [here](https://github.com/lapwinglabs/x-ray) for usage instructions.

If you need blocking functionality, use the Future library, which Meteor already installs by default, like this:

```js
// The future library is loadable already
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
```

# Future

Add a synchronous wrapper around it to do blocking calls.

# License

MIT
