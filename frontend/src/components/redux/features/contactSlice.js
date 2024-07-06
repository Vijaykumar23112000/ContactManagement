import { createSlice } from "@reduxjs/toolkit";
import { getAllContacts } from "@/components/api/ContactService";

const initialState = {
    loading: false,
    data: {},
    error: ""
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllContacts.pending, state => (
            { ...state, loading: true, error: "", data: null, }
        ))
        builder.addCase(getAllContacts.fulfilled, (state, action) => (
            { ...state, loading: false, data: action.payload, error: "" }
        ))
        builder.addCase(getAllContacts.rejected, (state, action) => (
            { ...state, loading: false, data: null, error: action.error.message }
        ))
    }
})

export default contactSlice.reducer;