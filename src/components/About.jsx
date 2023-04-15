import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';


function About(){
    return <section className="about" id="about">
        <Container>
        <h1>Joseph ChoHang Ng</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <p>dsjoench@gmail.com</p>

        <p2>I am an enthusiastic software engineer who enjoys building cool software and solving problems.</p2>

        </Container>
        <Container >
        <SocialIcon className ="social" url="https://www.linkedin.com/in/chohang-joseph/" />
        <SocialIcon className ="social" url="https://github.com/dsjoench?tab=repositories" />
        </Container>




    </section>

}

export default About;
