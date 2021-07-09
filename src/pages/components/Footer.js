import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-dark text white" style={{bottom:0,width:"100%"}}>
                    <div className="row">
                        <div className="col bg-dark text-white text-center">
                            © weforeverteam | WFT
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
