// src/store/contactsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../utils/types";

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    {
      id: "dasdijasd",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      isActive: true,
      phone: "123456789",
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;
