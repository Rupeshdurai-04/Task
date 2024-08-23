import React, { useState } from 'react';
import './RightSidebar.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import logo1 from '../assets/alien.png';
import logo2 from '../assets/astronaut.png';
import logo3 from '../assets/beach-hut.png';
import right1 from '../assets/Right1.jpg';
import right2 from '../assets/Right2.jpg';
import right3 from '../assets/Right3.jpg';

const RightSidebar = () => {
  const [month] = useState('August 2024');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [11, 12, 13, 14, 15, 16, 17];


  return (
    <div className="right-sidebar">
      <div className="premium-access">
        <h6>Premium Access</h6>
        <h1>
          Take Back<br />
          Your Creative<br />
          <span className="control-text">Control</span>
          <div className="image-group">
          <img src={right1} alt="icon1" className="overlay-image" />
          <img src={right2} alt="icon2" className="overlay-image" />
          <img src={right3} alt="icon3" className="overlay-image" />
        </div>
        </h1>
        
        <p className="subtext">The Professional Platform <KeyboardArrowDownOutlinedIcon className='down-arrow' /></p>
  
        
        <button className="upgrade-btn">
          Upgrade Now <ArrowRightAltOutlinedIcon className='button-arrow' />
        </button>
      </div>

      <div className="custom-calendar">
        <div className="calendar-header">
          <KeyboardArrowLeftOutlinedIcon className="calendar-arrow"  />
          <h4>{month}</h4>
          <KeyboardArrowRightOutlinedIcon className="calendar-arrow" />
        </div>

        <div className="calendar-row">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="calendar-day">
              <span className="day-label">{day}</span>
              <span
                className={`date-number ${dates[index] === 13 ? 'highlighted-date' : ''}`}
              >
                {dates[index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="meeting-schedule">
        <div className="meeting">
          <img src={logo1} alt="Meeting" />
          <div>
            <h5>Meeting with Client</h5>
            <p>
              <VideocamOutlinedIcon /> Google Meet &nbsp;&nbsp;
              <AccessTimeOutlinedIcon /> 12pm
            </p>
          </div>
        </div>
        
        
        <hr className="section-divider" />
        <div className="meeting">
          <img src={logo2} alt="Weekly Report" />
          <div>
            <h5>Weekly Report</h5>
            <p>
              <VideocamOutlinedIcon /> Google Meet &nbsp;&nbsp;
              <AccessTimeOutlinedIcon /> 05pm
            </p>
          </div>
        </div>

      
        <hr className="section-divider" />
        <div className="meeting">
          <img src={logo3} alt="Daily Scrum" />
          <div>
            <h5>Daily Scrum Meeting</h5>
            <p>
              <VideocamOutlinedIcon /> Google Meet &nbsp;&nbsp;
              <AccessTimeOutlinedIcon /> 03pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;