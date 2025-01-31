import { UserErrorCodes } from "@/shared/constants/errors/UserErrorCodes";
import { UserServiceError } from "./UserServiceError";
import { UserErrorStatusCodes } from "@/shared/constants/errors/errorStatusCodes";

export default class EmailAlreadyExistError extends UserServiceError {
    errorCode: UserErrorCodes = UserErrorCodes.EMAIL_ALREADY_EXIST;
    statusCode: UserErrorStatusCodes = UserErrorStatusCodes.EMAIL_ALREADY_EXIST;

    constructor(message?: string) {
        super(message);
    
        Object.setPrototypeOf(this, new.target.prototype);
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }

    serializeErrors(): { message: string; field?: string; }[] {
        return [{ message: this.message || "user already exist with given email, please check email and try again." }];
    }

    

    

}