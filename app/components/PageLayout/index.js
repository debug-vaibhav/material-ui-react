import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Upload from 'containers/Upload/Loadable';
import About from 'containers/About/Loadable';
import Documents from 'containers/Documents/Loadable';
import Details from 'containers/Details/Loadable';
import Header from 'components/Header';
import FooterEle from 'components/Footer';
import LeftMenu from 'components/LeftMenu';
import Wrapper from './Wrapper';

const PageLayout = (props) => {
    return (
        <Wrapper>
            <Header givenName={props.givenName} mode={'Basic'} />
            <section className="content-wrapper">
                <LeftMenu pathName={props.pathName} />
                <section id="main-content">
                    <Switch>
                        <Route exact path="/" component={Upload} />
                        <Route path="/documents" component={Documents} />
                        <Route path="/details" component={Details} />
                        <Route path="/about" component={About} />
                    </Switch>
                </section>
                <footer>
                    <FooterEle />
                </footer>
            </section>
        </Wrapper>
    );
}

export default PageLayout;