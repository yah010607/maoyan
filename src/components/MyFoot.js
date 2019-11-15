import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class MyFoot extends Component {
    render() {
        return (
            <div className="foot">
                <NavLink to="/home/dianying">电影</NavLink>
                <NavLink to="/home/yingyuan">影院</NavLink>
                <NavLink to="/home/my">我的</NavLink>
            </div>
        );
    }
}

export default MyFoot