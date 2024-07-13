"use client"

import React, { useState } from 'react'
import LoadingPage from '../home/LoadingPage'
import { useDispatch } from 'react-redux'
import { deleteContact, updateContact } from '../api/ContactService'

const UpdateForm = ({ contact , router }) => {

    const [formValues, setFormValues] = useState(contact)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [deleted, setDeleted] = useState(false)
    const [open , setOpen] = useState(false)

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
            await dispatch(updateContact(formValues)).unwrap()
            console.log("Contact updated successfully")
        } catch (error) {
            console.error("Error saving contact:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteContact = () => {
        setDeleted(true)
        deleteContact(contact.id)
        router.push('/contacts')
        setDeleted(false)
    }

    const Modal = () => {
        return (
            <div className="h-screen w-screen absolute left-0 top-0 bg-black/80 flex flex-col justify-center items-center gap-3">
                <div className="">
                    {
                        <p className='text-white'>Do u really want to delete {contact.name} .. ?</p>
                    }
                </div>
                <div className="flex justify-start items-center gap-3">
                    <button className='btn' onClick={() => setOpen(false)}>Close</button>
                    <button className='btn' onClick={handleDeleteContact}>Delete</button>
                </div>
            </div>
        )
    }

    if (deleted) (<LoadingPage text="Contact Deleted Successfully" />)

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
                <div className="flex justify-start items-center">
                        <button className='btn' type='submit'>Save</button>
                        <div className="btn" onClick={() => setOpen(true)}>Delete</div>                    
                </div>
                {
                    open && <Modal />
                }
            </form>
            {
                loading && <LoadingPage text="Saving Contact ... " />
            }
        </div>
    )
}

export default UpdateForm
