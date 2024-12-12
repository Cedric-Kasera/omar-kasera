import React from 'react'
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <p className="work__details">{item.description}</p>
        <a href="#" className="work__button">
            Demo <LuSquareArrowOutUpRight  className="work__button-icon" />
        </a>
    </div>
  )
}

export default WorksItems
