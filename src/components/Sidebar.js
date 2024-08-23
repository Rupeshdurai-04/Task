import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import ExploreIcon from '@mui/icons-material/Explore';
import ShopIcon from '@mui/icons-material/Store';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import FolderIcon from '@mui/icons-material/Folder';
import sidelogo from '../assets/sidebarlogo.png'

const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <img src={sidelogo} alt='logo' className='side-logo' />
        <h2>Omoi</h2>
      </div>
      
      <div className="sidebar-menu">
        <div className="menu-item active">
          <HomeIcon className="menu-icon" />
          <span>Home</span>
        </div>
        <div className="menu-item">
          <AnalyticsIcon className="menu-icon" />
          <span>Analytic</span>
        </div>
        <div className="menu-item">
          <ExploreIcon className="menu-icon" />
          <span>Explore</span>
        </div>
        <div className="menu-item">
          <ShopIcon className="menu-icon" />
          <span>Shop</span>
        </div>
        <div className="menu-item">
          <InboxIcon className="menu-icon" />
          <span>Inbox</span>
        </div>
      </div>

      <div className="sidebar-tools">
        <h6>Tools</h6>
        <div className="footer-item">
          <SettingsIcon className="footer-icon" />
          <span>Setting</span>
        </div>
        <div className="footer-item">
          <HelpIcon className="footer-icon" />
          <span>Help</span>
        </div>
      </div>

      <div className="sidebar-projects">
        <h6>Projects</h6>
        <div className="project-item">
          <FolderIcon className="project-icon" />
          <span>Amazon</span>
        </div>
        <div className="project-item">
          <FolderIcon className="project-icon" />
          <span>Invinity HQ</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;