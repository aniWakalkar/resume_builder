import {React} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {handleDisplay} from '../actions/index'

import Personal from './Personal';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Submit from './Submit';

function About() {
  const dispatch = useDispatch();
  const isDisplay = useSelector((state) => state.isDisplay)
  const isPersonal = useSelector((state) => state.isPersonal)
  const isEducation = useSelector((state) => state.isEducation)
  const isSkill = useSelector((state) => state.isSkill)
  const isExperience = useSelector((state) => state.isExperience)

  return (
    <>
    <div className='container mx-auto p-4 flex h-screen pt-10'>

      <div className="Navigate mt-5 flex flex-col">
        <button className={isDisplay === 1 ?"inline-flex overflow-hidden bg-blue-500 text-white rounded group mt-3 border-r-2 border-y-2 border-l-8" : "inline-flex overflow-hidden text-grey bg-white rounded group mt-3 border-r-2 border-y-2 border-l-8 hover:bg-blue-500 hover:text-white"} onClick={()=>{dispatch(handleDisplay(1))}}>
        <span className="pl-4 pr-5 py-2.5 font-mono">Personal Details</span>
        </button>

        <button className={isDisplay === 2 ?"inline-flex overflow-hidden bg-blue-500 text-white rounded group mt-3 border-r-2 border-y-2 border-l-8" : "inline-flex overflow-hidden text-grey bg-white rounded group mt-3 border-r-2 border-y-2 border-l-8 hover:bg-blue-500 hover:text-white"} onClick={()=>{dispatch(handleDisplay(2))}}>
        <span className="pl-4 pr-5 py-2.5 font-mono">Education Details</span>
        </button>

        <button className={isDisplay === 3 ?"inline-flex overflow-hidden bg-blue-500 text-white rounded group mt-3 border-r-2 border-y-2 border-l-8" : "inline-flex overflow-hidden text-grey bg-white rounded group mt-3 border-r-2 border-y-2 border-l-8 hover:bg-blue-500 hover:text-white"} onClick={()=>{dispatch(handleDisplay(3))}}>
        <span className="pl-4 pr-5 py-2.5 font-mono">Skills Details</span>
        </button>

        <button className={isDisplay === 4 ?"inline-flex overflow-hidden bg-blue-500 text-white rounded group mt-3 border-r-2 border-y-2 border-l-8" : "inline-flex overflow-hidden text-grey bg-white rounded group mt-3 border-r-2 border-y-2 border-l-8 hover:bg-blue-500 hover:text-white"} onClick={()=>{dispatch(handleDisplay(4))}}>
        <span className="pl-4 pr-5 py-2.5 font-mono">Experience Details</span>
        </button>

        <button className={isDisplay === 5 ?"inline-flex overflow-hidden text-grey bg-green-500 rounded group mt-3 border-r-2 border-y-2 border-l-8 hover:text-white" : "inline-flex overflow-hidden text-grey bg-white rounded group mt-3 border-r-2 border-y-2 border-l-8 hover:bg-green-500 hover:text-white"}>
        <span className="pl-4 pr-5 py-2.5 font-mono"> Submit </span>
        </button>
      </div>


      <div className="aboutForm mx-auto">
        <Personal />
        <Education />
        <Skills />
        <Experience />
        <Submit/>
      </div>
    </div>
    </>
  )
}

export default About