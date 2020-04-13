import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

//imports
import Header from '../components/organisms/header/header';
import About from '../components/About';

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" component={About} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);
