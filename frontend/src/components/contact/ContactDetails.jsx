"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact } from '../api/ContactService'
import LoadingPage from '../home/LoadingPage'
import { MdOutlineArrowBack } from "react-icons/md";
import Link from 'next/link'
import { BiUpload } from "react-icons/bi";
import { updateImage } from '../api/ContactService'

const ContactDetails = ({ updateContact, contactId }) => {

    const formInitialValues = { name: "", email: "", phone: "", address: "", title: "", status: "Active", photoUrl: "" }

    const dispatch = useDispatch()
    const contactData = useSelector(state => state.contact)
    const inputRef = useRef()
    const [formValues, setFormValues] = useState(formInitialValues)
    const [photoUrl, setPhotoUrl] = useState("")
    const [contact , setContact] = useState({})
    

    const handleClick = () => console.log(contactData)

    const SelectImage = () => inputRef.current.click()

    const updatePhoto = async (file) => {
        const formData = new FormData()
        formData.append("file", file, file.name)
        formData.append("id", contactId)
        const response = await updateImage(formData)
        console.log("Response from update photo : ",response);

        if (response && response.data && response.data.photoUrl) {
            setPhotoUrl(response.data.photoUrl)
        }
    }

    useEffect(() => {
        dispatch(getContact(contactId))
        setContact(contactData.contactData);
        console.log("use effect => get contact called");
    }, [dispatch , contactId])

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
                    <img src={contact.photoUrl} alt={`profile photo of ${contact.name}`} />
                    <div className="profile__metadata">
                        <p className='profile__name'>{contact.name}</p>
                        <p className='profile__muted'>JPG , GIF or PNG. Max size of 10MB</p>
                        <button onClick={SelectImage}>
                            <BiUpload />
                            <span>Change Photo</span>
                        </button>
                    </div>
                </div>
                <div className="profile__settings">
                    Settings will go here
                </div>
            </div>
            <form className='hidden'>
                <input type="file" ref={inputRef} onChange={e => updatePhoto(e.target.files[0])} name="file" accept='image/*' />
            </form>
            <button onClick={handleClick}>View Redux Data</button>
        </div>
    )
}

export default ContactDetails
