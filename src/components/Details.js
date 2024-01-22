import { React } from "react";
import { useSelector } from "react-redux";
import FormEducation from "./FormEducation";
import FormExperience from "./FormExperience";
import FormPersonal from "./FormPersonal";
import FormSkills from "./FormSkills";
import FormSubmit from "./FormSubmit";

function Resume() {
  const isDisplay = useSelector((state) => state.isDisplay);
  return (
    <>
      <div className="container h-full mx-auto mt-10 flex justify-between bg-white">
        <div className="hidden sm:flex md:flex lg:flex flex-col">
          <div
            className={
              isDisplay === 1
                ? `border-l-4 my-3 px-3 py-2 font-bold border-yellow-600`
                : `border-l-4 my-3 px-3 py-2`
            }
          >
            <span className="font-mono text-gray-700 break-normal">
              Personal Info
            </span>
          </div>
          <div
            className={
              isDisplay === 2
                ? `border-l-4 my-3 px-3 py-2 font-bold border-yellow-600`
                : `border-l-4 my-3 px-3 py-2`
            }
          >
            <span className="font-mono text-gray-700 break-normal">
              Work Experience
            </span>
          </div>
          <div
            className={
              isDisplay === 3
                ? `border-l-4 my-3 px-3 py-2 font-bold border-yellow-600`
                : `border-l-4 my-3 px-3 py-2`
            }
          >
            <span className="font-mono text-gray-700 break-normal">
              Education
            </span>
          </div>
          <div
            className={
              isDisplay === 4
                ? `border-l-4 my-3 px-3 py-2 font-bold border-yellow-600`
                : `border-l-4 my-3 px-3 py-2`
            }
          >
            <span className="font-mono text-gray-700 break-normal">
              Key Skills
            </span>
          </div>
          <div
            className={
              isDisplay === 5
                ? `border-l-4 my-3 px-3 py-2 font-bold border-yellow-600 `
                : `border-l-4 my-3 px-3 py-2`
            }
          >
            <span className="font-mono text-gray-700 break-normal">Submit</span>
          </div>
        </div>

        <div className="w-full md:w-4/5 lg:w-4/5">
          <FormPersonal />
          <FormExperience />
          <FormEducation />
          <FormSkills />
          <FormSubmit />
        </div>
      </div>
    </>
  );
}

export default Resume;
