import React from 'react';
import { LiaAwardSolid } from "react-icons/lia";
import { LuBriefcase } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <LiaAwardSolid className="about__icon"/>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 + Years Coding</span>
        </div>

        <div className="about__box">
            <LuBriefcase className="about__icon"/>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5 + Projects</span>
        </div>

        <div className="about__box">
            <BiSupport className="about__icon"/>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info
