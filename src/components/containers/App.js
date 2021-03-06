import React from 'react';
import GoldPlayer from './GoldPlayer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
	<BrowserRouter basename='/'>
		<>
		<Switch>
			<Route exact path='/' component={GoldPlayer} />
			<Route exact path='/:activeVideo' component={GoldPlayer} />
		</Switch>
		<GlobalStyle/>
		</>
	</BrowserRouter>
)

export default App;