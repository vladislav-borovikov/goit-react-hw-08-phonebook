import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsLogedIn } from "redax/auth/auth-selector"

export default function PrivatRout({ children, ...routeProps }){
    const isLogedIn = useSelector(getIsLogedIn)
    return (

        isLogedIn ? children : <Navigate to="/login" />

    )
}