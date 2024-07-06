import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '../../components/redux/features/contactSlice'

export const store = configureStore({
    reducer: {
        contact: contactReducer
    }
})