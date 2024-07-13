"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../home/LoadingPage';
import { MdOutlineArrowBack } from 'react-icons/md';
import Link from 'next/link';
import { BiUpload } from 'react-icons/bi';
import { getContact, updateImage } from '../api/ContactService';
import UpdateForm from './UpdateForm';

const ContactDetails = ({ contactId , router }) => {

    const dispatch = useDispatch();
    const contactData = useSelector(state => state.contact);
    const inputRef = useRef();
    const [contact, setContact] = useState({})

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
    }, [dispatch, contactId]);

    useEffect(() => {
        if (contactData.contactData) {
            setContact(contactData.contactData);
        }
    }, [contactData.contactData]);

    if (contactData.loading || !contact) {
        return <LoadingPage text="Loading ..." />;
    }

    return (
        <div>
            <Link href={"/contacts"}>
                <MdOutlineArrowBack /> Back To Contacts List
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
                    <UpdateForm router={router} contact={contactData.contactData} />

                </div>
            </div>
            <form className='hidden'>
                <input type="file" ref={inputRef} onChange={e => updatePhoto(e.target.files[0])} name="file" accept='image/*' />
            </form>
        </div>
    )
}

export default ContactDetails
