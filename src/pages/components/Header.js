import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./nav.css";
import { Link } from 'react-router-dom';
import { HouseFill } from 'react-bootstrap-icons';
import "../../csscustom/button.css"

// not rendering
export default class Header extends Component {
    render() {
        return (
            <div className="topnav">
               <nav className="navbar navbar-expand-lg m-0 p-0 bg-transparent sticky">
                   <div className="container-fluid">
                       <a className="navbrand bg-transparent" href="/"><h2 className="h2 bg-transparent">WeForeverTeam.</h2></a>
                        <div  className="bg-transparent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-transparent">
                                <li className="nav-item bg-transparent">
                                   {/* <Link to="/" className="nav-link bg-white" aria-current="page">Home</Link> */}
                                   <a href="/" className="nav-link text-white bg-transparent" aria-current="page"><HouseFill size={23} className="bg-transparent"/></a>
                                </li>
                                <li className="nav-item bg-transparent">
                                    {/* <Link to="project-info"className="btn btn-primary">Project Info</Link> */}
                                    <a className="btn btn-primary" href="project-info">Login</a>
                                </li>
                            </ul>
                        </div>
                   </div>
               </nav>
            </div>
        )
    }
}
