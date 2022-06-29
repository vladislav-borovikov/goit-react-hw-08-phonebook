import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import RenderContacts from "../RenderContact/RenderContact";
import { getContacts, filter } from '../../redax/contacts/contacts-selector'
import { addFilter } from "redax/contacts/contacts-slice";
import { addContact, fetchContacts } from "redax/contacts/contacts-operation";
import { useEffect } from "react";



const  Phonebook = () => {
const contactsValue = useSelector(getContacts);
  const filterValue = useSelector(filter);
  const dispatch = useDispatch()

   const changFilter = (event) => {
    dispatch(addFilter(event.currentTarget.value))
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const createNewContact = ({ name, number }) => {
    const findedContact = contactsValue.find(
      (contact) => contact.name.toLocaleLowerCase() === name.toLowerCase()
    );
    if (findedContact) {
      toast.error(`${name} is already in contacts.`);
    } else
    dispatch(addContact({ name, number }));

  }

    const findedContactByFilter = contactsValue.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
return (
      <>
       <h1> Phonebook </h1>
         <Form onSubmit={createNewContact} />
         
         <Toaster />
        <h2>Contacts</h2>
        <Filter value={filterValue} onChange={changFilter} />
        <RenderContacts
          value={findedContactByFilter}/>
      </>
    );
  
}

export default Phonebook;
