import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>My name is Cody. I'm a full stack developer based out of Toronto</p>
    <span>
      <p>Looking for a developer? <Link to='/contact'>Contact me.</Link></p>
    </span>
  </Layout>
)

export default IndexPage
