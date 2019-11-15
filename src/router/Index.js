import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterList from './RouterList'
import RouterViews from './RouterViews'

class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <RouterViews routes={RouterList}/>
                </BrowserRouter>
            </>
        );
    }
}

export default Index;