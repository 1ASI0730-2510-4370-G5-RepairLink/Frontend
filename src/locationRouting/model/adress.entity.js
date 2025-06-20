/**
 * @class Address
 */
export class Address {
    constructor({
                    id = '',
                    street = '',
                    city = '',
                    zip_code = '',
                    lat = null,
                    lng = null
                }) {
        this.id = id;
        this.street = street;
        this.city = city;
        this.zip_code = zip_code;
        this.lat = lat;
        this.lng = lng;
    }
}
