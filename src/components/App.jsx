import { Route, Switch } from "react-router-dom";
import RegistrationFormPage from "./Views/RegistrationFormPage";
import PhonebookPage from "./Views/PhonebookPage";
import HomePage from "./Views/HomePage";
import LoginForm from "./LoginForm/LoginForm";
import HederNavigat from "./Views/HederNavigat";


import "./App.css";

function App() {
  return (
    <>
      <HederNavigat />

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/register" component={RegistrationFormPage} />
        <Route path="/contacts" component={PhonebookPage} />
        <Route path="/login" component={LoginForm}/> 
      </Switch>
    
    </>
    
  );
}

export default App;