import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

class App extends React.Component {
	render() {
		return (
			<div>
        <Navbar/>
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.node,
};

export default App;
