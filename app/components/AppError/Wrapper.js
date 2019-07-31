import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  & .alert-info-wrapper {
    max-width: 580px;
    border: 1px solid #c7c7c7;
    border-left: 3px solid #db0020;
    padding: 20px;
  }
`;

export default Wrapper;
