export interface IUser {
    id: number;
    name: string;
    password : string;
    dateOfBirth : string;
    dateOfFirstLogin : string;
    dateOfNextNotification : string;
    information : string;
}

export class User implements IUser {
    id: number;
    name: string;
    password : string;
    dateOfBirth : string;
    dateOfFirstLogin : string;
    dateOfNextNotification : string;
    information : string;

    constructor(id: number | undefined, name: string , password: string , dateOfBirth: string , information: string) {
        this.id = id || -1;
        this.name = name;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.dateOfFirstLogin = '';
        this.dateOfNextNotification = '';
        this.information = information;
    }
}