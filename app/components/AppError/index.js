import React from 'react';

import Wrapper from './Wrapper';
import Header from 'components/Header';
import FooterEle from 'components/Footer';

class AppError extends React.PureComponent {
    static defaultProps = {
        showFooter: false,
        logOut: false 
    }

    render() {
        const Footer = <FooterEle/>;
        return (
            <div>
                {this.props.logOut && <Header givenName={''} mode={'Signed Out'} />}
                <Wrapper>
                    <div className="alert-info-wrapper">
                        {this.props.errorMessage}
                    </div>
                </Wrapper>
                {this.props.showFooter && Footer}
            </div>
        );
    }
}

export default AppError;
