import React, { Component } from 'react';
import Nav from './Nav';
import ripley_cat from '../images/ripley_cat.jpg';
import gis from '../images/GISLayers.png';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav header={"ABOUT"} />
          </div>

          <div className="about-container">
            <div className="about-image-container">
              <img className="about-image" src={ripley_cat} alt="profileimage" />
            </div>
            <div className="about-description">
              <p className="about-line">
                I am a warrant officer of{" "}
                <a
                  href="https://avp.fandom.com/wiki/USCSS_Nostromo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  USCSS Nostromo
                </a>
                , a commercial towing vehicle out of the Solomons.
              </p>

              <p className="about-line">
                I enjoy exploring new and far away places, love animals of every
                kind, always ready to take on a new challenge. But my
                true passion in life is geographic information system, also
                known as GIS.
              </p>

              <p className="about-line">
                I can be reached by email at <b>mizzmasha@gmail.com</b>.
              </p>
              <div className="gis-container">
                <img className="gis-image" src={gis} alt="gis" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
