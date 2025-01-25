import { TransactionType } from "@/shared/constants/transactionType";


export default interface ITransaction {
    type: TransactionType;
    amount: number;
    date: Date;
}