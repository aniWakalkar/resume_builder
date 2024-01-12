import React, {useState} from 'react'
import {useSelector} from 'react-redux';

function Skills(props) {
    const isDisplay = useSelector((state) => state.isDisplay)
    const [codeLanguage, setCodeLanguage] = useState(''); 

    const handleSkills = ()=>{
        props.setState((prev)=>[...prev, codeLanguage])
        setCodeLanguage('')
    }

  return (
    <>
        <div className={isDisplay === 3 ? "p-8" : "hidden justify-evenly p-5"}>
            <div className="language">
                <div className="w-full flex">
                    <input type="text"  placeholder="Coding Languages" className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={codeLanguage} onChange={(e)=>{setCodeLanguage(e.target.value)}}/>

                    <button className='my-2 ml-10 bg-[#6A64F1] text-white px-4 py-2 rounded-md' onClick={handleSkills}>+</button>
                </div>
                <ul className='mt-8'>
                    <li className='flex items-center justify-between pl-2 px-1'><span >hello world </span><svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Skills