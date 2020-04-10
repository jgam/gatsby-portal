import React from 'react'
import {
    BrowseRouter as RouterDom,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

//imports
import Header from '../components/organisms/header/header';
import About from '../components/About';


function Router() {
    return (
        <RouterDom>
            <>
            <Header />
            <Switch>
                <Route path="/" component={About} />
                <Redirect from="*" to="/" />
            </Switch>
            </>
        </RouterDom>
    )
}

export default Router;
