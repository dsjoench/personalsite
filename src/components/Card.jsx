import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Card(props) {
    return (
      <Container className = "container">
      <Row>
        <Col sm={8}><h3>{props.title}</h3></Col>
        <Col sm={4}><p1>{props.date}</p1> </Col>
      </Row>
      <Row>
        <Col sm><p1>{props.company}</p1> </Col>

        <Col sm={4}></Col>
      </Row>
      <Row>
        <Col sm> <p2>{props.content.map((item)=> {
          return (
            <div>
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          )
        })}</p2></Col>
        <Col sm={4}></Col>
      </Row>
    </Container>








    );
  }

  export default Card;
