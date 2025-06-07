/**
 * @class Booking
 */
export class Booking {
    constructor({
                    id = '',
                    customer_id = '',
                    technician_id = '',
                    service_id = '',
                    address_id = '',
                    scheduled_time = '',
                    name = '',
                    description = '',
                    type = '',
                    status =  '',
                    startTime = '',
                    endTime=''
                }) {
        this.id = id;
        this.customer_id = customer_id;
        this.technician_id = technician_id;
        this.service_id = service_id;
        this.address_id = address_id;
        this.scheduled_time = scheduled_time;
        this.name = name;
        this.description = description;
        this.type = type;
        this.status = status;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
