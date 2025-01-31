import { UserErrorStatusCodes } from "@/shared/constants/errors/errorStatusCodes";
import { UserErrorCodes } from "@/shared/constants/errors/UserErrorCodes";
import { BaseError } from "@kartfy_micro/common";

export abstract class UserServiceError extends BaseError{
    abstract errorCode: UserErrorCodes;
    abstract statusCode: UserErrorStatusCodes; 
    
    constructor(message?: string) {
        super(message);
    
        Object.setPrototypeOf(this, new.target.prototype);
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }
    
}
    