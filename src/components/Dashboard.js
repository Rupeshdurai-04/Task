import React, { useState } from 'react';
import './Dashboard.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import image from '../assets/Rupesh.jpg';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import card1 from '../assets/dashboard1.jpg'
import card2 from '../assets/dashboard2.jpg'
import card3 from '../assets/dashboard3.jpg'
import right1 from '../assets/Right1.jpg';
import right2 from '../assets/Right2.jpg';
import right3 from '../assets/Right3.jpg';



const data = [
  { name: '1-10 Aug', sales: 40 },
  { name: '11-20 Aug', sales: 60 },
  { name: '21-30 Aug', sales: 35 },
];

const Dashboard = () => {
  const [recipient, setRecipient] = useState('All');
  const [amount, setAmount] = useState('All');
  const [status, setStatus] = useState('All');

  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  return (
    <div className="dashboard-content">
      <div className="content-section">
        <div className="top-section">
          <div className="card">
            <img src={card1} alt="icon" className='card-image' />
            <div className="card-content">
              <h4>Monthly Revenue</h4>
              <p>$3,500 <span className="change">+2.4%</span></p>
              <small>Previous year $1.7k</small>
            </div>
          </div>
          <div className="card">
            <img src={card2} alt="icon" className='card-image' />
            <div className="card-content">
              <h4>Monthly Sales</h4>
              <p>$6,750 <span className="change">+1.4%</span></p>
              <small>Previous year $3.1k</small>
            </div>
          </div>
          <div className="card">
            <img src={card3} alt="icon" className='card-image' />
            <div className="card-content">
              <h4>Total Profit</h4>
              <p>$1,090 <span className="change">-4.3%</span></p>
              <small>Previous year $8.9k</small>
            </div>
          </div>
        </div>

        <div className="sales-section">
          <div className="sales-info">
            <h3>Total Sales & Cost</h3>
            <p className="last-60-days">Last 60 days</p>
            <p className="sales-amount">$956.82k <span className="positive-change"> < ArrowDropUpOutlinedIcon className='arrow-up' />+5.4%</span></p>
            <small className="vs-prev">+8.20k vs prev. 60 days</small>
          </div>
          <div className="analytics">
            <div className='analytics-title'>
              <h5>Analytic</h5>
              <h6> +5.4%</h6>
            </div>
            <div className="analytics-header">
              <h5>Month <ArrowDropDownOutlinedIcon /></h5>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip />
                <Bar dataKey="sales" fill="#6E63E5" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="transaction-history">
          <div className="transaction-header">
            <h2>Transaction History</h2>
            <button className='cala-button'>
              <CalendarTodayIcon />
              <p>Month</p><KeyboardArrowDownOutlinedIcon />
            </button>
          </div>
          <div className="filters">
            <select value={recipient} onChange={handleRecipientChange}>
              <option value="All">Recipient</option>
            </select>
            <select value={amount} onChange={handleAmountChange}>
              <option value="All">Amount</option>
            </select>
            <select value={status} onChange={handleStatusChange}>
              <option value="All">Status</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Invoice</th>
                <th>People</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="customer-info">
                    <div className="image-container">
                      <img src={image} alt="avatar" className='table-image' />
                      <span className="plus-symbol">+</span>
                    </div>
                    <div>
                      <span className="customer-name">Floyd Johntosan</span>
                      <p className="customer-email">johntosan@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td><div className="status success">
                  <div className='roundbar-1'></div>
                  <span>Success</span>
                </div>
                </td>
                <td>Nov 02, 2021</td>
                <td>$100.00</td>
                <td className="people-icons">
                  <div className="overlay-group">
                    <img src={right1} alt='icon' className='table-icon' />
                    <img src={right2} alt='icon' className='table-icon' />
                    <img src={right3} alt='icon' className='table-icon' />
                  </div>
                </td>

              </tr>
              <tr>
                <td>
                  <div className="customer-info">
                    <div className="image-container">
                      <img src={image} alt="avatar" className='table-image' />
                      <span className="plus-symbol">+</span>
                    </div>
                    <div>
                      <span className="customer-name">Floyd Johntosan</span>
                      <p className="customer-email">johntosan@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td><div className="status pending">
                  <div className='roundbar'></div>
                  <span>Pending</span>
                </div>
                </td>
                <td>Nov 02, 2021</td>
                <td>$100.00</td>
                <td className="people-icons">
                  <div className="overlay-group">
                    <img src={right1} alt='icon' className='table-icon' />
                    <img src={right2} alt='icon' className='table-icon' />
                    <img src={right3} alt='icon' className='table-icon' />
                  </div>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
