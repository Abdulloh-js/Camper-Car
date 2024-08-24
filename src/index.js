import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './componens/navbar';
import { BrowserRouter } from 'react-router-dom';

import Style from './componens/Styles/style';
import { StyleSheetManager } from 'styled-components';
import RouterComponent from './router';
import Naavbar from './componens/naavbar';
import Footer from './componens/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Naavbar />
  <RouterComponent />
  <Footer />
  </BrowserRouter>
  
 
);


