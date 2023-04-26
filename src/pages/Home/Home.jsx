import React from 'react'

import './Home.scss'
const Home = () => {
  return (
    <div className='home-page'>
      <div className="container">
        <div className="main-info">
          {/* <div className="title">
            i'm yousef mahmoud
          </div> */}
          <div className="title">
            web developer
          </div>
          <div className="title">
            and designer
          </div>
        </div>

        <div className="about-info">
          <div className="about-info__content">
            <div className="info__section-1">
              I've worked as front end developer for 3 years <br />
              made projects based on ReactJs <br />
              also have some experience with back end using PHP
            </div>

            <div className="info__scetion-2">
              before that I worked in graphic field for 2 a year, <br />
              and designed brand identities for clients
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home