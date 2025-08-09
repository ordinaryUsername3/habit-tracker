import { useDispatch, useSelector} from "react-redux"
import { Navigate } from "react-router-dom";
import {jwtDecode}from 'jwt-decode'
import { useEffect } from "react";

export default function ProtectedRoute({children}) {
    const accessToken = localStorage.getItem('accessToken');
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    useEffect(() => {
        if (accessToken) {
        try {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem('accessToken');
            dispatch({ type: 'user/resetState' });
        } else {
            dispatch({ type: 'user/setIsAuthenticated', payload: true });
        }
    } catch {
        localStorage.removeItem('accessToken');
        dispatch({ type: 'user/resetState' });
    }
} }, [accessToken, dispatch]);

    if (!accessToken || !isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return children;
}