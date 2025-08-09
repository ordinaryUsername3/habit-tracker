import axios from 'axios';
const URL=import.meta.env.VITE_API_URL + '/api/users';


const instance = axios.create({
    baseURL: URL,
    withCredentials: true
})


instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers['Authorization']=`Bearer ${accessToken}`;
    }
    return config
}, (error) => Promise.reject(error));

instance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {            
                const response = await axios.post(URL + '/refresh', {}, {withCredentials: true})
                const newAccessToken = response.data?.accessToken;
                if (newAccessToken) {
                    localStorage.setItem('accessToken', newAccessToken);

                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return instance(originalRequest);
                }
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
    }
)

export default instance;