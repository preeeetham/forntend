import axios from "axios"
const instance = axios.create({
    baseURL: "https://react-production-5346.up.railway.app/api",
})
export default instance