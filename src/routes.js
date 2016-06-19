import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SideNav from './pages/SideNav';
import WebDesign from './pages/Webdesign';


const routes = (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home } />
		<Route path="contact" component={ Contact } />
		<Route path="about" component={ About } />
		<Route path="sidenav" component={ SideNav } />
		<Route path="webdesign" component={ WebDesign } />

	</Route>
);

export default routes;
