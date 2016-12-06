import * as React from "react";
import { Route, IndexRoute, hashHistory, Router } from "react-router";
import home from "./containers/home-page";

export default  (
	<Router history={hashHistory}>
		<Route path="/home" component={ home } />
	</Router>
);