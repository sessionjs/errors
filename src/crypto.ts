import { SessionJsError } from "./session-js"

export enum SessionCryptoErrorCode {
  MessageEncryptionFailed = 'message_encryption_failed',
  MessageDecryptionFailed = 'message_decryption_failed',
  MessageVerificationFailed = 'message_verification_failed',
  AttachmentDecryptionFailed = 'attachment_decryption_failed',
  AttachmentEncryptionFailed = 'attachment_encryption_failed',
}

/** Generic error for cases where developer does something incorrectly */
export class SessionCryptoError extends SessionJsError {
  code: SessionCryptoErrorCode

  constructor({ code, message }: {
    code: SessionCryptoErrorCode,
    message: string
  }) {
    super({ code, message })
    this.code = code
  }
}