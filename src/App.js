import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RightSidebar from './components/RightSidebar';
import './App.css';

function App() {
  return (
    
    <div className='dashboard'>
        <header className='head'><Header /></header>
        <aside className='sidebar'><Sidebar /></aside>
        <main className='main'><Dashboard /></main>
        <aside className='r-sidebar'><RightSidebar /></aside>
    </div>
  );
}

export default App;
