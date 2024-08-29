import React from 'react'
import Navbar from '../_component/Navbar'
import Image from 'next/image'
import Logo from '../_component/logo.png'
// import { Link } from 'next/link'

const login = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 flex justify-center items-end gap-24 flex-row-reverse">
        <div className="">
          <div>
            <h2 className='text-xl mb-4'>Log in here</h2>
            <div className="card-body">
              <form action="submit">
                <div className="mb-6">
                  <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email </label>
                  <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter email' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password </label>
                  <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter password' required/>
                </div>
                <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg">Submit</button>
              </form>
              <div className='mt-6 '>
                <a href="" className='underline underline-offset-8'>forgot password ?</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className='flex flex-col gap-5'>
            <Image src={Logo} alt='logo' className='mt-4'/>
            <h2>log in with</h2>
            <div>
              <button className='bg-blue-500 py-2 px-4 rounded-lg'>facebook</button>
              <button className='bg-blue-500 py-2 px-4 rounded-lg ml-5'>google</button>
            </div>
          </div>
          <div className="card-header">
            <h2>don't have account ? <a href="../page/signup" className='underline underline-offset-8'>click here for register</a></h2>
          </div>
        </div>
      </div>
    </div >

  )
}

export default login