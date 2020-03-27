import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Counter from '../components/counter/Counter';
import MainImage from '../components/MainImage';

const IndexPage = ({auth=false}) => (
  <Layout auth={auth}>
    <SEO title="Home" />
    <h1>Welcome to IoT Portal</h1>
    <p>new way to build IoT technology with Rakuten Mobile</p>
    <MainImage 
      styles={{
        background: 'black',
        height: '20%',
      }}
    />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
