import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import App from './components/core/app';
import Sidebar from './components/layout/sidebar';
import Home from './components/page/home/home';
import About from './components/page/about/about';
import FormControlTemplate from './components/template/formControlTemplate';
import Underdevelopment from './components/page/underdevelopment/index';
import BlankWithRedux from './components/page/underdevelopment/blankWithRedux';

import AppCast_Index from './components/data/appcast_index';

// Uncomment the next line if FDT is imported.
import FDT from './components/page/fdt/index';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="about" component={Underdevelopment} />
    <Route path="fdt" component={FDT} />        // Uncomment this line if FDT is imported.
    <Route path="map" component={Underdevelopment} />
    <Route path="efp" component={Underdevelopment} />
    <Route path="faq" component={Underdevelopment} />
    <Route path="appcast" component={Underdevelopment} />
    <Route path="FormControlTemplate" component={Underdevelopment} />
    <Route path="redux" component={BlankWithRedux} />
  </Route>
);
