# Typed Mongoose
[![Build Status](https://travis-ci.org/louy/typed-mongoose.svg?branch=master)](https://travis-ci.org/louy/typed-mongoose)

Typescript Typings for [Mongoose](http://mongoosejs.com).


## Usage

Install:

```bash
typings install --save mongoose
```

You'll also need global `Promise`. So if you are targeting ES5 you should install `es6-promise` typings as well.

```bash
typings install --save --ambient es6-promise
```

Note: mongoose uses `mpromise` by default, while this typings file relies on the global `Promise` interface.

If you use a custom promise implementation be sure to set `mongoose.Promise`. Read more about it [here](http://mongoosejs.com/docs/promises.html).
