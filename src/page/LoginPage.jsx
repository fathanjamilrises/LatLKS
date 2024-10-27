import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='bg-blue-400 w-full h-screen flex justify-center items-center'>
       <div className='flex justify-center mt-20'>
    <div className='flex flex-row bg-slate-200 w-[800px] h-[600px] rounded-md'>
      <div className='flex flex-col w-1/2 p-10'>
        <h1 className='text-3xl font-bold mb-5'>Login Page</h1>
        <p className='mb-20 text-md'>Silahkan Login untuk melanjutkan</p>
        <form className='flex flex-col'>
          <label htmlFor="email" className='block mb-2 text-sm font-medium'>
            Nama
          </label>
          <input type="text" className='block w-full py-2 px-3 border border-gray-300 rounded-md mb-4' />
          <label htmlFor="password" className='block mb-2 text-sm font-medium'>Password</label>
          <input type="password" className='block w-full py-2 px-3 border border-gray-300 rounded-md mb-20' />
          <Link to="/Dashboard"><button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 w-full rounded'>Login</button></Link>
        </form>
      </div>
      <div className='w-1/2'>
        <img src='/assets/logo.png' className='w-full h-full object-cover rounded-r-md' alt="Logo" />
      </div>
  
    </div>
  </div>
  
    </div>
   
  )
}
