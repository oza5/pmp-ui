// src/SideMenu.js

import { Link } from 'react-router-dom';

import TopBar from './TopBar';

const SideMenu = ({ user }) => {
  return (
    <div className="side-menu">
      <TopBar username={user.firstName} />
      <ul>
        <li>
          <Link to="/">Health Dashboard</Link>
        </li>
        <li>
          <Link to="/vaccinations">Vaccinations</Link>
        </li>
        <li>
          <Link to="/hospitals">Hospitals</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
