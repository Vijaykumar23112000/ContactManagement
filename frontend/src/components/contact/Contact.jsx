"use client"

import Image from 'next/image'
import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import Link from 'next/link';
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Contact = ({ contact }) => {
    return (
        <Link href={"/contacts/${contact.id}"}
            className='contact__item'>
            <div className="">
                <div className="contact__image">
                    <Image src={contact.photoUrl} alt={contact.name} />
                </div>
                <div className="contact__details">
                    <p className='contact_name'>{contact.name.substring(0, 15)}</p>
                    <p className='contact_title'>{contact.title}</p>
                </div>
            </div>
            <div className="contact__body">
                <p><FaEnvelope /> {contact.email}</p>
                <p><FaLocationCrosshairs /> {contact.address}</p>
                <p><FaPhone /> {contact.address}</p>
                <p>{contact.status === "Active" ? <FaCheckCircle /> : <ImCross />} {contact.status}</p>
            </div>
        </Link>
    )
}

export default Contact
