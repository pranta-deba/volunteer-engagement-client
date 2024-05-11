import axios from "axios";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const useAxiosSecure = () => {
    const navigate = useNavigate()

    //   Response Interceptor
    axiosSecure.interceptors.response.use(
        res => {
            return res
        },
        async error => {
            //   console.log('Error from axios interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                navigate('/SignIn')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure;
};

export default useAxiosSecure;