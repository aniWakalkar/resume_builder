import React from 'react'
import { useNavigate } from "react-router-dom";
import resumeTemplate from '../Templates/resumeTemplate.webp'

function Home() {
    const navigate = useNavigate();
  return (
    <>
        <div className='container mx-auto p-4 h-screen '>
        <p className="text-2xl font-medium mt-4 font-mono">Templates</p>
        <p className="font-serif ">Select a template to get started</p>
        <div className="md:container flex flex-wrap md:mx-auto pt-8">

            <div className="w-full p-2 rounded sm:w-2/4 md:w-2/2 lg:w-1/3">
                <img className='border-2 shadow hover:shadow-2xl h-4/4' src={resumeTemplate} alt="resumeTemplate" onClick={()=>{ navigate('/resume_builder/about')}}/>
            </div>
            <div className="w-full p-2 rounded sm:w-2/4 md:w-2/2 lg:w-1/3">
                <img className='border-2 shadow hover:shadow-2xl h-4/4' src={resumeTemplate} alt="resumeTemplate" onClick={()=>{ navigate('/resume_builder/about')}}/>
            </div>
            <div className="w-full p-2 rounded sm:w-2/4 md:w-2/2 lg:w-1/3">
                <img className='border-2 shadow hover:shadow-2xl h-4/4' src={resumeTemplate} alt="resumeTemplate" onClick={()=>{ navigate('/resume_builder/about')}}/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home