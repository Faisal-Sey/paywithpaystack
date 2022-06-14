import { BaseService } from "./BaseService";

class PaymentService extends BaseService {

    pay = payment => {
        return this.post('api/verify_payment', payment, false);
    } 

    payments = () => {
        return this.get('api/payments', false);
    }

}

export default new PaymentService();