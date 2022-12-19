import React from "react";
import {edu} from "../data";
import Card from "./Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Education(){
    return <section className="education" id="education" >
        <Container><Row><h1>Education</h1></Row></Container>
        {edu.map((item)=> { return (
            <Card key={item.id}
                title={item.degree}
                company={item.university}
                date = {item.date}
                content={item.gpa} />);
        })}
    </section>


}

export default Education;