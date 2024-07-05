import axios from "axios";

const API_URL = "http://localhost:8000/contacts"

export const saveContact = async (contact) => {
    return await axios.post(API_URL, contact)
}

export const getContacts = async (page = 0, size = 10) => {
    return await axios.get(`${API_URL}?page=${page}&size=${size}`)
}

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