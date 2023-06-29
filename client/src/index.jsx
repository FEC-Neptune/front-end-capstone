import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/reset.css';
import './assets/styles.sass';
import './assets/overview.sass';
import App from './components/App.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);