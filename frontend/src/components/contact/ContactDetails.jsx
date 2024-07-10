"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact } from '../api/ContactService'
import LoadingPage from '../home/LoadingPage'
import { MdOutlineArrowBack } from "react-icons/md";
import Link from 'next/link'
import { BiUpload } from "react-icons/bi";

const ContactDetails = ({ updateContact, updateImage, contactId }) => {

    const formInitialValues = { name: "", email: "", phone: "", address: "", title: "", status: "Active", photoUrl: "" }

    const dispatch = useDispatch()
    const contactData = useSelector(state => state.contact)

    const [formValues, setFormValues] = useState(formInitialValues)

    const handleClick = () => {
        console.log(contactData);
    }

    useEffect(() => {
        dispatch(getContact(contactId))
    }, [dispatch])

    return (
        <div>
            <Link href={"/contacts"}>
                <MdOutlineArrowBack />
            </Link>
            {
                contactData.loading && <LoadingPage text="Loading ... " />
            }
            <div className="profile">
                <div className="profile__details">
                    <img src={contactData.contactData.photoUrl} alt={`profile photo of ${contactData.contactData.name}`} />
                    <div className="profile__metadata">
                        <p className='profile__name'>{contactData.contactData.name}</p>
                        <p className='profile__muted'>JPG , GIF or PNG. Max size of 10MB</p>
                        <button>
                            <BiUpload />
                            <span>Change Photo</span>
                        </button>
                    </div>
                </div>
                <div className="profile__settings">
                    Settings will go here
                </div>
            </div>
            <button onClick={handleClick}>View Data</button>
        </div>
    )
}

export default ContactDetails
