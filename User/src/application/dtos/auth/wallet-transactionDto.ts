import { TransactionType } from "@/shared/constants/transactionType";

export default interface ForgotPasswordDto {
    userId: string;
    type: TransactionType;
    amount: number;

  }
  