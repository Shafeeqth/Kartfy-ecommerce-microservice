import { UserErrorCodes } from "@/shared/constants/errors/UserErrorCodes";
import { UserServiceError } from "./UserServiceError";
import { UserErrorStatusCodes } from "@/shared/constants/errors/errorStatusCodes";

export default class UserNotFoundError extends UserServiceError {
    errorCode: UserErrorCodes = UserErrorCodes.USER_NOT_FOUND;
    statusCode: UserErrorStatusCodes = UserErrorStatusCodes.USER_NOT_FOUND;

    constructor(message?: string) {
        super(message);
    
        Object.setPrototypeOf(this, new.target.prototype);
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }

    serializeErrors(): { message: string; field?: string; }[] {
        return [{ message: this.message || "Invalid userId., user not found with specified id!." }];
    }

    

    

}