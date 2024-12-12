import React from 'react'
import "./Work.css"
import Works from './Works'

const Work = () => {
  return (
    <div>
      <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most Recent Work.</span>

        <Works />
      </section>
    </div>
  )
}

export default Work