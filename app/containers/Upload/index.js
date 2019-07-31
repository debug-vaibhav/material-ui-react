import React from 'react';
import { Helmet } from 'react-helmet';

import UploadForm from 'components/UploadForm';
import PageHeader from 'components/PageHeader';
import PageContainer from 'components/PageContainer';

const Upload = () => {
  return (
    <div>
      <Helmet>
        <title>Upload</title>
      </Helmet>
      <PageContainer>
        <PageHeader>Deep Lens - Upload Form</PageHeader>
        <UploadForm />
      </PageContainer>
    </div>
  );
};

export default Upload;
