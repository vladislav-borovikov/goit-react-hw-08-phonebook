import {  useRouteMatch } from "react-router-dom"
import Phonebook from "components/Phonebook/Phonebook"


const PhonebookPage = () => {

const {url} = useRouteMatch()
  
  return (
    
            <div className="App">
      <Phonebook url={url}/>
    </div>
       
       
    )
}
export default PhonebookPage