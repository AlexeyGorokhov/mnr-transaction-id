'use strict';

const test = require('tape');
const proxyquire = require('proxyquire').noPreserveCache().noCallThru();
const sinon = require('sinon');

const mn = 'lib/set-incoming-transaction-id';

const getSelf = ({ uuidStub }) => proxyquire('../../../lib/set-incoming-transaction-id', {
  'uuid/v4': uuidStub
});

test(`${mn} > there is transaction ID in incoming header`, t => {
  const ID = Symbol('');
  const stubs = {
    uuidStub: sinon.spy()
  };
  const self = getSelf(stubs);
  const reqStub = {
    get: () => ID
  };

  self(reqStub);

  t.equal(
    reqStub.transactionId,
    ID,
    'should set transaction ID from header'
  );

  t.equal(
    stubs.uuidStub.called,
    false,
    'should not generate new ID'
  );

  t.end();
});

test(`${mn} > there is no transaction ID in incoming header`, t => {
  const ID = Symbol('');
  const stubs = {
    uuidStub: sinon.spy(() => ID)
  };
  const self = getSelf(stubs);
  const reqStub = {
    get: () => {}
  };

  self(reqStub);

  t.equal(
    stubs.uuidStub.called,
    true,
    'should generate new ID'
  );

  t.equal(
    reqStub.transactionId,
    ID,
    'should set newly generated transaction ID'
  );

  t.end();
});
