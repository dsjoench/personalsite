import React from "react";
import {skill} from "../data";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Skill (){

    return (
        <section className="skill" id="skill">

            <Container><Row><h1>Skill</h1></Row></Container>
            {skill.map((item, index) => {
                return <Container>
                    <Row>
                        <p1>{item.category}</p1>
                    </Row>
                    <Row>
                        <p2>{item.detail}</p2>
                    </Row>
                </Container>
            })}

         
        </section>
    
    )

}

export default Skill;
