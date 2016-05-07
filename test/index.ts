import {expect} from 'chai';

import * as mongoose from 'mongoose';

describe('mongoose', () => {
  it('connects', done => {
    mongoose.connect('mongodb://127.0.0.1/test', done);
  });

  it('allows overriding mongoose.Promise', () => {
    mongoose.Promise = Promise;
  });
});
