import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDisplay } from "../state/actions";
import { generatePDF } from "./PdfGenerator";

function FormSubmit() {
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();
  const isDisplay = useSelector((state) => state.isDisplay);
  const isPersonal = useSelector((state) => state.isPersonal);
  const isEducation = useSelector((state) => state.isEducation);
  const isSkill = useSelector((state) => state.isSkill);
  const isExperience = useSelector((state) => state.isExperience);
  return (
    <div
      className={
        isDisplay === 5
          ? "p-5 sm:px-5 lg:mt-0 leading-normal rounded shadow-lg bg-grey-100 w-4/5 mx-auto"
          : "hidden"
      }
    >
      <div className="flex flex-wrap items-center">
        <div className="mx-auto w-full bg-white">
          <div className="mb-5">
            <label
              htmlFor="img"
              className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
            >
              <b> Upload Image </b>
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              accept="image/*"
              id="img"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>

          <div className="flex flex-wrap items-center">
            <div className="mb-5">
              <input
                type="text"
                placeholder="File Name"
                className={`w-full sm:w-3/3 rounded-md border border-[#010101] bg-white py-2 px-6 text-base font-mono outline-none focus:border-[#6A64F1] focus:shadow-md`}
                value={fileName}
                onChange={(e) => {
                  setFileName(e.target.value);
                }}
              />
            </div>
            <div className="px-1 sm:w-1/3">
              <div className="mb-5">
                <span>
                  <p className="font-mono">.pdf</p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-24">
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none"
              onClick={() => {
                dispatch(handleDisplay(4));
              }}
            >
              Back
            </button>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none"
              onClick={() => {
                fileName === ""
                  ? setFileName("File Name")
                  : generatePDF(
                      fileName,
                      image,
                      isPersonal,
                      isSkill,
                      isEducation,
                      isExperience
                    );
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSubmit;

// I am a dedicated person who is always looking for new challenges. I have a strong ethic and am very motivated towards what I do. I enjoy working with others and am always happy to help. I am a fast learner and always want to learn new things.
