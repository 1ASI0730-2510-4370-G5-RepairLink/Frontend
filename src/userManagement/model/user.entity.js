/**
 * @class User
 */
export class User {
    constructor({
                    id = '',
                    name = '',
                    email = '',
                    password = '',
                    phone = '',
                    avatar = '',
                    address_id = '',
                    role = '',
                    skills = '',
                    createdAt = '',
                    updatedAt = '',
                }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.avatar = avatar;
        this.address_id = address_id;
        this.role = role;
        this.skills = skills;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}



