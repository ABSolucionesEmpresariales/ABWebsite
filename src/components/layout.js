import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const Layout = (props) => {
    return (
        <div className='container-fluid'>
            <div>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
