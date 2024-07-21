import React, { useState } from 'react'
import Form from './Form'

const Header = () => {
    const [IsOpen, setIsOpen]=useState(false)
    const handleOpenForm=()=>{
        setIsOpen(true)
    }
    const Handle=()=>{
        setIsOpen(false)
    }
    return (

        <div>
        <div className='flex  bg-primaryColor justify-between  py-4 px-14 items-center '>
            <h1 className="  ml-0 text-5xl sm:text-6xl  text-white">Header</h1>
            <i onClick={handleOpenForm} class="fa-solid fa-bars  mt-2 sm:hidden text-4xl text-white"></i>
            <button onClick={handleOpenForm} className='w-[100px] h-[50px] 
            rounded mt-4 ml-5  text-3xl hover:bg-yellow-600  text-white  p-2 bg-SecondaryColor hidden sm:block'>Note</button>
        </div>
        {
            IsOpen==true?<Form close={IsOpen} CloseBtn={Handle}/> :""
        }
        </div>
    )
}

export default Header