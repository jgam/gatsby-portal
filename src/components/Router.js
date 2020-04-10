import React from 'react'
import {
    BrowseRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


function Router() {
    return (
        <Router>
            <>
            <Switch>
                <Route path="/" component={} />
                <Redirect from="*" to="/" />
            </Switch>
            </>
        </Router>
    )
}

export default Router;
