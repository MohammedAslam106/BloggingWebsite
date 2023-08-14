import { Navigate, Outlet } from "react-router"

export default function ProtectedRoute(){
    // const {currentUser}=useAuth()
    const currentUser=JSON.parse(localStorage.getItem('blogUser'))
    return(
        currentUser ? <Outlet/> : <Navigate to={'/'}/>
    )
}