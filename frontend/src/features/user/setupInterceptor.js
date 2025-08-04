import axios from 'axios';
const URL=import.meta.env.VITE_API_URL + '/api/users';
import store from '../../app/store'
import { setToken } from './userSlice';


export const authInterceptor = axios.create({
    withCredentials: true,
    baseURL: URL,
});

authInterceptor.interceptors.request.use((config) => {
    const token = store.getState().user.token;
    if (token) {
        config.headers['Authorization']=`Bearer ${token}`
    }
    return config
}, (error) => Promise.reject(error));

export const refreshTokenInterceptor = authInterceptor.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {            
                const response = await axios.post(URL + '/refresh', {}, {withCredentials: true})
                const newAccessToken = response.data?.token;
                if (newAccessToken) {
                    store.dispatch(setToken(newAccessToken));

                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return authInterceptor(originalRequest);
                }
            } catch (refreshError) {
                console.error('Token refresh failed', refreshError)
                return Promise.reject(refreshError);
            }
        }
    }
)