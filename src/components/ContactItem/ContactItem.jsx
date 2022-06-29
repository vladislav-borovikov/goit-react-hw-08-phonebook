
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteContact } from "redax/contacts/contacts-operation";


const ContactItem = ({ id, name, number}) => {

  const dispatch = useDispatch()
    
    return (   
      <li key={id}>
          <p>
            {name} {number} 
        </p>

        <Button variant="outlined" color="error" type="submit" onClick={() => dispatch(deleteContact(id))}>
           Delete
          </Button>
        </li>
    
    
  );
};

export default ContactItem;