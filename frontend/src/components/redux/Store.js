import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './features/contactsSlice'
import contactReducer from './features/contactSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        contact: contactReducer
    }
})