import ContactDetails from "@/components/contact/ContactDetails"

const page = ({ params }) => {

    const contactId = params.contactId

    return (
        <>
            <ContactDetails contactId={contactId} />
        </>
    )
}

export default page
