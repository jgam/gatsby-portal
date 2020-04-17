//base libraries
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

//gatsby
import { useStaticQuery, graphql } from "gatsby"

//imports
import Header from '../components/organisms/header/header';
import Layout from '../components/layout';
import About from '../components/About';
import Product from '../pages/product';



const Routes = ({ auth, children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
        siteMetadata {
            title
        }
        }
    }
    `)
    console.log('in routes!')

  console.log(data);

    return (
    <>
        <Router>
            <Header 
            auth= {auth}
            siteTitle={data.site.siteMetadata.title}
            />
            <Switch>
                <Route path="/" component={Layout} />
                <Route path="/about" component={About} />
                <Route path="/product" component={Product} />

                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </>
    );
};

export default Routes;