"use client"

import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

const Header = ({ toggleModal, numOfContacts }) => {
    return (
        <header className="header">
            <div className="container">
                <h3>Contact List ({numOfContacts})</h3>
                <button className='btn' onClick={() => toggleModal(true)}>
                    <div className="flex justify-center items-center gap-3 p-1">
                        <CiCirclePlus /> <span>Add New Contact</span>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header
