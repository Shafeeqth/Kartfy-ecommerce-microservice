import IWallet from "@/domain/interfaces/Wallet";
import InsufficientBalanceError from "../exceptions/InsufficientBalanceError";

export default class Wallet implements IWallet {
  //@ts-ignore
  public id: string;
  private _balance: number;
  public createdAt: Date;
  public updatedAt: Date;
  public user: string;

  constructor(userId: string) {
    this.user = userId;
    this._balance = 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  get balance() {
    return this._balance;
  }

  set balance(amount: number) {
    if (this._balance + amount < 0) {
      throw new InsufficientBalanceError();
    }
    this._balance += amount;
  }
}
