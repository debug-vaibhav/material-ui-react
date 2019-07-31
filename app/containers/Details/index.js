import React from 'react';
import { Helmet } from 'react-helmet';
import { Table, Badge } from 'react-bootstrap';

import PageContainer from 'components/PageContainer';
import PageHeader from 'components/PageHeader';

const Details = () => {
    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <PageContainer>
                <PageHeader>Deep Lens - Details</PageHeader>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Documents</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>SSID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Primary</td>
                            <td>Jacob</td>
                            <td>Kiran</td>
                            <td>@A1B</td>
                        </tr>
                        <tr>
                            <td>Primary</td>
                            <td>Jacob</td>
                            <td>Kiran</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Matching</td>
                            <td>
                                <Badge pill variant="success">Success</Badge>
                            </td>
                            <td>
                                <Badge pill variant="success">Success</Badge>
                            </td>
                            <td>
                                <Badge pill variant="danger">Failed</Badge>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </PageContainer>
        </div>
    );
};

export default Details;

