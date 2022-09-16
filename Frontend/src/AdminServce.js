import axios from 'axios';

let ADMIN_API_BASE_URL = 'http://localhost:8001/booking/allbusesListing';

class AdminService{

    getAdmins(a){
        
        console.log(a);
        ADMIN_API_BASE_URL=a;
        return axios.get(ADMIN_API_BASE_URL);
    }
    getAllAdmins(){
        
        console.log("getallAdmin");
        ADMIN_API_BASE_URL='http://localhost:8001/booking/allbusesListing';
        return axios.get(ADMIN_API_BASE_URL);
    }
}

export default new AdminService();