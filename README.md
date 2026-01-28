# @session.js/errors

Session.js error classes. This module can be used to check instance of thrown errors in Session.js. All errors extend from `SessionJsError` class which itself extends from generic Error class.

```ts
import { SessionRuntimeError, SessionJsError } from '@session.js/error'

try {
  // something throws
} catch(e) {
  if(e instanceof SessionRuntimeError) {
    console.error('Session.js runtime error handled')
  } else {
    if(e instanceof SessionJsError) {
      console.error('It\'s not Session.js runtime error... but at least we know it\'s Session\.js error')
    } else {
      console.error('No idea what is this error')
      throw e
    }
  }
}
```

## Made for Session.js

Use Session messenger programmatically with [Session.js](https://git.hloth.dev/session.js/client): Session bots, custom Session clients, and more.

## Donate

[hloth.dev/donate](https://hloth.dev/donate) · Tor: [hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion/donate](http://hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion/donate)

## License

[MIT](./LICENSE)