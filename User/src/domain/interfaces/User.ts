import { UserRoles } from "@/shared/constants/userRoles";
import { UserStatus } from "@/shared/constants/userStatus";

export default interface IUser {
    id: string;
    name: string
    email: string;
    _password: string;
    walletId: string;
    roles: UserRoles;
    status: UserStatus;
    createdAt: Date;
    updatedAt: Date;

} 