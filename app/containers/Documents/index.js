import React from 'react';
import { Helmet } from 'react-helmet';
import { Table, Badge } from 'react-bootstrap';

import PageContainer from 'components/PageContainer';
import PageHeader from 'components/PageHeader';

const Documents = () => {
    return (
        <div>
            <Helmet>
                <title>Documents</title>
            </Helmet>
            <PageContainer>
                <PageHeader>Deep Lens - Documents</PageHeader>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Customer Id</th>
                            <th>Name</th>
                            <th>Document Name</th>
                            <th>Document Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>11234</td>
                            <td>Kiran</td>
                            <td>Voter Id</td>
                            <td>
                                <Badge pill variant="success">Success</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>11234</td>
                            <td>Kiran</td>
                            <td>Credit Card Document</td>
                            <td>
                                <Badge pill variant="danger">Not Approved</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>11234</td>
                            <td>Kiran</td>
                            <td>Passport</td>
                            <td>
                                <Badge pill variant="success">Success</Badge>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </PageContainer>
        </div>
    );
};

export default Documents;

