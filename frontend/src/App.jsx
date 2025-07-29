import { Route, Routes } from "react-router-dom"
import Login from "./pages/authentication/Login"
import Signup from "./pages/authentication/Signup"
import LogoutButton from "./components/LogoutButton"
import { Box } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import Header from "./components/Header"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import AddHabit from "./components/habit/AddHabit"

function App() {
  const location = useLocation();
  const noHeaderPaths = ['/login', '/signup'];

  return (
    <Box>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/logout" element={<LogoutButton />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path="/addHabit" element={<AddHabit buttonCaption='Add Habit' />} />
      </Routes>
    </Box>
  )
}


export default App
