import axios from "axios";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
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
            if (error.response.status === 401 || error.response.status === 403) {
                navigate('/sign_in')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure;
};

export default useAxiosSecure;