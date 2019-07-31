import React from 'react';
import Wrapper from './Wrapper';
import { Row, Col } from 'react-bootstrap';

const PageHeader = (props) => {
    return (
        <Wrapper>
            <Row>
                <Col>
                    <h2>{props.children}</h2>
                </Col>
            </Row>
        </Wrapper>
    );
}
export default PageHeader;
