"use client"

import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import { getAllContacts } from '../api/ContactService'
import { useSelector, useDispatch } from 'react-redux'

const HomeClient = () => {

    const [currentPage, setCurrentPage] = useState(0)

    // const getAllContacts = async (page = 0, size = 10) => {
    //     try {
    //         setCurrentPage(page)
    //         const response = await getContacts(page, size)
    //         setData(response.data)
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const data = useSelector(state => state.contact)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllContacts({ page: currentPage, size: 10 }))
        console.log(data);
    }, [dispatch])

    const toggleModal = show => {
        // dispatch(getAllContacts({ page: 0, size: 10 }))
        // console.log("Data from store", data)
    }

    return (
        <>
            {
                data.loading && <div className="">Loading On Process</div>
            }
            <Header toggleModal={toggleModal} numOfContacts={data.totalElements} />
        </>
    )
}

export default HomeClient
