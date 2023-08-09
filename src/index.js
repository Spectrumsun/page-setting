import React from 'react';
import ReactDOM from 'react-dom/client';
import Setting from './components/Setting';
import Sidebar from './components/Sidebar';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex relative overflow-hidden">
      <Sidebar />
      <Setting />
    </div>
  </React.StrictMode>
);


