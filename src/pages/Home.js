import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./css/home.css";
import Slideshow from './components/Slideshow';
import Gallery from './components/Gallery';
import CollegeMovements from './components/CollegeMovements';



export default class Home extends Component {

    render() {
        return (
            <div>
            <div style={{backgroundColor:"teal",overflowX:"hidden"}}>
                <Slideshow />
                <CollegeMovements />
            </div>
            </div>
        )
    }
}
