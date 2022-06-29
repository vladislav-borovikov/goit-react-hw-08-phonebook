import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    // const state = thunkApi.getState();
    // const persistedToken = state.auth.token;

    // token.set(persistedToken);
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contac, thunkApi) => {
    try {
      const contact = await contactsApi.addContact(contac);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
