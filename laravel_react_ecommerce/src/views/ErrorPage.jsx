//import React from 'react';
import errorImage from '../assets/images/error.png';

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
            <img className='h-50 w-80 object-contain md:object-cover mx-auto' src={errorImage} alt="Error Image" />
            <h1 className='text-3xl font-bold'>Oops! Something went wrong.</h1>
            <p className='text-lg'>The page you are looking for does not exist.</p>
        </div>
    </div>
  )
}

export default ErrorPage
