import React from 'react'
import "../../App.css"
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>ALAFIIF LANDSCAPING | Home</title>
            </Helmet>
            <h1 className='a'>Home</h1>
            <h3 onClick={() => navigate('/contact')}>Go to Contacts</h3>
        </>
    );
}
