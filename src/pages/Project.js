import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ListCheck, PersonCircle, PersonFill } from 'react-bootstrap-icons';
import "../csscustom/button.css";


export default class Project extends Component {
    render() {
        return (
            <div>
                {/* header */}
                <Header />
                <h1 className="display-2 text-center text-secondary rounded content m-5 p-4">
                    Project Info
                </h1>
                <Container fluid>
                    <Row>
                        <Col md={6}>
                        <div className="card m-3 p-3">
                            <div className="card-title bg-transparent"><h1 className="h3 text-center bg-transparent">Discription</h1></div>
                            <div className="d-flex bg-transparent align-items-center justify-content-center">
                                <ListCheck size={80} className="bg-transparent"/>
                            </div> 
                            <div className="d-flex align-items-center justify-content-center bg-transparent">
                                <Button href="#section2" className="w-50">Know more</Button>  
                            </div> 
                             
                        </div>
                        </Col>
                        <Col md={0} className="d-none d-lg-block">
                        <div className="d-flex bg-transparent align-items-center m-5 p-5 justify-content-center">
                            <p className="h4 text-muted">A Team Colaboration Project</p>
                        </div>   
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="d-none d-lg-block">
                            <div className="d-flex bg-transparent align-items-center m-5 p-5 justify-content-center sm-none">
                                <p className="h4 text-muted">Our Team Members</p>
                            </div> 
                        </Col>
                        <Col md={0}>
                            <div className="card m-3 p-3">
                                <div className="card-title bg-transparent"><h1 className="h3 text-center bg-transparent">Team</h1></div>
                                <div className="d-flex bg-transparent align-items-center justify-content-center">
                                    <PersonFill size={80} className="bg-transparent"/>
                                </div> 
                                <div className="d-flex align-items-center justify-content-center bg-transparent">
                                    <Button href="#section1" className="w-50">Know more</Button>  
                                </div> 
                            </div>  
                        </Col>
                    </Row>
                </Container>
{/* Discription section */}
                <div className="container-fluid" id="section2">
                    {/* firebase react */}
                    <div className="row" style={{backgroundColor:"rgb(0, 128, 128)"}}>
                        <div className="col p-5" style={{backgroundColor:"rgb(0, 128, 128)"}}>
                            <h1 className="h3 text-center mt-3 bg-transparent" style={{color:"pink"}}> Project Discription </h1>
                            <div className="d-flex bg-transparent align-items-center justify-content-center">
                                <a href="#section1" className="butn">Team Members</a>
                            </div>
                            {/* firebase and react */}
                            <div className="row bg-transparent">
                                <div className="d-flex align-items-center justify-content-center col-md-4 bg-transparent">
                                    <img className="bg-transparent" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNODYsMTcyYy00Ny40OTY0OSwwIC04NiwtMzguNTAzNTEgLTg2LC04NnYwYzAsLTQ3LjQ5NjQ5IDM4LjUwMzUxLC04NiA4NiwtODZ2MGM0Ny40OTY0OSwwIDg2LDM4LjUwMzUxIDg2LDg2djBjMCw0Ny40OTY0OSAtMzguNTAzNTEsODYgLTg2LDg2eiIgZmlsbD0iIzAwODA4MCI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik00MC4xMzMzMywxMjMuMjY2NzhsNDMuNjcwOCwtODEuODgzNDdjMC45MjAyLC0xLjcyNTczIDMuNDA4NDcsLTEuNjk0MiA0LjI4MjgsMC4wNTczM2wxNS4xMTMwNywzMC4yMjYxM3oiIGZpbGw9IiNmZjhmMDAiPjwvcGF0aD48cGF0aCBkPSJNNDAuMTMzMzMsMTIzLjI0Mzg1bDE1Ljg5ODUzLC05OC4wMzcxM2MwLjQxNTY3LC0yLjU2NTY3IDMuODYxNCwtMy4xMjE4IDUuMDY1NCwtMC44MTdsMzAuNjM2MDcsNTguNzIwOHoiIGZpbGw9IiNmZmEwMDAiPjwvcGF0aD48cGF0aCBkPSJNNDAuMTU2MjcsMTIzLjIyNjY1bDAuNTczMzMsLTAuNDUwMDdsNTAuMjQ5OCwtNDEuMTEwODdsLTE0LjE3MjgsLTI3LjE2NDUzeiIgZmlsbD0iI2ZmNmYwMCI+PC9wYXRoPjxwYXRoIGQ9Ik00MC4xMzMzMywxMjMuMjY2NzhsNzYuNDQyNTMsLTczLjcxMDZjMS42MDI0NywtMS41NDUxMyA0LjI3NzA3LC0wLjYzMzUzIDQuNjAzODcsMS41NjgwN2wxMC42ODY5Myw3Mi4xNDI1M2wtNDMsMjUuMDYzMjdjLTEuNzQ1OCwwLjk4MDQgLTMuODc1NzMsMC45ODA0IC01LjYyMTUzLDB6IiBmaWxsPSIjZmZjNDAwIj48L3BhdGg+PC9nPjxwYXRoIGQ9Ik04NiwxNzJjLTQ3LjQ5NjQ5LDAgLTg2LC0zOC41MDM1MSAtODYsLTg2djBjMCwtNDcuNDk2NDkgMzguNTAzNTEsLTg2IDg2LC04NnYwYzQ3LjQ5NjQ5LDAgODYsMzguNTAzNTEgODYsODZ2MGMwLDQ3LjQ5NjQ5IC0zOC41MDM1MSw4NiAtODYsODZ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE2OC41NmMtNDUuNTk2NjMsMCAtODIuNTYsLTM2Ljk2MzM3IC04Mi41NiwtODIuNTZ2MGMwLC00NS41OTY2MyAzNi45NjMzNywtODIuNTYgODIuNTYsLTgyLjU2djBjNDUuNTk2NjMsMCA4Mi41NiwzNi45NjMzNyA4Mi41Niw4Mi41NnYwYzAsNDUuNTk2NjMgLTM2Ljk2MzM3LDgyLjU2IC04Mi41Niw4Mi41NnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PC9zdmc+"/>
                                </div>
                                <div className="d-flex align-items-center justify-content-center col bg-transparent">
                                    <h1 className="h2 bg-transparent text-center">firebase Authentication as Backend.</h1>
                                </div>
                            </div>
                            <div className="row bg-transparent">
                                <div className="d-flex d-block d-md-none align-items-center justify-content-center col-md-4 bg-transparent">
                                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9IiMwMDgwODAiPjwvcGF0aD48Zz48cGF0aCBkPSJNODYsMTI0LjM1NmMtNDkuMDMwNzUsMCAtODYsLTE2LjQ5MDUgLTg2LC0zOC4zNTZjMCwtMjEuODY1NSAzNi45NjkyNSwtMzguMzU2IDg2LC0zOC4zNTZjNDkuMDMwNzUsMCA4NiwxNi40OTA1IDg2LDM4LjM1NmMwLDIxLjg2NTUgLTM2Ljk2OTI1LDM4LjM1NiAtODYsMzguMzU2ek04Niw1OC4zOTRjLTQ0LjM0Mzc1LDAgLTc1LjI1LDE0LjU0NDc1IC03NS4yNSwyNy42MDZjMCwxMy4wNjEyNSAzMC45MDYyNSwyNy42MDYgNzUuMjUsMjcuNjA2YzQ0LjM0Mzc1LDAgNzUuMjUsLTE0LjU0NDc1IDc1LjI1LC0yNy42MDZjMCwtMTMuMDYxMjUgLTMwLjkwNjI1LC0yNy42MDYgLTc1LjI1LC0yNy42MDZ6IiBmaWxsPSIjMzMzMzMzIj48L3BhdGg+PHBhdGggZD0iTTU0LjA0MDI1LDE2MS4yNXYwYy0zLjc2MjUsMCAtNy4xODEsLTAuODcwNzUgLTEwLjE4MDI1LC0yLjYwMTVjLTQuODkxMjUsLTIuODE2NSAtOC40MTcyNSwtNy44MDQ1IC0xMC4xOTEsLTE0LjQzNzI1Yy00Ljc4Mzc1LC0xNy44NzcyNSAyLjk0NTUsLTQ4LjA5NTUgMTkuNzA0NzUsLTc2Ljk4MDc1YzE5LjY0MDI1LC0zMy43ODcyNSA0NS41OTA3NSwtNTYuNDgwNSA2NC41OTY3NSwtNTYuNDgwNWMzLjc2MjUsMCA3LjE4MSwwLjg3MDc1IDEwLjE4MDI1LDIuNjAxNWM0Ljg4MDUsMi44MDU3NSA4LjQwNjUsNy43OTM3NSAxMC4xODAyNSwxNC40MTU3NWM0Ljc4Mzc1LDE3Ljg4OCAtMi45NDU1LDQ4LjEwNjI1IC0xOS43MTU1LDc2Ljk5MTVjLTE5LjYwOCwzMy43ODcyNSAtNDUuNTU4NSw1Ni40OTEyNSAtNjQuNTc1MjUsNTYuNDkxMjV6TTExNy45NzA1LDIxLjVjLTEyLjQwNTUsMCAtMzYuMDAxNzUsMTcuOTIwMjUgLTU1LjI5OCw1MS4xMzc3NWMtMTUuMTU3NSwyNi4xMjI1IC0yMi42Mzk1LDUzLjc3MTUgLTE4LjYxOSw2OC44YzEuMDQyNzUsMy44NTkyNSAyLjc3MzUsNi41MTQ1IDUuMTYsNy44OTA1YzEwLjQzODI1LDUuOTk4NSAzNy45MDQ1LC0xMS43MTc1IDYwLjEwMzI1LC00OS45NzY3NWMxNS4xNjgyNSwtMjYuMTMzMjUgMjIuNjUwMjUsLTUzLjc4MjI1IDE4LjYyOTc1LC02OC44MTA3NWMtMS4wNDI3NSwtMy44NDg1IC0yLjc3MzUsLTYuNTAzNzUgLTUuMTQ5MjUsLTcuODY5Yy0xLjM3NiwtMC43ODQ3NSAtMi45NTYyNSwtMS4xNzE3NSAtNC44MjY3NSwtMS4xNzE3NXoiIGZpbGw9IiMzMzMzMzMiPjwvcGF0aD48cGF0aCBkPSJNMTE3Ljk3MDUsMTYxLjI1djBjLTE5LjAxNjc1LDAgLTQ0Ljk2NzI1LC0yMi43MDQgLTY0LjU4NiwtNTYuNDgwNWMtMTYuNzcsLTI4Ljg3NDUgLTI0LjQ5OTI1LC01OS4wOTI3NSAtMTkuNzE1NSwtNzYuOTgwNzVjMS43NzM3NSwtNi42MzI3NSA1LjI5OTc1LC0xMS42MzE1IDEwLjE5MSwtMTQuNDM3MjVjMi45OTkyNSwtMS43MzA3NSA2LjQyODUsLTIuNjAxNSAxMC4xODAyNSwtMi42MDE1YzE5LjAwNiwwIDQ0Ljk1NjUsMjIuNzA0IDY0LjU3NTI1LDU2LjUwMmMxNi43NywyOC44ODUyNSAyNC40OTkyNSw1OS4wOTI3NSAxOS43MDQ3NSw3Ni45ODA3NWMtMS43NzM3NSw2LjYzMjc1IC01LjI4OSwxMS42MjA3NSAtMTAuMTY5NSwxNC40MTU3NWMtMi45OTkyNSwxLjczMDc1IC02LjQyODUsMi42MDE1IC0xMC4xODAyNSwyLjYwMTV6TTU0LjA0MDI1LDIxLjVjLTEuODcwNSwwIC0zLjQ1MDc1LDAuMzg3IC00LjgyNjc1LDEuMTcxNzVjLTIuMzk3MjUsMS4zNzYgLTQuMTI4LDQuMDMxMjUgLTUuMTYsNy45MDEyNWMtNC4wMjA1LDE1LjAyODUgMy40NjE1LDQyLjY3NzUgMTguNjI5NzUsNjguOGMxOS4yNzQ3NSwzMy4yMDY3NSA0Mi44NzEsNTEuMTI3IDU1LjI4NzI1LDUxLjEyN3YwYzEuODgxMjUsMCAzLjQ1MDc1LC0wLjM4NyA0LjgyNjc1LC0xLjE3MTc1YzIuMzg2NSwtMS4zNjUyNSA0LjExNzI1LC00LjAyMDUgNS4xNDkyNSwtNy44Nzk3NWM0LjAzMTI1LC0xNS4wMjg1IC0zLjQ1MDc1LC00Mi42Nzc1IC0xOC42MTksLTY4LjhjLTE5LjI4NTUsLTMzLjIyODI1IC00Mi44ODE3NSwtNTEuMTQ4NSAtNTUuMjg3MjUsLTUxLjE0ODV6IiBmaWxsPSIjMzMzMzMzIj48L3BhdGg+PHBhdGggZD0iTTk2Ljc1LDg2YzAsNS45NDQ3NSAtNC44MDUyNSwxMC43NSAtMTAuNzUsMTAuNzVjLTUuOTQ0NzUsMCAtMTAuNzUsLTQuODA1MjUgLTEwLjc1LC0xMC43NWMwLC01Ljk0NDc1IDQuODA1MjUsLTEwLjc1IDEwLjc1LC0xMC43NWM1Ljk0NDc1LDAgMTAuNzUsNC44MDUyNSAxMC43NSwxMC43NXoiIGZpbGw9IiM4YmI3ZjAiPjwvcGF0aD48cGF0aCBkPSJNODYsMTAyLjEyNWMtOC44OTAyNSwwIC0xNi4xMjUsLTcuMjM0NzUgLTE2LjEyNSwtMTYuMTI1YzAsLTguODkwMjUgNy4yMzQ3NSwtMTYuMTI1IDE2LjEyNSwtMTYuMTI1YzguODkwMjUsMCAxNi4xMjUsNy4yMzQ3NSAxNi4xMjUsMTYuMTI1YzAsOC44OTAyNSAtNy4yMzQ3NSwxNi4xMjUgLTE2LjEyNSwxNi4xMjV6TTg2LDgwLjYyNWMtMi45NTYyNSwwIC01LjM3NSwyLjQwOCAtNS4zNzUsNS4zNzVjMCwyLjk2NyAyLjQxODc1LDUuMzc1IDUuMzc1LDUuMzc1YzIuOTU2MjUsMCA1LjM3NSwtMi40MDggNS4zNzUsLTUuMzc1YzAsLTIuOTY3IC0yLjQxODc1LC01LjM3NSAtNS4zNzUsLTUuMzc1eiIgZmlsbD0iIzMzMzMzMyI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                                </div>
                                <div className="d-flex align-items-center justify-content-center col bg-transparent">
                                    <h1 className="h2 bg-transparent">React JS. as Frontend.</h1>
                                </div>
                                <div className="d-flex d-none d-md-block align-items-center justify-content-center col-md-4 bg-transparent">
                                   <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9IiMwMDgwODAiPjwvcGF0aD48Zz48cGF0aCBkPSJNODYsMTI0LjM1NmMtNDkuMDMwNzUsMCAtODYsLTE2LjQ5MDUgLTg2LC0zOC4zNTZjMCwtMjEuODY1NSAzNi45NjkyNSwtMzguMzU2IDg2LC0zOC4zNTZjNDkuMDMwNzUsMCA4NiwxNi40OTA1IDg2LDM4LjM1NmMwLDIxLjg2NTUgLTM2Ljk2OTI1LDM4LjM1NiAtODYsMzguMzU2ek04Niw1OC4zOTRjLTQ0LjM0Mzc1LDAgLTc1LjI1LDE0LjU0NDc1IC03NS4yNSwyNy42MDZjMCwxMy4wNjEyNSAzMC45MDYyNSwyNy42MDYgNzUuMjUsMjcuNjA2YzQ0LjM0Mzc1LDAgNzUuMjUsLTE0LjU0NDc1IDc1LjI1LC0yNy42MDZjMCwtMTMuMDYxMjUgLTMwLjkwNjI1LC0yNy42MDYgLTc1LjI1LC0yNy42MDZ6IiBmaWxsPSIjMzMzMzMzIj48L3BhdGg+PHBhdGggZD0iTTU0LjA0MDI1LDE2MS4yNXYwYy0zLjc2MjUsMCAtNy4xODEsLTAuODcwNzUgLTEwLjE4MDI1LC0yLjYwMTVjLTQuODkxMjUsLTIuODE2NSAtOC40MTcyNSwtNy44MDQ1IC0xMC4xOTEsLTE0LjQzNzI1Yy00Ljc4Mzc1LC0xNy44NzcyNSAyLjk0NTUsLTQ4LjA5NTUgMTkuNzA0NzUsLTc2Ljk4MDc1YzE5LjY0MDI1LC0zMy43ODcyNSA0NS41OTA3NSwtNTYuNDgwNSA2NC41OTY3NSwtNTYuNDgwNWMzLjc2MjUsMCA3LjE4MSwwLjg3MDc1IDEwLjE4MDI1LDIuNjAxNWM0Ljg4MDUsMi44MDU3NSA4LjQwNjUsNy43OTM3NSAxMC4xODAyNSwxNC40MTU3NWM0Ljc4Mzc1LDE3Ljg4OCAtMi45NDU1LDQ4LjEwNjI1IC0xOS43MTU1LDc2Ljk5MTVjLTE5LjYwOCwzMy43ODcyNSAtNDUuNTU4NSw1Ni40OTEyNSAtNjQuNTc1MjUsNTYuNDkxMjV6TTExNy45NzA1LDIxLjVjLTEyLjQwNTUsMCAtMzYuMDAxNzUsMTcuOTIwMjUgLTU1LjI5OCw1MS4xMzc3NWMtMTUuMTU3NSwyNi4xMjI1IC0yMi42Mzk1LDUzLjc3MTUgLTE4LjYxOSw2OC44YzEuMDQyNzUsMy44NTkyNSAyLjc3MzUsNi41MTQ1IDUuMTYsNy44OTA1YzEwLjQzODI1LDUuOTk4NSAzNy45MDQ1LC0xMS43MTc1IDYwLjEwMzI1LC00OS45NzY3NWMxNS4xNjgyNSwtMjYuMTMzMjUgMjIuNjUwMjUsLTUzLjc4MjI1IDE4LjYyOTc1LC02OC44MTA3NWMtMS4wNDI3NSwtMy44NDg1IC0yLjc3MzUsLTYuNTAzNzUgLTUuMTQ5MjUsLTcuODY5Yy0xLjM3NiwtMC43ODQ3NSAtMi45NTYyNSwtMS4xNzE3NSAtNC44MjY3NSwtMS4xNzE3NXoiIGZpbGw9IiMzMzMzMzMiPjwvcGF0aD48cGF0aCBkPSJNMTE3Ljk3MDUsMTYxLjI1djBjLTE5LjAxNjc1LDAgLTQ0Ljk2NzI1LC0yMi43MDQgLTY0LjU4NiwtNTYuNDgwNWMtMTYuNzcsLTI4Ljg3NDUgLTI0LjQ5OTI1LC01OS4wOTI3NSAtMTkuNzE1NSwtNzYuOTgwNzVjMS43NzM3NSwtNi42MzI3NSA1LjI5OTc1LC0xMS42MzE1IDEwLjE5MSwtMTQuNDM3MjVjMi45OTkyNSwtMS43MzA3NSA2LjQyODUsLTIuNjAxNSAxMC4xODAyNSwtMi42MDE1YzE5LjAwNiwwIDQ0Ljk1NjUsMjIuNzA0IDY0LjU3NTI1LDU2LjUwMmMxNi43NywyOC44ODUyNSAyNC40OTkyNSw1OS4wOTI3NSAxOS43MDQ3NSw3Ni45ODA3NWMtMS43NzM3NSw2LjYzMjc1IC01LjI4OSwxMS42MjA3NSAtMTAuMTY5NSwxNC40MTU3NWMtMi45OTkyNSwxLjczMDc1IC02LjQyODUsMi42MDE1IC0xMC4xODAyNSwyLjYwMTV6TTU0LjA0MDI1LDIxLjVjLTEuODcwNSwwIC0zLjQ1MDc1LDAuMzg3IC00LjgyNjc1LDEuMTcxNzVjLTIuMzk3MjUsMS4zNzYgLTQuMTI4LDQuMDMxMjUgLTUuMTYsNy45MDEyNWMtNC4wMjA1LDE1LjAyODUgMy40NjE1LDQyLjY3NzUgMTguNjI5NzUsNjguOGMxOS4yNzQ3NSwzMy4yMDY3NSA0Mi44NzEsNTEuMTI3IDU1LjI4NzI1LDUxLjEyN3YwYzEuODgxMjUsMCAzLjQ1MDc1LC0wLjM4NyA0LjgyNjc1LC0xLjE3MTc1YzIuMzg2NSwtMS4zNjUyNSA0LjExNzI1LC00LjAyMDUgNS4xNDkyNSwtNy44Nzk3NWM0LjAzMTI1LC0xNS4wMjg1IC0zLjQ1MDc1LC00Mi42Nzc1IC0xOC42MTksLTY4LjhjLTE5LjI4NTUsLTMzLjIyODI1IC00Mi44ODE3NSwtNTEuMTQ4NSAtNTUuMjg3MjUsLTUxLjE0ODV6IiBmaWxsPSIjMzMzMzMzIj48L3BhdGg+PHBhdGggZD0iTTk2Ljc1LDg2YzAsNS45NDQ3NSAtNC44MDUyNSwxMC43NSAtMTAuNzUsMTAuNzVjLTUuOTQ0NzUsMCAtMTAuNzUsLTQuODA1MjUgLTEwLjc1LC0xMC43NWMwLC01Ljk0NDc1IDQuODA1MjUsLTEwLjc1IDEwLjc1LC0xMC43NWM1Ljk0NDc1LDAgMTAuNzUsNC44MDUyNSAxMC43NSwxMC43NXoiIGZpbGw9IiM4YmI3ZjAiPjwvcGF0aD48cGF0aCBkPSJNODYsMTAyLjEyNWMtOC44OTAyNSwwIC0xNi4xMjUsLTcuMjM0NzUgLTE2LjEyNSwtMTYuMTI1YzAsLTguODkwMjUgNy4yMzQ3NSwtMTYuMTI1IDE2LjEyNSwtMTYuMTI1YzguODkwMjUsMCAxNi4xMjUsNy4yMzQ3NSAxNi4xMjUsMTYuMTI1YzAsOC44OTAyNSAtNy4yMzQ3NSwxNi4xMjUgLTE2LjEyNSwxNi4xMjV6TTg2LDgwLjYyNWMtMi45NTYyNSwwIC01LjM3NSwyLjQwOCAtNS4zNzUsNS4zNzVjMCwyLjk2NyAyLjQxODc1LDUuMzc1IDUuMzc1LDUuMzc1YzIuOTU2MjUsMCA1LjM3NSwtMi40MDggNS4zNzUsLTUuMzc1YzAsLTIuOTY3IC0yLjQxODc1LC01LjM3NSAtNS4zNzUsLTUuMzc1eiIgZmlsbD0iIzMzMzMzMyI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{/* our team section */}
                <div style={{backgroundColor: "lightgray"}} >
                <Container id="section1" >
                    <Row className="" style={{backgroundColor: "lightgray"}}>
                    <h1 className="display-5 text-center" style={{backgroundColor: "lightgray"}}>Our Team Members</h1>
                        <Col md={6} className="" style={{backgroundColor: "lightgray"}}>
                            <div className="card m-3 p-3 bg-white">
                                <div className="card-title bg-transparent"><h1 className="h3 text-center bg-transparent">Harshit</h1></div>
                                <div className="d-flex bg-transparent align-items-center justify-content-center">
                                    <PersonCircle size={200} style={{color:"grey"}} className="bg-transparent"/>
                                </div> 
                                <div className="card-title bg-transparent"><h1 className="h5 text-center bg-transparent text-muted">(Incharge)</h1></div>
                                <div className="d-flex align-items-center justify-content-center bg-transparent">
                                    <Button href="#section1"className="w-50">Know more</Button>  
                                </div> 
                            </div>  
                        </Col>
                        <Col md={6} style={{backgroundColor: "#d3d3d3"}}>
                             
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}
