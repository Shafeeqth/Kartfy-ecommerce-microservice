import IUser from "@/domain/interfaces/User"

export default interface UserRepository {
    create(user: IUser): Promise<IUser>;
    findById(userId: string): Promise<IUser | null>;
    findByEmail(email:string): Promise<IUser | null>;
    update(user: IUser): Promise<IUser>;
    delete(userId: string): Promise<void>;
}