# wopi-proof-validator
A library for validating WOPI Proof Keys coming from Microsoft Office in Node.js

Implemented according to https://wopi.readthedocs.io/en/latest/scenarios/proofkeys.html#proof-keys
as of 2016/02


## Usage

```js
const wopiValidator = require('wopi-proof-validator');

const isValid = wopiValidator.check(
    {
        url: mydomain + req.originalUrl,
        accessToken: req.query.access_token,
        timestamp: req.headers['x-wopi-timestamp']  //!String! Too big for JavaScript numeric types
    },
    {
        proof: req.headers['x-wopi-proof'],
        proofold: req.headers['x-wopi-proofold']
    },
    {
        modulus: '...',
        exponent: '...',
        oldmodulus: '...',
        oldexponent: '...'
    }
);

```

### Debug

To debug the implementation set the env variable `DEBUG=wopiproof` and get logs.

## Contributing

Looking forward to accepting pull requests with test improvements
