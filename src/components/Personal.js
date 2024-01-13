import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {handlePersonalDetails, handleDisplay} from '../actions/index'
import { initialState } from '../actions/index';

function Personal() {
    const dispatch = useDispatch();
    const isDisplay = useSelector((state) => state.isDisplay)
    const [myInitialState, setMyInitialState] = useState(initialState)
    const handleSetInitialState = (e) => {
        setMyInitialState((prevInfo) => ({...prevInfo, [e.target.id]: e.target.value}));
    };

  return (
    <>
        <div className={isDisplay === 1 ? "flex items-center justify-evenly p-8" : "hidden items-center justify-center p-12"}>
        {/* <!-- Author: FormBold Team --> */}

        {/* <button
            className="hover:shadow-form mx-auto rounded-md bg-[#6A64F1] text-center text-base font-semibold text-white outline-none p-2 mr-10" >
            Prev 
        </button> */}


        <div className="mx-auto w-full max-w-[550px] bg-white">
            <div className="mb-5">
                <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                    value={myInitialState.name}
                    onChange={(e)=>{handleSetInitialState(e)}}/>
            </div>

            
            <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                    value={myInitialState.phone}
                    onChange={(e)=>{handleSetInitialState(e)}}/>
            </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                    value={myInitialState.email}
                    onChange={(e)=>{handleSetInitialState(e)}}/>
            </div>
            </div>
            </div>


            <div className="mb-5 pt-3">
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="address" id="address" placeholder="Enter address"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                value={myInitialState.address}
                                onChange={(e)=>{handleSetInitialState(e)}}/>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="city" id="city" placeholder="Enter city"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                value={myInitialState.city}
                                onChange={(e)=>{handleSetInitialState(e)}}/>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="state" id="state" placeholder="Enter state"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                value={myInitialState.state}
                                onChange={(e)=>{handleSetInitialState(e)}}/>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="postalCode" id="postalCode" placeholder="Post Code"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                value={myInitialState.postalCode}
                                onChange={(e)=>{handleSetInitialState(e)}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5">
            <div className="col-span-full">
                <textarea id="aboutMe" name='aboutMe' rows="4" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-[#6A64F1]" placeholder="Introduction"
                value={myInitialState.aboutMe}
                onChange={(e)=>{handleSetInitialState(e)}}></textarea>
            </div>
            </div>


            <div  className='flex flex-wrap'>
                <button
                    className="w-full hover:shadow-form mx-auto my-1 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    onClick={()=>{dispatch(handlePersonalDetails(myInitialState)); dispatch(handleDisplay(2))}}
                    >
                    Save & Next
                </button>
            </div>
        </div>

        {/* <button
            className="hover:shadow-form mx-auto rounded-md bg-[#6A64F1] text-center text-base font-semibold text-white outline-none py-5 p-2 ml-10">
            Next {`->`}
        </button> */}


        </div>
    </>
  )
}

export default Personal