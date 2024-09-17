import React from 'react'
import { Link } from 'react-router-dom'

const NotFountPage = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className='text-6xl'>NOT FOUND WHAT YOU SEARCHING FOR</h1>
        <Link className='px-10 rounded-lg py-3 border-2 border-zinc-500 text-2xl mt-4'>Home</Link>
      </div>
      </div>
    </div>
  )
}

export default NotFountPage
