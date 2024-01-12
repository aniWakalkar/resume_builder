import React, {useState} from 'react'
import {useSelector} from 'react-redux';

function Experience() {
    const isDisplay = useSelector((state) => state.isDisplay)
    const [inputs, setInputs] = useState([{ company: "", position: "", startYear: "", endYear: "" }]);

    const handleAddForm = () => {
        setInputs((prevInputs) => [...prevInputs, { company: "", position: "", startYear: "", endYear: "" }]);
    };

    const handleInputChange = (index, fieldName, value) => {
        setInputs((prevInputs) => {
            const newInputs = [...prevInputs];
            newInputs[index][fieldName] = value;
            return newInputs;
        });
    }
  return (
    <>
        <div className={isDisplay === 4 ? "items-center justify-center p-8" : "hidden items-center justify-center p-12"}>
        {/* <-- Author: FormBold Team --> */}
        {
            inputs.map((value, index)=>{
                return <div className="mx-auto w-full max-w-[550px] bg-white" key={index}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full sm:w-2/3">
                            <div className="mb-5">
                                <input type="text" name={`companyName-${index}`} id={`companyName-${index}`}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder='Company Name'
                                value={value.company} onChange={(e)=>{handleInputChange(index, 'company', e.target.value)}}/>
                            </div>
                        </div>
                        <div className="w-full pl-2 sm:w-1/3">
                            <div className="mb-5">
                                <input type="text" name={`postName-${index}`} id={`postName-${index}`} min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder='Position'
                                    value={value.position} onChange={(e)=>{handleInputChange(index, 'position', e.target.value)}}/>
                            </div>
                        </div>
                    </div>


                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full sm:w-1/2">
                            <div className="mb-5">
                                <input type="text" name={`startDate-${index}`} id={`startDate-${index}`}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"  placeholder='Start Date' value={value.startYear} onChange={(e)=>{handleInputChange(index, 'startYear', e.target.value)}}/>
                            </div>
                        </div>
                        <div className="w-full pl-2 sm:w-1/2">
                            <div className="mb-5">
                                <input type="text" name={`endDate-${index}`} id={`endDate-${index}`}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"  placeholder='End Date'
                                    value={value.endYear} onChange={(e)=>{handleInputChange(index, 'endYear', e.target.value)}}/>
                            </div>
                        </div>
                    </div>

                    <div  className='flex flex-wrap'>
                        <button
                            className="hover:shadow-form w-32 mx-auto my-1 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Next {'->'}
                        </button>
                        <button
                            className="hover:shadow-form w-32 mx-auto my-1 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            onClick={handleAddForm}>
                            ADD + 
                        </button>
                    </div>
                    <hr className='border-1 my-5 border-black'/>
                </div>
            })
        }

    </div>
    </>
  )
}

export default Experience;