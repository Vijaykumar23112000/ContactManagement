"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../home/LoadingPage';
import { MdOutlineArrowBack } from 'react-icons/md';
import Link from 'next/link';
import { BiUpload } from 'react-icons/bi';
import { getContact, updateImage } from '../api/ContactService';

const ContactDetails = ({ contactId }) => {

    const formInitialValues = { name: "", email: "", phone: "", address: "", title: "", status: "Active", photoUrl: "" };
    const dispatch = useDispatch();
    const contactData = useSelector(state => state.contact);
    const inputRef = useRef();
    const [contact, setContact] = useState(contactData.contactData)

    const SelectImage = () => inputRef.current.click();

    const updatePhoto = async (file) => {
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("id", contactId);
        await updateImage(formData);
        setContact(prev => ({ ...prev, photoUrl: `${prev.photoUrl}?updated_at=${new Date().getTime()}` }))
    };

    useEffect(() => {
        dispatch(getContact(contactId));
        console.log("1st useEffect => getContact called");
    }, [dispatch, contactId]);

    return (
        <div>
            <Link href={"/contacts"}>
                <MdOutlineArrowBack />
            </Link>
            {contactData.loading && <LoadingPage text="Loading ... " />}
            <div className="profile">
                <div className="profile__details">
                    <img
                        src={contact.photoUrl}
                        alt={`profile photo of ${contact.name}`}
                    />
                    <div className="profile__metadata">
                        <p className='profile__name'>{contact.name}</p>
                        <p className='profile__muted'>JPG , GIF or PNG. Max size of 10MB</p>
                        <button onClick={SelectImage} className='btn'>
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
        </div>
    )
}

export default ContactDetails
