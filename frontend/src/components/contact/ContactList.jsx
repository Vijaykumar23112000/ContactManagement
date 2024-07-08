"use client"

import React from 'react'
import Contact from './Contact'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const ContactList = ({ data, currentPage, getAllContacts }) => {
    return (

        <main className='main'>
            {data?.content?.length === 0 && <div className="">No Contacts.. Please add some contacts</div>}
            <ul className='contact__list'>
                {
                    data?.content?.length > 0 && data.content.map((item, i) => <Contact key={i} contact={item} />)
                }
            </ul>
            {
                data?.content?.length > 0 && data?.totalPages > 1 &&
                <div className="pagination">
                    <a className={0 === currentPage ? "disabled" : ""} onClick={() => getAllContacts(currentPage - 1)}>
                        <FaLessThan />
                    </a>
                    {
                        data && [...Array(data.totalPages).keys()].map((item, i) =>
                            <a
                                key={i}
                                onClick={getAllContacts(item)}
                                className={currentPage === item ? "active" : ""}
                            >
                                {item + 1}
                            </a>
                        )
                    }
                    <a className={data.page.totalPages === currentPage + 1 ? "disabled" : ""} onClick={() => getAllContacts(currentPage + 1)}>
                        <FaGreaterThan />
                    </a>
                </div>
            }
        </main>
    )
}

export default ContactList
