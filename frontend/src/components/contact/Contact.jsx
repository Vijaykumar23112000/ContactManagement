"use client"

import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import Link from 'next/link';
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Contact = ({ contact }) => {

    const defaultImageUrl = "https://media.istockphoto.com/id/1281863632/photo/close-up-portrait-of-smiling-happy-businessman-in-suit-with-suitcase-3d-illustration-of.webp?b=1&s=170667a&w=0&k=20&c=cCXtzt76YX9rZi4bgpqkHtetiS-EJ_NQqhU-anozwag="

    return (
        <Link href={`/contacts/${contact.id}`}
            className='contact__item'>
            <div className="">
                <div className="contact__image">
                    <img src={contact.photoUrl ? `${contact.photoUrl}` : defaultImageUrl} alt={contact.name} />
                </div>
                <div className="contact__details">
                    <p className='contact_name'>{contact.name.substring(0, 15)}</p>
                    <p className='contact_title'>{contact.title}</p>
                </div>
            </div>
            <div className="contact__body">
                <div className="flex justify-start items-center gap-3 pl-5 ">
                    <FaEnvelope />
                    <p>{contact.email}</p>
                </div>
                <div className="flex justify-start items-center gap-3 pl-5">
                    <FaLocationCrosshairs />
                    <p>{contact.address}</p>
                </div>
                <div className="flex justify-start items-center gap-3 pl-5">
                    <FaPhone />
                    <p>{contact.address}</p>
                </div>
                <div className="flex justify-start items-center gap-3 pl-5">
                    {contact.status === "Active" ? <FaCheckCircle /> : <ImCross />}
                    <p>{contact.status}</p>
                </div>
            </div>
        </Link>
    )
}

export default Contact
