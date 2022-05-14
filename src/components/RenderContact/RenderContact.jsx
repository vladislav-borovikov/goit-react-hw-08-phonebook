import React from "react";
import ContactItem from "../ContactItem/ContactItem"

const RenderContacts = ( {value} ) => {

  return (      
    <ul>
      {value.map(contact => (<ContactItem key={contact.id} {...contact}/>
      ))}
    </ul>
    
  );
};

export default RenderContacts;


