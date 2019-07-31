import React from 'react';
import { Helmet } from 'react-helmet';

import ComingSoon from 'components/ComingSoon';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <ComingSoon />
        </div>
    );
};

export default About;
