import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./ApiConfig";

export const saveContact = async (requestData) => {
    try {
        return await api.post("/contacts", requestData)
    } catch (error) {
        throw new Error(error.message);
    }
}

export const updateContact = createAsyncThunk("contact/Updated",
    async (requestData) => {
        try {
            const response = await api.post("/contacts", requestData)
            return response.data
        } catch (error) {
            throw new Error(error.message);
        }
    }
)

export const getAllContacts = createAsyncThunk("contacts/fetchAllContacts",
    async ({ page = 0, size = 10 }) => {
        try {
            const queryParams = new URLSearchParams({ page, size })
            const response = await api.get(`/contacts`);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
)

export const getContact = createAsyncThunk("contact/fetchContact",
    async (contactId) => {
        try {
            const response = await api.get(`/contacts/${contactId}`)
            return response.data
        } catch (error) {
            throw new Error(error.message);
        }
    }
)

export const updateImage = async (formData) => {
    try {
        return await api.put("/contacts/photo", formData)
    } catch (error) {
        console.log(error);
    }
}

export const deleteContact = async (id) => {
    return await api.delete(`/contacts/${id}`)
}