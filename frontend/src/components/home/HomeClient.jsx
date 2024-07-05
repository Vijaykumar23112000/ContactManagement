"use client"

import React, { useEffect, useState } from 'react'
import { getContacts } from '../api/ContactService'
import Header from '../header/Header'

const HomeClient = () => {

    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(0)

    const getAllContacts = async (page = 0, size = 10) => {
        try {
            setCurrentPage(page)
            const response = await getContacts(page, size)
            setData(response.data)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllContacts()
    }, [])

    const toggleModal = show => {
        console.log("Toggle modal clicked");
    }

    return (
        <>
            <Header toggleModal={toggleModal} numOfContacts={data.totalElements} />
        </>
    )
}

export default HomeClient
