import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDisplay, handleEducationDetails } from "../state/actions";

function Education() {
  const dispatch = useDispatch();
  const isDisplay = useSelector((state) => state.isDisplay);
  const [inputs, setInputs] = useState([
    { college: "", degree: "", startYear: "", endYear: "" },
  ]);
  const handleAddForm = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { college: "", degree: "", startYear: "", endYear: "" },
    ]);
  };

  const handleInputChange = (index, fieldName, value) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index][fieldName] = value;
      return newInputs;
    });
  };

  const handleDeleteForm = (index) => {
    const newInputs = inputs.filter((val, i) => {
      return index !== i;
    });
    setInputs(newInputs);
  };
  return (
    <>
      <div
        className={
          isDisplay === 3
            ? "p-5 sm: text-nowrappx-5 lg:mt-0 leading-normal rounded shadow bg-grey-100 w-4/5 mx-auto"
            : "hidden"
        }
        style={{ background: "whitesmoke" }}
      >
        {/* <-- Author: FormBold Team --> */}

        {inputs.map((value, index) => {
          return (
            <div className="p-5 shadow rounded mb-5 bg-white" key={index}>
              <div className="flex flex-wrap">
                <div className="w-full px-3 mb-5 sm:w-1/2">
                  <div className="">
                    <input
                      type="text"
                      name={`collegeName-${index}`}
                      id={`collegeName-${index}`}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="college"
                      value={value.college}
                      onChange={(e) => {
                        handleInputChange(index, "college", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full px-3 mb-5 sm:w-1/2">
                  <div className="">
                    <input
                      type="text"
                      name={`degreeName-${index}`}
                      id={`degreeName-${index}`}
                      min="0"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="degree"
                      value={value.degree}
                      onChange={(e) => {
                        handleInputChange(index, "degree", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full px-3 mb-5 sm:w-1/2">
                  <div className="">
                    <input
                      type="text"
                      name={`startYear-${index}`}
                      id={`startYear-${index}`}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Start Date"
                      value={value.startYear}
                      onChange={(e) => {
                        handleInputChange(index, "startYear", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full px-3 mb-5 sm:w-1/2">
                  <div className="">
                    <input
                      type="text"
                      name={`endYear-${index}`}
                      id={`endYear-${index}`}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="End Date"
                      value={value.endYear}
                      onChange={(e) => {
                        handleInputChange(index, "endYear", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start flex-wrap">
                <button
                  className="w-full hover:shadow-form rounded-md bg-[#f6523f] py-3 px-8 text-center text-base font-mono text-white outline-none"
                  onClick={() => {
                    handleDeleteForm(index);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex items-center justify-evenly w-full">
          <button
            className="hover:shadow-form mx-1 sm:mx-0 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none text-nowrap"
            onClick={() => {
              dispatch(handleDisplay(2));
            }}
          >
            Back
          </button>
          <button
            className="hover:shadow-form mx-1 sm:mx-0 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none text-nowrap"
            onClick={handleAddForm}
          >
            + Add Form
          </button>
          <button
            className="hover:shadow-form mx-1 sm:mx-0 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none text-nowrap"
            onClick={() => {
              dispatch(handleEducationDetails(inputs));
              dispatch(handleDisplay(4));
            }}
          >
            Save & Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Education;
