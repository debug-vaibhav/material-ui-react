import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";

import PageLayout from 'components/PageLayout';
import AppErrorBoundary from 'components/AppErrorBoundary';
import { getUserData } from './actions';

import GlobalStyle from '../../global-styles';

function App(props) {
  useEffect(() => {
    props.getUserData();
  }, []);

  return (
    <React.Fragment>
      <Helmet
        titleTemplate="Deep Lens - %s"
        defaultTitle="Deep Lens"
      >
      </Helmet>
      <AppErrorBoundary>
        <PageLayout givenName={props.givenName} pathName={props.pathName} />
      </AppErrorBoundary>
      <GlobalStyle />
    </React.Fragment>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    getUserData: () => dispatch(getUserData())
  };
}

const mapStateToProps = (state) => ({
  givenName: state.get('global').userData.givenName,
  pathName: state.get('router').get('location').get('pathname')
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect
)(App);
