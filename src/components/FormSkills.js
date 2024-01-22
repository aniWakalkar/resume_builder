import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDisplay, handleSkillDetails } from "../state/actions";

function Skills() {
  const dispatch = useDispatch();
  const isDisplay = useSelector((state) => state.isDisplay);
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);

  const handleAdd = () => {
    if (skill.trim() !== "") {
      setSkillsList((prev) => [...prev, { skill }]);
      setSkill("");
    }
  };

  const handleDelete = (index) => {
    let newList = skillsList.filter((e, i) => {
      return i !== index;
    });

    setSkillsList(newList);
  };

  return (
    <>
      <div
        className={
          isDisplay === 4
            ? "p-3 sm:px-5 lg:mt-0 leading-normal rounded shadow-lg bg-grey-100 w-4/5 mx-auto"
            : "hidden"
        }
      >
        <div className="p-5 shadow-lg rounded mb-5 bg-white">
          <div className="flex flex-wrap">
            <div className="w-full px-1 my-1 sm:w-2/3">
              <div className="">
                <input
                  type="text"
                  placeholder="Enter Skills"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={skill}
                  onChange={(e) => {
                    setSkill(e.target.value.toUpperCase());
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAdd();
                  }}
                />
              </div>
            </div>
            <div className="w-full px-1 my-1 sm:w-1/3">
              <div className="">
                <button
                  type="button"
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-mono text-white outline-none"
                  onClick={handleAdd}
                >
                  ENTER
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={skillsList.length !== 0 ? "p-5 mb-5 bg-white " : "hidden"}
        >
          {skillsList.map((item, index) => (
            <div
              key={index}
              className="flex my-3 items-center bg-[#e6e9eb] rounded"
            >
              <span className="w-full px-2 sm:w-2/3">{item.skill}</span>
              <button
                type="button"
                className="px-2 sm:w-1/3 hover:shadow-form rounded-md bg-[#f6523f] py-3 text-center text-base font-semibold text-white outline-none"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between w-full">
          <button
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none"
            onClick={() => {
              dispatch(handleDisplay(3));
            }}
          >
            Back
          </button>
          <button
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none"
            onClick={() => {
              dispatch(handleSkillDetails(skillsList));
              dispatch(handleDisplay(5));
            }}
          >
            Save & Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Skills;
