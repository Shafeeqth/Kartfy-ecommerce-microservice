import IUser from "@/domain/interfaces/User";
import { UserRoles } from "@/shared/constants/userRoles";
import { UserStatus } from "@/shared/constants/userStatus";

export default class User implements IUser {
    createdAt: Date;
    updatedAt: Date;

    constructor(
        public readonly id: string,
        public name: string,
        public email: string,
        private _password: string,
        public readonly walletId: string,
        public roles: UserRoles,
        public status: UserStatus
    ) {
      
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
        this.updatedAt = new Date();
    }

    updatePassword(newPassword: string): void {
        this._password = newPassword;
        this.updatedAt = new Date();
    }

    updateStatus(newStatus: UserStatus): void {
        this.status = newStatus;
        this.updatedAt = new Date();
    }

    addRole(role: UserRoles): void {
        this.roles = role;
        this.updatedAt = new Date();
    }

    removeRole(role: UserRoles): void {
        if (this.roles === role) {
            this.roles = null;
            this.updatedAt = new Date();
        }
    }
   
    
} 