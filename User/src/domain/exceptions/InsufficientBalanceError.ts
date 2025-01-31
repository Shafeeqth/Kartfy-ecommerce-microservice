import { UserErrorCodes } from "@/shared/constants/errors/UserErrorCodes";
import { UserServiceError } from "./UserServiceError";
import { UserErrorStatusCodes } from "@/shared/constants/errors/errorStatusCodes";

export default class InsufficientBalanceError extends UserServiceError {
    errorCode: UserErrorCodes = UserErrorCodes.INSUFFICIENT_WALLET_BALANCE;
    statusCode: UserErrorStatusCodes = UserErrorStatusCodes.INSUFFICIENT_WALLET_BALANCE;

    constructor(message?: string) {
        super(message);
    
        Object.setPrototypeOf(this, new.target.prototype);
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }

    serializeErrors(): { message: string; field?: string; }[] {
        return [{ message: this.message || "Insufficient Wallet balance for the transaction" }];
    }

    

    

}