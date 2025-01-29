"use client"
import React, { useState } from 'react'

function Navbar() {
  const [contactinfo, setContactInfo] = useState("")
  return (
    <nav className='w-full flex justify-between bg-white shadow-lg p-4 items-center '>
      <div className='w-full text-black text-start text-xl font-bold'>Contact Manger -<span className='text-black'>Aditya Rawat</span></div>
      
      <div className='w-full text-black text-center'>
        
        <input type="search" className='p-2 border rounded-full bg-gray-100 w-1/2  outline-gray-300' value={contactinfo} onChange={(e)=>{setContactInfo(e.target.value)}} placeholder='search contact here' />
        
        
        </div>
      <div className='w-full flex text-black justify-end items-center'><div className='w-10 h-10 rounded-full bg-gray-300 items-center'></div></div>
    </nav>
  )
}

export default Navbar