import React, { Component } from 'react';
import"bootstrap/dist/css/bootstrap.css";
import Fade from "react-reveal";
export default class Slideshow extends Component {
    render() {
        return (
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{backgroundColor:'teal', height:500 }}>
                <Fade duration={1000}>
                <h1 className="h2 text-center bg-transparent" style={{color:"silver", paddingTop:80}}>We Are Friends.</h1>
                </Fade>
                <Fade delay={2000} duration={2000}>
                    <a className="btn btn-primary">Hello</a>
                </Fade>
            </div>
        )
    }
}
