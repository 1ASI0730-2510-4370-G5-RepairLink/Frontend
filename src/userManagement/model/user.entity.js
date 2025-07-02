/**
 * @class User
 */
export class User {
    constructor({
                    id = '',
                    name = '',
                    email = '',
                    password = '',
                    role = '',
                    phone = '',
                    address_id = '',
                    specialty = '',
                    skills = [],
                    background_check = false,
                    documents = []
                }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.phone = phone;
        this.address_id = address_id;
        this.specialty = specialty;
        this.skills = skills;
        this.background_check = background_check;
        this.documents = documents;
    }
}

