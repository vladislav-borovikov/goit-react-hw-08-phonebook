import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import RegistrationFormPage from "./Views/RegistrationFormPage";
import PhonebookPage from "./Views/PhonebookPage";
import HomePage from "./Views/HomePage";
import LoginForm from "./LoginForm/LoginForm";


import "./App.css";

function App() {
  return (
    <>
      <Navigation />

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