import axios from 'axios';

export async function fetchContacts() {
  const response = await axios.get('contacts');
  return response.data;
}

export const addContact = contact => {
  return axios.post('contacts', contact).then(({ data }) => data);
};

export const deleteContact = id => {
  return axios.delete(`contacts/${id}`);
};
