import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import StudentInfo from './Student-Info'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                <Navbar/>
                <StudentInfo/>
                </div>
                <Footer/>
            </div>
        )
    }
}
