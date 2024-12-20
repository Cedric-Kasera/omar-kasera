import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a href="#" className="home__social-icon" target="_blank">
        <RiTwitterXLine />
      </a>

      <a href="#" className="home__social-icon" target="_blank">
        <SlSocialLinkedin />
      </a>

      <a href="#" className="home__social-icon" target="_blank">
        <FiGithub />
      </a>
    </div>
  );
};

export default Social;
