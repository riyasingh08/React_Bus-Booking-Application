import axios from 'axios';

const BUS_API_BASE_URL = 'http://localhost:8001/booking/allbookingService';

class BusService{

    getBuses(){
        
        return axios.get(BUS_API_BASE_URL);
        
    }
}

export default new BusService();