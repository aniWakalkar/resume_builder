import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {handleSkillDetails, handleDisplay } from '../actions';

function Skills() {
    const dispatch = useDispatch();
    const isDisplay = useSelector((state) => state.isDisplay)
    const [codeLanguage, setCodeLanguage] = useState(''); 


  return (
    <>
        <div className={isDisplay === 3 ? "p-8" : "hidden justify-evenly p-5"}>

            <div className="w-96 my-3">
                <div className="relative w-full min-w-[200px]">
                    <textarea rows="3"
                    className="border border-gray-400 p-5 w-full rounded-lg focus:outline-none focus:border-[#6A64F1]"
                    placeholder=" "
                    value={codeLanguage}
                    onChange={(e)=>{setCodeLanguage(e.target.value)}}
                    ></textarea>
                </div>
            </div>
            <button
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                onClick={()=>{dispatch(handleSkillDetails(codeLanguage)); dispatch(handleDisplay(4))}}>
                Save & Next
            </button>
        </div>
    </>
  )
}

export default Skills