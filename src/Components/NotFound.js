import React from 'react'
import {Link} from 'react-router-dom';
export default function NotFound() {
  return (
    <div className='page-not-found'>
        <h1>404 not found the page</h1>
        <h2><Link to="/portal/home">Back to Homepage</Link></h2>
        <img src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" alt="404 error"/>
    </div>
  )
}
