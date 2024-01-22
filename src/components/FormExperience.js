import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDisplay, handleExperienceDetails } from "../state/actions";

function Experience() {
  const dispatch = useDispatch();
  const isDisplay = useSelector((state) => state.isDisplay);
  const [inputs, setInputs] = useState([
    {
      company: "",
      position: "",
      startYear: "",
      endYear: "",
      aboutExperience: "",
    },
  ]);
  const handleAddForm = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      {
        company: "",
        position: "",
        startYear: "",
        endYear: "",
        aboutExperience: "",
      },
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
          isDisplay === 2
            ? "p-5 sm:px-5 lg:mt-0 leading-normal rounded shadow bg-grey-100 w-4/5 mx-auto"
            : "hidden"
        }
        style={{ background: "whitesmoke" }}
      >
        {/* <-- Author: FormBold Team --> */}
        {inputs.map((value, index) => {
          return (
            <div className="px-3 pt-8 shadow rounded mb-5 bg-white" key={index}>
              <div className="flex flex-wrap">
                <div className="w-full px-3 mb-5 sm:w-1/2">
                  <div className="">
                    <input
                      type="text"
                      name={`company-${index}`}
                      id={`company-${index}`}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Company Name"
                      value={value.company}
                      onChange={(e) => {
                        handleInputChange(index, "company", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full px-3 mb-5 sm:w-1/2">
                  <div className="">
                    <input
                      type="text"
                      name={`position-${index}`}
                      id={`position-${index}`}
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Position"
                      value={value.position}
                      onChange={(e) => {
                        handleInputChange(index, "position", e.target.value);
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
                      name={`startDate-${index}`}
                      id={`startDate-${index}`}
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
                      name={`endDate-${index}`}
                      id={`endDate-${index}`}
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

              <div className="">
                <div className="px-3">
                  <textarea
                    id={`aboutExperience-${index}`}
                    name={`aboutExperience-${index}`}
                    rows="3"
                    className="w-full border border-gray-400 p-3 rounded-lg focus:outline-none focus:border-[#6A64F1] mb-5"
                    placeholder="Write things that you learned during this job"
                    value={value.aboutExperience}
                    onChange={(e) => {
                      handleInputChange(
                        index,
                        "aboutExperience",
                        e.target.value
                      );
                    }}
                  ></textarea>
                </div>
                <div className="flex flex-wrap">
                  {/* <div className="w-full px-3 mb-5 sm:w-1/2">
                    <div className="">
                      <button
                        className="w-full hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none"
                        onClick={handleAddForm}
                      >
                        ADD
                      </button>
                    </div>
                  </div> */}
                  <div className="w-full px-3 mb-5">
                    <div className="">
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
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex items-center justify-evenly w-full overflow-auto">
          <button
            className="hover:shadow-form mx-1 sm:mx-0 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none text-nowrap"
            onClick={() => {
              dispatch(handleDisplay(1));
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
              dispatch(handleExperienceDetails(inputs));
              dispatch(handleDisplay(3));
            }}
          >
            Save & Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Experience;
