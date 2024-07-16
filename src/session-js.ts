/** Most generic error class that other errors extend from */
export class SessionJsError extends Error {
  code: string

  constructor({ code, message }: {
    code: string,
    message: string
  }) {
    super(message)
    this.code = code
    this.message = message
  }
}