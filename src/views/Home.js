import React, { Component } from 'react';
import RouterViews from '../router/RouterViews'
import MyFoot from '../components/MyFoot';
class Home extends Component {
    render() {
        let { routes } = this.props

        return (
            <>
                <RouterViews routes={routes} />
                <MyFoot />
            </>
        );
    }
}

export default Home;