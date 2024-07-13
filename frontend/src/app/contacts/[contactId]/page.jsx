"use client"

import ContactDetails from "@/components/contact/ContactDetails"
import { useRouter } from 'next/navigation'

const page = ({ params }) => {

    const contactId = params.contactId
    const router = useRouter()

    return (
        <>
            <ContactDetails contactId={contactId} router={router} />
        </>
    )
}

export default page
