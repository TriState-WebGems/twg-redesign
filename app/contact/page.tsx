import React from 'react';
import ContactForm from '../components/contactForm';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='text-center text-2xl py-8 w-4/5 m-auto'>
            <h2 className='text-2xl'>Contact us! We can&apos;t wait to hear from you.</h2>
            <small className='text-gray-300 text-sm'>Or leave us a message at <Link href='tel:1-512-765-6480' className='text-purple-600 bg-yellow-300 rounded-lg p-1'>512-765-6480</Link>!</small>
            <ContactForm />
        </div>
    );
};

export default Page;
