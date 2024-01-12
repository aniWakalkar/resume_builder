import React from 'react'
import { useNavigate } from "react-router-dom";
import resumeTemplate from '../Templates/resumeTemplate.webp'
import './Home.css'

function Home() {
    const navigate = useNavigate();
  return (
    <>
        <div className='container mx-auto p-4 h-screen'>
        <p className="text-2xl font-medium mt-4">Templates</p>
        Select a template to get started
        <div className="md:container flex flex-wrap md:mx-auto pt-8">

            <div className="w-full p-2 rounded sm:w-1/4">
                <img className='border-2 shadow hover:shadow-2xl h-4/4' src={resumeTemplate} alt="resumeTemplate" onClick={()=>{ navigate('/about')}}/>
            </div>
            <div className="w-full p-2 rounded sm:w-1/4">
                <img className='border-2 shadow hover:shadow-2xl h-4/4' src={resumeTemplate} alt="resumeTemplate" onClick={()=>{ navigate('/about')}}/>
            </div>
            <div className="w-full p-2 rounded sm:w-1/4">
                <img className='border-2 shadow hover:shadow-2xl h-4/4' src={resumeTemplate} alt="resumeTemplate" onClick={()=>{ navigate('/about')}}/>
            </div>
            <div className="w-full p-2 rounded sm:w-1/4">
                <img className='border-2 shadow hover:shadow-2xl h-4/4' src={resumeTemplate} alt="resumeTemplate" onClick={()=>{ navigate('/about')}}/>
            </div>
        </div>
        </div>
        {/* <Footer/> */}
    </>
  )
}

export default Home