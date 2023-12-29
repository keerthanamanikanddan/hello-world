import React from 'react'
import "../../App.css"
import error from "../../assets/images/404.png"

export default function NoMatch() {
    return (
        <div className='error'>
            <h1 className='d'> 404 - Page not found! </h1>
            <img src={error} alt='error' />
        </div>
    )
}
