import React from 'react';
import ContactForm from '../components/contactForm';
import Link from 'next/link';
import AnimatedRoutes from '../animatedRoutes';

const Page = () => {
    return (
        <AnimatedRoutes>
        <div className='text-center text-2xl py-8 w-4/5 m-auto'>
                <h2 className='text-2xl'>Contact us! We can&apos;t wait to hear from you.</h2>
            <ContactForm />
        </div>
        </AnimatedRoutes>
    );
};

export default Page;
