import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import Carousel from "../components/carousel"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Carousel/>
        </Layout>
    )
}

export default IndexPage