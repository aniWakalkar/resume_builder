import React from "react";
import { useNavigate } from "react-router-dom";
import resumeTemplate from "../Templates/resumeTemplate.webp";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-auto p-4 h-full mt-10 ">
        <p className="text-2xl font-medium mt-4 font-mono">Templates</p>
        <p className="font-serif ">Select a template to get started</p>

        <div className="flex flex-wrap ms:flex-wrap-reverse pt-8">
          <div className="p-2 rounded lg:w-1/4 md:w-2/4 sm:w-4/4">
            <img
              className="border-2 shadow hover:shadow-2xl lg:h-4/4"
              src={resumeTemplate}
              alt="resumeTemplate"
              onClick={() => {
                navigate("/resume_builder/details");
              }}
            />
          </div>

          <div className="p-2 rounded lg:w-1/4 md:w-2/4 sm:w-4/4">
            <img
              className="border-2 shadow hover:shadow-2xl lg:h-4/4"
              src={resumeTemplate}
              alt="resumeTemplate"
              onClick={() => {
                navigate("/resume_builder/details");
              }}
            />
          </div>

          <div className="p-2 rounded lg:w-1/4 md:w-2/4 sm:w-4/4">
            <img
              className="border-2 shadow hover:shadow-2xl lg:h-4/4"
              src={resumeTemplate}
              alt="resumeTemplate"
              onClick={() => {
                navigate("/resume_builder/details");
              }}
            />
          </div>

          <div className="p-2 rounded lg:w-1/4 md:w-2/4 sm:w-4/4">
            <img
              className="border-2 shadow hover:shadow-2xl lg:h-4/4"
              src={resumeTemplate}
              alt="resumeTemplate"
              onClick={() => {
                navigate("/resume_builder/details");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
