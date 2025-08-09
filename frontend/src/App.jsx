import { Route, Routes } from "react-router-dom"
import Login from "./pages/authentication/Login"
import Signup from "./pages/authentication/Signup"
import LogoutButton from "./components/user/LogoutButton"
import { Box } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import Header from './components/user/Header'
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import ProtectedRoute from "./components/app/PrivateRoute"
import {Toaster} from './components/ui/toaster'




function App() {
  const location = useLocation();
  const noHeaderPaths = ['/login', '/signup'];

  return (
    <Box>
      <Toaster />
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/logout" element={<LogoutButton />}/>
        <Route path='/profile' element={<ProtectedRoute>
          <Profile />
        </ProtectedRoute>} />
      </Routes>
    </Box>
  )
}


export default App
