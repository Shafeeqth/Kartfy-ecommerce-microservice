import IUser from "@/domain/interfaces/User";
import { UserRoles } from "@/shared/constants/userRoles";
import { UserStatus } from "@/shared/constants/userStatus";
export default class User implements IUser {
    public createdAt: Date;
    public updatedAt: Date;
    
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public readonly walletId: string,
        public roles: UserRoles,
        public status: UserStatus,
        public readonly id?: string,
    ) {
      
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

   
   
    
} 