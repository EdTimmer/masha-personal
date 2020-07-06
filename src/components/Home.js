import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';
// import fossil from '../images/fossil.jpg'
// import PortfolioButton from './Buttons/PortfolioButton';
// import ResumeButton from './Buttons/ResumeButton';

// import github from '../images/github.svg';
// import medium from '../images/medium.png';
// import linkedin from '../images/linkedin.png';
// import downarrow from '../images/down2.png';
// import profilephoto from '../images/profilephoto.jpg';

// className='bgimg-1B'
class Home extends Component {
    render() {
        return (
            <div>
                <div className="bgimg-1">
                    <Nav style={{ backgroundColor: 'transparent' }} />

                    <div className="captionTwo">
                        <span className="borderTwo" style={{ fontSize: '8rem' }}>MARIA JOSEFSON</span>
                        <br />
                        <span className="borderTwo" style={{ fontSize: '4rem' }}>map queen extraordinaire</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
