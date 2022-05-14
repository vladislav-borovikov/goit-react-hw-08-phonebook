import {  useRouteMatch } from "react-router-dom"
import RegistrationForm from "components/RegistarationForm/RegistrationForm"


const RegistrationFormPage = () => {

    const {url} = useRouteMatch()
  
    return (
        <>
            <RegistrationForm url={url}/>
        </>       
    )
}
export default RegistrationFormPage