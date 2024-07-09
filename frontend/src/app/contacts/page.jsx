"use client"

import { getAllContacts } from '@/components/api/ContactService'
import ContactList from '@/components/contact/ContactList'
import HomeClient from '@/components/home/HomeClient'
import LoadingPage from '@/components/home/LoadingPage'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Contacts = () => {

    const [currentPage, setCurrentPage] = useState(0)
    const contactData = useSelector(state => state.contact)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllContacts({ page: currentPage, size: 10 }))
        setCurrentPage(0)
    }, [dispatch])

    return (
        <>
            <HomeClient data={contactData.data} />
            {
                contactData.loading && <LoadingPage text = "Loading ... " />
            }
            <ContactList data={contactData.data} currentPage={currentPage} getAllContacts={getAllContacts} />
        </>
    )
}

export default Contacts
