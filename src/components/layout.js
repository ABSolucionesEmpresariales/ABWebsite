import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

import '../styles/bootstrap-grid.min.css'

const Layout = (props) => {
    return (
        <div className='container-fluid mx-0'>
            <div>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
