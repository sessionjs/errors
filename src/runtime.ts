import { SessionJsError } from "./session-js"

export enum SessionRuntimeErrorCode {
  EmptyUser = 'empty_user',
  Generic = 'generic',
  NoSwarmsAvailable = 'no_swarms_available',
  MultipleInstancesNotAllowed = 'multiple_instances_not_allowed',
  NoInstancePolling = 'no_instance_polling',
  InstanceAlreadyAuthorized = 'instance_already_authorized',
  NetworkNotProvided = 'network_not_provided',
}

/** Generic error for cases where developer does something incorrectly */
export class SessionRuntimeError extends SessionJsError {
  code: SessionRuntimeErrorCode

  constructor({ code, message }: {
    code: SessionRuntimeErrorCode,
    message: string
  }) {
    super({ code, message })
    this.code = code
  }
}