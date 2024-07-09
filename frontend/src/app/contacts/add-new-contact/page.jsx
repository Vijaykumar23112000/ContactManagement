"use client"

import Modal from '@/components/modal/Modal'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter()

    return (
        <>
            <Modal router={router} />
        </>
    )
}

export default page
