import React from 'react'
import ContactForm from './ContactForm'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <h1 className='text-4xl font-bold  mt-10'>Interested in <br /> working together?</h1>
                <p className=' text-gray-500 mt-4'>Feel free to reach out for any inquiries or <br /> collaborations!</p>
            </div>
            <ContactForm />
        </div>
    )
}
