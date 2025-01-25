import { TransactionType } from "@/shared/constants/transactionType";
import ITransaction from "../interfaces/Transactions";

export default interface IWalletRepository {
    addMoney(amount: number): Promise<void>;
    deductMoney(amount: number): Promise<void>;
    getTransactionHistory(): Promise<ITransaction[]>;
    addTransaction(amount: number, type: TransactionType): Promise<ITransaction>;
}