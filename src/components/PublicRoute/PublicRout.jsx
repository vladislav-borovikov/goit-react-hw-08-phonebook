import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsLogedIn } from "redax/auth/auth-selector"

export default function PublicRout ({ children, restricted = false, ...routeProps }){
    const isLogedIn = useSelector(getIsLogedIn)
    const shouldRedirect = isLogedIn && restricted;
    return shouldRedirect ? <Navigate to="/contacts" /> : children;
  
}