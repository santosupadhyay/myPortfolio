import React from "react";
import pradip from "../assets/images/pradip.jpeg";
import roshan from "../assets/images/roshan.jpeg";
import achyut from "../assets/images/achyut.png";
import dhiraj from "../assets/images/dhiraj.jpeg";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <div className="py-24 bg-base-200 min-h-[100vh] px-5" id="test">
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0 }}
        className="m-10"
      >
        <h1 className="text-center text-3xl font-bold">Testimonials</h1>
        <p className="text-center">What People Say About Me</p>
      </motion.div>

      <div className="flex flex-wrap w-full mx-auto justify-center gap-5">
        <motion.div
          initial={{ y: "-100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0 }}
          className="card glass max-w-96 w-full shadow-xl bg-orange-500"
        >
          <div className="card-body">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={pradip} />
              </div>
            </div>
            <h2 className="card-title">Pradip Bhatt</h2>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black-500"
              />
            </div>
            <p className="">
              I've worked with Sandy on many projects. He's talented,
              hardworking, full of great ideas, and excellent at solving tough
              problems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "-100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="card glass max-w-96 w-full shadow-xl bg-green-600"
        >
          <div className="card-body">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={roshan} />
              </div>
            </div>
            <h2 className="card-title">Roshan Bhatt</h2>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
              </div>
            </div>
            <p>
              Working with Sandy is always a pleasure. He pays attention to
              details, always aims for quality, and is very supportive and
              positive.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="card glass max-w-96 w-full shadow-xl bg-orange-500"
        >
          <figure></figure>
          <div className="card-body">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={achyut} />
              </div>
            </div>
            <h2 className="card-title">Achyut Mishra</h2>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                  
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
              </div>
            </div>
            <p>
              I've known Santosh since our first semester, and he has become an
              outstanding computer engineer. He's always learning, very skilled,
              and a great team player.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "200px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="card glass bg-green-600 max-w-96 w-full shadow-xl"
        >
          <figure></figure>
          <div className="card-body">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={dhiraj} />
              </div>
            </div>
            <h2 className="card-title">Dhiraj Pant</h2>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                  
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-black-500"
                />
              </div>
            </div>
            <p>
              What makes Santosh special is his love for technology and
              innovation. He stays updated with trends, applies his knowledge
              well, and is very creative and skilled.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
