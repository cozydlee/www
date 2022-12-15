import React from 'react';
import {Redirect} from 'react-router-dom';

import Home from './../pages/Home.js';
import About from './../pages/About.js';
import Contact from './../pages/Contact.js';

const routes = [
    {
        path: '/',
        exact:true,
        component: () => <Redirect to="/react/Home"/>
    }, 
   {
       path: '/react/Home' ,
       component: () => <Home/>
   },
   {
    path: '/react/About',
    component: () => <About/>
    },
    {
        path: '/react/Contact',
        component: () => <Contact/>
    }
];

export default routes;