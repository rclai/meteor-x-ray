# Meteor X-Ray Scraper

Meteor wrapper for the [NPM x-ray web scraper](https://github.com/lapwinglabs/x-ray).

# Installation

`meteor add lai:meteor-x-ray`

# Usage

To use the `xray` variable has been exposed globally on the server.

Go [here](https://github.com/lapwinglabs/x-ray) for usage instructions.

There is no need for a synchronous wrapper because the library itself already has [synchronous capabilities](https://github.com/lapwinglabs/x-ray#xrayrunfunctionoptional-fn), which is nice.


If you need more blocking functionality for the more complex use cases just use the Future library like this:

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

# License

MIT
