"use client"

import React, { useEffect, useState } from 'react'

const UpdateForm = ({ contact }) => {

    const formInputData = [
        { htmlFor: "name", type: "text", id: "name", name: "name", label: "Name", },
        { htmlFor: "email", type: "email", id: "email", name: "email", label: "Email", },
        { htmlFor: "phone", type: "text", id: "phone", name: "phone", label: "Phone", },
        { htmlFor: "address", type: "text", id: "address", name: "address", label: "Address", },
        { htmlFor: "title", type: "text", id: "title", name: "title", label: "Title", },
        { htmlFor: "status", type: "text", id: "status", name: "status", label: "Status", },
    ]

    const [formValues, setFormValues] = useState(contact)

    const handleChange = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    useEffect(() => {
        setFormValues(contact);
    }, [contact]);

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
        </div>
    )
}

export default UpdateForm
