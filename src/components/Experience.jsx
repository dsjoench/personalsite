import React from "react";
import {exp} from "../data";
import Card from "./Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Experience(){
    return <section className="experience" id="experience" >
    <Container><Row><h1>Experience</h1></Row></Container>
        
        {exp.map((item)=> { return (
            <Card key={item.id}
                title={item.title}
                company={item.company}
                date = {item.date}
                content={item.content} />);
        })}
    </section>

}

export default Experience;