import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'


function Notes() {
    const [data,setData]=useState([])
    useEffect(()=>{
        const allNotes = JSON.parse(localStorage.getItem("data"))

        setData(allNotes)
    })

    const handleDelete=(id)=>{
        const findNote=data.findIndex((note)=>note.id==id)
        if(findNote){
            data.splice(findNote,1)
            localStorage.setItem("data",JSON.stringify(data))
            toast.success("Note has been deleted successfully",{
                position:"top-right"
            })

        }

    }

    return (
        <div>
            <h1 className='text-3xl text-center mt-9'>This notes from form</h1>

            <div className='sm:grid gap-2 grid-cols-[300px_300px_300px]  justify-center px-1 mt-4  '>
                {
                    data.map((note) => {
                     return   <div id='box' className=' w-[300px]  ml-10 sm:w-full h-[200px] p-3 border-2 border-purple-700 mt-5  '>
                            <h1 className='font-bold'>{note.title}</h1>
                            <p>{note.description}</p>
                            <button onClick={()=> handleDelete(note.id)} id='btn' className='bg-blue-600 hidden rounded px-2  py-2 text-white mt-9'>Delete</button></div>
                    })
                }
            </div>
            <Toaster/>
            </div>
    )
}

export default Notes