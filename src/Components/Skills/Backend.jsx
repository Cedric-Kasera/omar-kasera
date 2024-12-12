import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-php skills__data-icon"></i>

                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-nodejs skills__data-icon"></i>

                    <div>
                        <h3 className="skills__name">Node JS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-python skills__data-icon"></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check skills__data-icon"></i>

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-firebase skills__data-icon"></i>

                    <div>
                        <h3 className="skills__name">FireBase</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-mongodb skills__data-icon"></i>

                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend