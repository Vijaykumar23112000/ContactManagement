import { getContact } from "@/components/api/ContactService"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    contactData: {},
    error: ""
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    extraReducers: builder => {
        builder.addCase(getContact.pending, state => (
            { ...state, loading: true, error: "", contactData: {}, }
        ))
        builder.addCase(getContact.fulfilled, (state, action) => (
            { ...state, loading: false, error: "", contactData: action.payload }
        ))
        builder.addCase(getContact.rejected, (state, action) => (
            { ...state, loading: false, contactData: {}, error: action.error.message }
        ))
    }
})

export default contactSlice.reducer