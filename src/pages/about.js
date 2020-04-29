import React from 'react'

//gatsby import
import { useStaticQuery, graphql } from "gatsby"

//header imported
import Header from '../components/organisms/header/header';

//REX
import Button from '@rakuten-rex/button';


function About({auth}) {
    // const data = useStaticQuery(graphql`
    // query SiteTitleQuery {
    //     site {
    //     siteMetadata {
    //         title
    //     }
    //     }
    // }
    // `)


    return (
        <div>
            <Header 
            auth= {auth}
            siteTitle={"here"}
            />

            <div>This is About and will implement rex buttons</div>
            <Button>
                Click me
            </Button>
        </div>
    )
}

export default About;
