"use client"

import Header from '../header/Header'

const HomeClient = ({ data }) => {

    return (
        <>
            <Header numOfContacts={data?.page?.totalElements} />
        </>
    )
}

export default HomeClient
