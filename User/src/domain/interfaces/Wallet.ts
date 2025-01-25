import ITransaction from "@/domain/interfaces/Transactions";

export default interface IWallet {
    balance: number;
    transactions: ITransaction[];

}