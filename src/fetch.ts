import { SessionJsError } from "./session-js"

export enum SessionFetchErrorCode {
  RetryWithOtherNode421Error = 'retry_with_other_node_421_error',
  NoSnodesAvailable = 'no_snodes_available',
  NoSwarmsAvailable = 'no_swarms_available',
  FetchFailed = 'fetch_failed',
  InvalidResponse = 'invalid_response',
  PollingFailed = 'polling_failed',
  UploadFailed = 'upload_failed',
  UnknownMethod = 'unknown_method',
  Generic = 'generic'
}

/** Generic error for cases where developer does something incorrectly */
export class SessionFetchError extends SessionJsError {
  code: SessionFetchErrorCode

  constructor({ code, message }: {
    code: SessionFetchErrorCode,
    message: string
  }) {
    super({ code, message })
    this.code = code
  }
}