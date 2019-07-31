import React from 'react';
import { Container } from 'react-bootstrap';

const PageContainer = (props) => {
    return(
        <Container>{props.children}</Container>
    );
};

export default PageContainer;