import React from 'react';
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import image from '../assets/Rupesh.jpg'; 
import image1 from '../assets/dashboardtitle.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="profile-container">
          <img src={image1} alt="Profile" className="profile-image" />
          <div className="notification-badge">2</div>
        </div>
        <div className="greeting">
          <h1>Good Evening Team!</h1>
          <p>Have an in-depth look at all the metrics within your dashboard.</p>
        </div>
      </div>
      
      <div className="header-right">
        <SearchOutlinedIcon className="search-icon" />
        <NotificationsOutlinedIcon className="notification-icon" />
        <div className="user-profile">
          <img src={image} alt="User Profile" className="user-image" />
          <span className="username">Rupesh Durai</span>
          <KeyboardArrowDownOutlinedIcon className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;