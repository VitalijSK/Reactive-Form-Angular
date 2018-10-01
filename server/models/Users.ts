import { IUser } from './User';
import fileManager from '../filemanager';

class UsersModel {
    users: Array < IUser > ;
    constructor() {
        this.users = fileManager.getData();
    }
    getUsers() {
        return this.users.map(user => user);
    }
    getUserById(id: number) {
        const user = this.users.find(user => user.id === id);
        if (user) {
            return user;
        }
        return false;
    }
    updateUserById(user: IUser) {
        if (user) {
            const userIndex = this.users.findIndex(userOfArr => user.id === userOfArr.id);
            if (userIndex >= 0) {
                this.users[userIndex] = user;
                return user;
            }
        }
        return false;
    }
    addUser(user: IUser) {
        if (user) {
            user.id = this.getId();
            this.users.push(user);
            return true;
        }
        return false;
    }
    deleteUserById(id: number) {
        if (this.isExistId(id)) {
            this.users = this.users.filter(user => user.id !== id);
            return true;
        }
        return false;
    }
    isExistId(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex >= 0) {
            return true;
        }
        return false;
    }
    getId() {
        const lastUser = this.users[this.users.length - 1];
        return lastUser.id + 1;
    }
}

export default new UsersModel();