import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './index.css';
import './App.css';

ReactDOM.render(<Provider store = {store}>
	<HashRouter>
		<App/>
	</HashRouter>
</Provider>, document.getElementById('root'));

registerServiceWorker();
