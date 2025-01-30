import { TransactionType } from "@/shared/constants/transactionType";
import ITransaction from "../interfaces/Transactions";

export default class Transaction implements ITransaction {
  public createdAt: Date;
  
  constructor(
    public wallet: string,
    public type: TransactionType,
    public amount: number,
    public id?: string | undefined
  ) {
    this.createdAt = new Date();
  }
}
