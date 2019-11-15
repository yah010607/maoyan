import React, { Component } from 'react';
import Index from './router/Index'
import { Provider } from 'react-redux'
import store from './store/Index'
class App extends Component {
    render() {
        return (
            <>
                <Provider store={store}>
                    <Index />
                </Provider>

            </>
        );
    }
}

export default App;