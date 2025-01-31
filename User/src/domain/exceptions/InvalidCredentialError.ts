import { UserErrorCodes } from "@/shared/constants/errors/UserErrorCodes";
import { UserServiceError } from "./UserServiceError";
import { UserErrorStatusCodes } from "@/shared/constants/errors/errorStatusCodes";

export default class InvalidCredentialsError extends UserServiceError {
  errorCode: UserErrorCodes = UserErrorCodes.INVALID_CREDENTIALS;
  statusCode: UserErrorStatusCodes = UserErrorStatusCodes.INVALID_CREDENTIALS;

  constructor(message?: string, field?: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [
      { message: this.message || "Invalid credentials provided, try again!." },
    ];
  }
}
