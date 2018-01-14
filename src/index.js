import React from 'react';
import {render} from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as FelaProvider } from 'react-fela';
import { createRenderer } from 'fela';

import './index.css';
import HomePage from './containers/HomePage';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';

const store = configureStore();
const renderer = createRenderer();

render(
	<ReduxProvider store = {store}>
		<FelaProvider renderer={renderer}>
			<div className="homePage">
				<HomePage/>
			</div>
		</FelaProvider>
	</ReduxProvider>,
	document.getElementById('root')
);
registerServiceWorker();
