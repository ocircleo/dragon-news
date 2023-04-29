import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../shared/leftNav/LeftNav'
import RightNav from '../shared/rightNav/RightNav'
const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        main content commit soon
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;