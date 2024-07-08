import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./ApiConfig";

const API_URL = "http://localhost:8000/contacts"

// export const saveContact = async (contact) => {
//     return await axios.post(API_URL, contact)
// }

export const saveContact = async (requestData) => {
    try {
        const response = await api.post("/contacts", requestData )
        return response
    } catch (error) {
        console.log(error);
    }
}
// export const getContacts = async (page = 0, size = 10) => {
//     return await axios.get(`${API_URL}?page=${page}&size=${size}`)
// }

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

export const getContact = async (id) => {
    return await axios.get(`${API_URL}/${id}`)
}

export const updateContact = async (contact) => {
    return await axios.get(API_URL, contact)
}

export const updatePhoto = async (formData) => {
    return await axios.put(`${API_URL}/photo`, formData)
}

export const deleteContact = async (id) => {
    return await axios.delete(`${API_URL}/${id}`)
}