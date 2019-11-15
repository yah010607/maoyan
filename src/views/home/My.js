import React, { Component } from 'react';
import WithLanJie from '../../utils/WithLanJie'
class My extends Component {
    render() {
        return (
            <>
            <h3>我的</h3>
            <div className="main">
                33
            </div>
            </>
        );
    }
}

export default WithLanJie(My);