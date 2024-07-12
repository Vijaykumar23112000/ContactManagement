"use client"

import React, { useState } from 'react'
import { saveContact } from '../api/ContactService'
import LoadingPage from '../home/LoadingPage'

const UpdateForm = ({ contact }) => {

    const [formValues, setFormValues] = useState(contact)
    const [loading, setLoading] = useState(false)

    const formInputData = [
        { htmlFor: "name", type: "text", id: "name", name: "name", label: "Name", },
        { htmlFor: "email", type: "email", id: "email", name: "email", label: "Email", },
        { htmlFor: "phone", type: "text", id: "phone", name: "phone", label: "Phone", },
        { htmlFor: "address", type: "text", id: "address", name: "address", label: "Address", },
        { htmlFor: "title", type: "text", id: "title", name: "title", label: "Title", },
    ]

    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await saveContact(formValues)
            console.log("Updated data:", data)
        } catch (error) {
            console.error("Error saving contact:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className="user-details">
                    <input type="hidden" name="id" required defaultValue={contact.id} />
                    {
                        formInputData.map((item, i) =>
                            <div key={i} className="input-box">
                                <label className='details' htmlFor={item.htmlFor}>{item.label}</label>
                                <input
                                    type={item.type}
                                    id={item.id}
                                    name={item.name}
                                    value={formValues[item.name]}
                                    onChange={handleChange}
                                />
                            </div>
                        )
                    }
                    <div className="input-box">
                        <label htmlFor="status" className="details">Account Status</label>
                        <select id="status" name="status" value={formValues.status} onChange={handleChange} required>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="form_footer">
                    <button className='btn' type='submit'>Save</button>
                </div>
            </form>
            {
                loading && <LoadingPage text="Saving Contact ... " />
            }
        </div>
    )
}

export default UpdateForm
