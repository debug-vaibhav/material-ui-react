import styled from 'styled-components';

const Wrapper = styled.section`
  width: 226px;
  float: left;
  min-height: calc(100vh - 128px);

  & .panel + .panel {
    border-top: 1px solid #e9e9e9;
  }

  & .panel-heading {
    padding: 15px;
  }

  & .panel a {
    color: #000;
  }

  & .panel h4 a {
    font-size: 16px;
    font-weight: 700;
  }

  & .panel-title > a:before {
    float: right !important;
    font-family: FontAwesome;
    content:"\f106";
    padding-right: 5px;
    font-size: 25px;
  }

  & .panel-title > a.collapsed:before {
      float: right !important;
      content:"\f107";
  }

  & .panel-title > a:hover, 
  & .panel-title > a:active, 
  & .panel-title > a:focus,
  & .panel-body > a:hover, 
  & .panel-body > a:active, 
  & .panel-body > a:focus  {
      text-decoration:none;
  }

  & .panel-title {
    margin-bottom: 0px;
  }

  & .panel-title a {
    display: block;
  }

  & .panel-body a {
    padding: 15px 20px 15px 35px;
    display: block;
    cursor: pointer;
    border-left: 5px solid #FFF;
  }
  
  & .panel-body a.active {
    background-color: #F5F5F5;
    border-left: 5px solid #252525;
  }
`;

export default Wrapper;