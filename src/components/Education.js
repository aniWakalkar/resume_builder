import React, {useState} from 'react'
import {useSelector} from 'react-redux';

function Education() {
    const isDisplay = useSelector((state) => state.isDisplay)
    const [inputs, setInputs] = useState([{ college: "", degree: "", startYear: "", endYear: "" }]);

    const handleAddForm = () => {
        setInputs((prevInputs) => [...prevInputs, { college: "", degree: "", startYear: "", endYear: "" }]);
    };

    const handleInputChange = (index, fieldName, value) => {
        setInputs((prevInputs) => {
            const newInputs = [...prevInputs];
            newInputs[index][fieldName] = value;
            return newInputs;
        });
    }

    // const handleDelete = (index) => {
    //     let newEducation = props.current.filter((e, i)=>{
    //         return i !== index
    //     })
    // };

  return (
    <>
        <div className={isDisplay === 2 ? "flex flex-col items-center justify-center p-8" : "hidden items-center justify-center p-8"}>
        {/* <-- Author: FormBold Team --> */}

        {
            inputs.map((value, index)=>{
            return <div className="mx-auto w-full max-w-[550px] bg-white" key={index}>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full sm:w-2/3">
                        <div className="mb-5">
                            {/* <label for="collegeName" className="mb-3 block text-base font-medium text-[#07074D]">
                                College Name
                            </label> */}
                            <input type="text" name={`collegeName-${index}`} id={`collegeName-${index}`}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder='college Name'
                            value={value.college} onChange={(e)=>{handleInputChange(index, 'college', e.target.value)}}/>
                        </div>
                    </div>
                    <div className="w-full pl-2 sm:w-1/3">
                        <div className="mb-5">
                            {/* <label for="degreeName" className="mb-3 block text-base font-medium text-[#07074D]">
                                Degree Name
                            </label> */}
                            <input type="text" name={`degreeName-${index}`} id={`degreeName-${index}`} min="0"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder='degree' value={value.degree} onChange={(e)=>{handleInputChange(index, 'degree', e.target.value)}}/>
                        </div>
                    </div>
                </div>


                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full sm:w-1/2">
                        <div className="mb-5">
                            {/* <label for="startName" className="mb-3 block text-base font-medium text-[#07074D]">
                                Start Date
                            </label> */}
                            <input type="text" name={`startYear-${index}`} id={`startYear-${index}`}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder='Start Date'
                            value={value.startYear} onChange={(e)=>{handleInputChange(index, 'startYear', e.target.value)}}/>
                        </div>
                    </div>
                    <div className="w-full pl-2 sm:w-1/2">
                        <div className="mb-5">
                            {/* <label for="endDate" className="mb-3 block text-base font-medium text-[#07074D]">
                                End Date
                            </label> */}
                            <input type="text" name={`endYear-${index}`} id={`endYear-${index}`}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder='End Date'
                            value={value.startYear} 
                            onChange={(e)=>{handleInputChange(index, 'endYear', e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap'>
                    <button
                        className="hover:shadow-form w-32 mx-auto rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Next {'->'}
                    </button>
                    <button
                        className="hover:shadow-form w-32 mx-auto rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
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

export default Education