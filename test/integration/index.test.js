'use strict';

const test = require('tape');
const request = require('request-promise-native');

const headerName = require('../../lib/header-name');

const requestOpts = {
  method: 'GET',
  uri: 'http://localhost:5500',
  resolveWithFullResponse: true,
  simple: false,
};

test('request without transaction ID in header', async t => {
  try {
    const response = await request(requestOpts);

    t.equal(
      response.headers[headerName] != null,
      true,
      'should receive a newly generated transaction ID',
    );

    t.end();
  } catch (err) {
    t.end(err);
  }
});

test('request with transaction ID in header', async t => {
  try {
    const TRANSACTION_ID = 'foo';
    const response = await request({
      ...requestOpts,
      headers: {
        [headerName]: TRANSACTION_ID,
      },
    });

    t.equal(
      response.headers[headerName],
      TRANSACTION_ID,
      'should receive the same transaction ID as was sent',
    );

    t.end();
  } catch (err) {
    t.end(err);
  }
});
