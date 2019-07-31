import React from 'react';

import AppError from 'components/AppError';

export default class AppErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    render() {
        let content;

        if (this.state.hasError) {
            content = (<AppError logOut={true} showFooter={true} errorMessage='There is some problem in loading the application. Please try again later.' />);
        }
        else {
            content = this.props.children;
        }

        return (<div>{content}</div>);
    }
}