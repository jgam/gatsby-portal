import React from 'react'

//gatsby import
import { useStaticQuery, graphql } from "gatsby"

//header imported
import Header from '../components/organisms/header/header';


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

            <div>This is About</div>
        </div>
    )
}

export default About;
