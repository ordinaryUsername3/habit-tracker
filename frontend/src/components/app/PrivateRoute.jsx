import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react";

export default function ProtectedRoute({children}) {
    const navigate=useNavigate();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    useEffect(() => {   
        if (!isAuthenticated) navigate('/login')
    }, [navigate, isAuthenticated]);
    
    return isAuthenticated ? children : null;
}