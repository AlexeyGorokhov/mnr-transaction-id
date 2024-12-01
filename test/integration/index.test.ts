import { HEADER_NAME } from '../../src/index.js';

const URL = 'http://localhost:5500';

describe('request without transaction ID in header', () => {
  it('should receive a newly generated transaction ID', async() => {
    const response = await fetch(URL);

    expect(response.headers.get(HEADER_NAME) != null).toBe(true);
  });
});

describe('request with transaction ID in header', () => {
  it('should receive the same transaction ID as was sent', async() => {
    const TRANSACTION_ID = 'foo';
    const response = await fetch(URL, {
      headers: {
        [HEADER_NAME]: TRANSACTION_ID,
      },
    });

    expect(response.headers.get(HEADER_NAME)).toBe(TRANSACTION_ID);
  });
});
