import { BaseService } from "./BaseService";

class AuthService extends BaseService {

    login = user => {
        return this.post('api/login', user, false);
    } 

}

export default new AuthService();