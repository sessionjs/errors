export { SessionValidationError, SessionValidationErrorCode } from './validation'
export { SessionCryptoError, SessionCryptoErrorCode } from './crypto'
export { SessionRuntimeError, SessionRuntimeErrorCode } from './runtime'
export { SessionFetchError, SessionFetchErrorCode } from './fetch'

export class SessionJsError extends Error {
  constructor(message: string) {
    super(message)
  }
}