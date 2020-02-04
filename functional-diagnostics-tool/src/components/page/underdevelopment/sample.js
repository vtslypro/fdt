import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

export class Sample extends Component {

    render() {
        let { verification } = this.props;
        return (
            <h3>This is my awesome component.</h3>
        );
    }

}

const select = (state) => {
    return {
        verification: state.verification
    }
}

export default connect(select)(Sample);
