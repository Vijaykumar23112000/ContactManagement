"use client"

import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FaWindowClose } from "react-icons/fa";
import { saveContact } from '../api/ContactService';

const ModalFormData = [
    { htmlFor: "name", name: "name", id: "name", label: "Name", type: "text", },
    { htmlFor: "email", name: "email", id: "email", label: "Email", type: "email", },
    { htmlFor: "title", name: "title", id: "title", label: "Title", type: "text", },
    { htmlFor: "phone", name: "phone", id: "phone", label: "Phone Number", type: "text", },
    { htmlFor: "address", name: "address", id: "address", label: "Address", type: "text", },
]

const formInitialValues = { name: "", email: "", phone: "", address: "", title: "", status: "Active" }

const Modal = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await saveContact(formValues)
        console.log(response);
        // console.log(formValues);

        setFormValues(formInitialValues)
        fileRef.current.value = ""
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const [formValues, setFormValues] = useState(formInitialValues)
    const [file, setFile] = useState(undefined)
    const fileRef = useRef()

    return (
        <div className='modal' id="modal">
            <div className="modal__header">
                <h3>New Contact</h3>
                <FaWindowClose />
            </div>
            <div className="divider"></div>
            <div className="modal__body">
                <form onSubmit={handleSubmit}>
                    <div className="user-details">
                        {
                            ModalFormData.map((item, i) =>
                                <div className="input-box" key={i}>
                                    <label htmlFor={item.htmlFor} className='details'>{item.label}</label>
                                    <input type={item.type} id={item.id} name={item.name} value={formValues[item.name]} onChange={handleChange} required />
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
                        <div className="file-input">
                            <label htmlFor="photo" className='details'>Profile Photo</label>
                            <input type="file" onChange={e => setFile(e.target.files[0])} ref={fileRef} id='photo' name='photo' />
                        </div>
                        <div className="form_footer">
                            <Link href={"/contacts"} className='btn btn-danger'>Cancel</Link>
                            <button type='submit' className='btn'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
