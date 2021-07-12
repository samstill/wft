import Aos from 'aos';
import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import {Fade, Slide} from "react-reveal";
import { Link } from 'react-router-dom';

export default class CollegeMovements extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        Aos.init({
          // initialise with other settings
          duration : 2000
        });
      }
    render() {
        return (
            <div data-aos="slide-up">
                <div className="container-fluid" style={{backgroundColor:'#4d4dff', height:"auto" }}>
                    <h1 className="Display-2 bg-transparent text-center" style={{color:"teal"}}>College Movements</h1>
                    <div className="row bg-transparent">
                    
                        <div data-aos="slide-right" className="m-3 col-md-6 text-center bg-transparent" >
                            <Container className="d-none d-md-block bg-transparent" >
                            <div className="row bg-transparent">
                                <div className="col bg-transparent">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/weforeverteam-d3cd4.appspot.com/o/stock%2Fgirl-6380331_1920.jpg?alt=media&token=adfafd18-8ece-4351-ba60-25d50c999580" width={220} height={220} style={{borderRadius:80}} alt="one" />
                                </div>
                                <div className="col bg-transparent">
                                <img src="https://firebasestorage.googleapis.com/v0/b/weforeverteam-d3cd4.appspot.com/o/stock%2Fpeople-3755342_1920.jpg?alt=media&token=4342b616-696b-4342-a204-4375e479b3b0" width={220} height={220} alt="Friends Walking" />
                                </div>
                            </div>
                            <div className="row m-2 bg-transparent">
                                <Col className="col bg-transparent">
                                <img src="https://firebasestorage.googleapis.com/v0/b/weforeverteam-d3cd4.appspot.com/o/stock%2Fpeople-821624_1920.jpg?alt=media&token=5a6c1d4d-8eca-4db6-8d41-4f829abe7b8f" width={220} height={220} alt="Precious movements" />
                                </Col>
                                <Col className="col bg-transparent">
                                <img src="https://firebasestorage.googleapis.com/v0/b/weforeverteam-d3cd4.appspot.com/o/stock%2Fchildren-moc-chau-2099536_1920.jpg?alt=media&token=81cc5973-96c1-4993-b395-a9d7267fc41f" width={220} height={220} style={{borderRadius:80}} alt="Childrens" />
                                </Col>
                            </div>
                            </Container>
                            <div className="d-sm-block d-md-none row m-2 bg-transparent">
                                <Col className="col bg-transparent my-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/weforeverteam-d3cd4.appspot.com/o/stock%2Fpeople-821624_1920.jpg?alt=media&token=5a6c1d4d-8eca-4db6-8d41-4f829abe7b8f" width={220} height={220} alt="Precious movements" />
                                </Col>
                                <Col className="col bg-transparent">
                                <img src="https://firebasestorage.googleapis.com/v0/b/weforeverteam-d3cd4.appspot.com/o/stock%2Fchildren-moc-chau-2099536_1920.jpg?alt=media&token=81cc5973-96c1-4993-b395-a9d7267fc41f" width={220} height={220} style={{borderRadius:80}} alt="Childrens" />
                                </Col>
                            </div>
                        </div>
                    
                    
                        <div data-aos="fade" className="d-flex m-3 col bg-transparent align-items-center justify-content-center" >
                            <h2 className="bg-transparent text-white">This Gallary contains all the Movements we will spend in college.</h2>
                            <Link to="gallery" className="butn text-center">Visit Movements</Link> 
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}
