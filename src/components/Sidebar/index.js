import React from "react";
import Logo from '../../Icon/Logo';
import Home from '../../Icon/Home';
import Dashboard from '../../Icon/Dashboard';
import Task from '../../Icon/Task';
import Projects from '../../Icon/Projects';
import Reporting from '../../Icon/Report';
import Users from '../../Icon/Users';
import Search from '../../Icon/Search';
import Support from '../../Icon/Support';
import SettingIcon from '../../Icon/Settings';
import Exit from '../../Icon/Exit';

import './index.scss';

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__logo">
        <Logo />
        <h3 className="ml-2">Untitled UI</h3>
      </div>
      <div className="sidebar__search">
        <Search />
        <input placeholder="Search" />
      </div>
      <div className="sidebar__list">
        <ul>
          <li>
            <Home />
            <span>Home</span>
          </li>
          <li>
            <Dashboard />
            <div className="sidebar__list-dash">
            <span>Dashboard</span>
            <p className="sidebar__list-count">10</p>
            </div>
          </li>
          <li>
            <Projects />
            <span>Projects</span>
          </li>
          <li>
            <Task />
            <span>Tasks</span>
          </li>
          <li>
            <Reporting />
            <span>Reporting</span> 
          </li>
          <li>
            <Users />
            <span>Users</span>
          </li>
        </ul>

        <ul className="sidebar__list-ul">
          <li>
            <Support />
            <span>Support</span>
          </li>
          <li className="sidebar__list-li">
            <SettingIcon />
            <span>Settings</span> 
          </li>
        </ul>
      </div>

      <div className="sidebar__card">
        <p className="font-normal text-gray-900">New features available</p>
        <p className="font-extralight text-sm mb-2 text-gray-800">Check out the new dashboard page. Pages now loads fast</p>
        <div className="sidebar__card-image">
        <img src="/img/user-help.png" alt="user help" />
        </div>
        <div className="sidebar__card-new mt-5">
          <p className="text-gray-400">Dismiss</p>
          <p>What's new?</p>
        </div>
      </div>
      <hr />
      <div className="sidebar__exit">
          <img src="/img/Avatar1.png" className="w-16" alt="user-logout"/>
          <div>
            <p>Oliva Rhye</p>
            <p className="font-light text-gray-600">oliva@untitledui.com</p>
          </div>
          <Exit />
      </div>
    </div>
  )
};

export default Sidebar;