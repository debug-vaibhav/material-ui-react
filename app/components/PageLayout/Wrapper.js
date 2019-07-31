import styled from 'styled-components';

const Wrapper = styled.div`
  & #main-content {
    display: inline-block;
    width: calc(100% - 226px);
    min-height: calc(100vh - 100px);
    border-left: 1px solid #e9e9e9;
  }
`;

export default Wrapper;