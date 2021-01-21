import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';
import Home from './Views/Home/Home';

function App() {
	return (
		<div className='App text-gray-600 font-body'>
			<Router>
				<Header />
				<div className='p-3'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
					</Switch>
				</div>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
