"use client"

import Link from 'next/link';
import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

const Header = ({ numOfContacts }) => {

    return (
        <header className="header">
            <div className="container">
                <h3>Contact List ({numOfContacts})</h3>
                <Link className='btn' href={"/contacts/add-new-contact"}>
                    <div className="flex justify-center items-center gap-3 p-1">
                        <CiCirclePlus /> <span>Add New Contact</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header
