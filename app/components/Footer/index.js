import React from 'react';

import Wrapper from './Wrapper';

const FooterEle = () => {
  return (
    <Wrapper>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright: Deep Lens</div>
      </footer>
    </Wrapper>
  );
}

export default FooterEle;
