"use client"

import React, { useState } from 'react'
import { getContact } from '../api/ContactService'

const ContactDetails = ({ updateContact, updateImage , contactId }) => {

    const formInitialValues = { name: "", email: "", phone: "", address: "", title: "", status: "Active", photoUrl: "" }

    const contactData = getContact(contactId)
    console.log(contactData);

    const [formValues, setFormValues] = useState(formInitialValues)

    return (
        <div>
            contact details
        </div>
    )
}

export default ContactDetails
