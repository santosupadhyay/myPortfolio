import React from "react";
import Profile from "../../assets/images/Profile.jpeg";
import { BiLogoTelegram } from "react-icons/bi";

export default function Hero() {


  return (
    <>
      <div className="hero  min-h-[100vh] min-w-full bg-base-200 px-5" id="home">
        <div className="hero-content flex-col lg:flex-row-reverse items-center ">
          <img
            src={Profile}
            className="max-w-sm rounded-lg shadow-2xl mask mask-squircle w-[300px] md:w-[450px]"
          />
          <div>
            <h1 className="text-5xl font-bold">Santosh Upadhyay</h1>
            <p className="py-6">
              I was born in Bajhang, grew up and studied in Dhangadhi upto my
              12th class. I am currently persuing my Computer Engineering degree
              from Far-Western University. I am a passionate and a keen computer
              enthusiast. I love to code. I love to go deep into the logics.
              Overall I am a coding addict
            </p>
            <button className="btn btn-accent text-lg">
              Say Hello <BiLogoTelegram />
            </button>

            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
