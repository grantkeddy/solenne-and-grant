import React from 'react';
import { createRoot } from 'react-dom/client';
import './storageShim.js';
import EngagementSite from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EngagementSite />
  </React.StrictMode>
);
