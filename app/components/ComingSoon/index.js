import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

const ComingSoon = () => {
  return (
    <Wrapper>
        <FormattedMessage {...messages.message} />
      </Wrapper>
  );
}

export default ComingSoon;
