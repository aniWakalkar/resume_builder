import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleDisplay, handlePersonalDetails } from "../state/actions/index";
import { initialState } from "../state/reducers/Reducers";

function Personal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDisplay = useSelector((state) => state.isDisplay);
  const [myInitialState, setMyInitialState] = useState(initialState);
  const [buttonText, setButtonText] = useState(false);
  const handleSetInitialState = (e) => {
    setMyInitialState((prevInfo) => ({
      ...prevInfo,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRequired = () => {
    if (
      myInitialState.first.length === 0 ||
      myInitialState.middle.length === 0 ||
      myInitialState.last.length === 0 ||
      myInitialState.phone.length === 0 ||
      myInitialState.email.length === 0 ||
      myInitialState.address.length === 0 ||
      myInitialState.state.length === 0 ||
      myInitialState.city.length === 0 ||
      myInitialState.postalCode.length === 0 ||
      myInitialState.aboutMe.length === 0
    ) {
      setButtonText(true);
    } else {
      dispatch(handlePersonalDetails(myInitialState));
      dispatch(handleDisplay(2));
      setButtonText(false);
    }
  };

  return (
    <>
      <div
        className={
          isDisplay === 1
            ? "p-5 sm:px-5 lg:mt-0 leading-normal rounded shadow bg-white w-4/5 mx-auto"
            : "hidden"
        }
        style={{ background: "whitesmoke" }}
      >
        <div className="bg-white rounded shadow p-5 pt-10 mb-5">
          <div className="">
            <div className="flex flex-wrap">
              <div className="w-full px-3 mb-5 sm:w-1/3">
                <div className="">
                  <input
                    type="text"
                    name="first"
                    id="first"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.first}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5 sm:w-1/3">
                <div className="">
                  <input
                    type="text"
                    name="middle"
                    id="middle"
                    placeholder="Middle Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.middle}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5 sm:w-1/3">
                <div className="">
                  <input
                    type="text"
                    name="last"
                    id="last"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.last}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="my-5 flex flex-wrap">
              <div className="w-full px-3 mb-5 sm:w-1/2">
                <div className="">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.phone}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5 sm:w-1/2">
                <div className="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.email}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="my-5 flex flex-wrap">
              <div className="w-full px-3 mb-5 sm:w-1/2">
                <div className="">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.address}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5 sm:w-1/2">
                <div className="">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.city}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5 sm:w-1/2">
                <div className="">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="State"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.state}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5 sm:w-1/2">
                <div className="">
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="Post Code"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-mono text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={myInitialState.postalCode}
                    onChange={(e) => {
                      handleSetInitialState(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-wrap">
              <div className="w-full px-3 mb-10">
                <textarea
                  id="aboutMe"
                  name="aboutMe"
                  rows="4"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-[#6A64F1] font-mono"
                  placeholder="write about yourself in 200 charecters"
                  value={myInitialState.aboutMe}
                  onChange={(e) => {
                    handleSetInitialState(e);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end">
          <button
            className="hover:shadow-form mx-3 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-mono text-white outline-none"
            onClick={() => {
              navigate("/resume_builder");
            }}
          >
            Back
          </button>
          <button
            className={`hover:shadow-form mx-3 rounded-md ${
              buttonText === false ? `bg-[#6A64F1]` : `bg-[#f33f3f]`
            } py-3 px-8 text-center text-base font-mono text-white outline-none`}
            onClick={handleRequired}
          >
            {buttonText === false
              ? "Save & Next"
              : "Please fill all the fields"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Personal;
