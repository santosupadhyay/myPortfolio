import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook,FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="footer footer-center bg-base-300 text-base-content rounded p-10 min-w-full">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover" href="#home">
              Home
            </a>
            <a className="link link-hover" href="#about">
              About Me
            </a>
            <a className="link link-hover" href="#contact">
              Contact
            </a>
            <a className="link link-hover" href="#test">
              Testimonials
            </a>
          </nav>

          <nav>
            <div className="grid grid-flow-col gap-4">
              <a
                className="text-2xl cursor-pointer"
                href="https://www.linkedin.com/in/saaandyyy0/"
                target="blank"
              >
                <FaLinkedin />
              </a>

              <a
                className="text-2xl cursor-pointer"
                href="https://x.com/santosupadhyay0"
                target="blank"
              >
                <FaTwitter />
              </a>

              <a
                className="text-2xl cursor-pointer"
                href="https://www.facebook.com/santosupadhyay00"
                target="blank"
              >
                <FaFacebook />
              </a>

              <a
                className="text-2xl cursor-pointer"
                href="https://github.com/santosupadhyay"
                target="blank"
              >
                <FaGithub />
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © ${new Date().getFullYear()} - All right reserved by
              Santosh Upadhyay
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}
