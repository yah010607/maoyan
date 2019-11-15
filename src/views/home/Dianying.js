import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import RouterViews from '../../router/RouterViews'

class Dianying extends Component {
    render() {
        let { routes } = this.props
        return (
            <>
                <h3>猫眼电影</h3>
                <div className="main">
                    <div className="main-reying">
                        <span onClick={() => { this.props.history.push('/city') }}>{localStorage.city ? localStorage.city : "北京"}</span>
                        <NavLink to="/home/dianying/reying">正在热映</NavLink>
                        <NavLink to="/home/dianying/shangying">即将上映</NavLink>
                        <span onClick={()=>{this.props.history.push('/search')}}>🔍</span>
                    </div>
                    <RouterViews routes={routes} />
                </div>
            </>
        );
    }
}

export default Dianying;