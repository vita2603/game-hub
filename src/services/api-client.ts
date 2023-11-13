import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b07b70012d984703a136f915ba17a5e4'
    }
})