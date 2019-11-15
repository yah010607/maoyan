import React, { Component } from 'react';
import axios from 'axios'
class Login extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{localStorage.user="111";this.props.history.go(-1)}}>登录</button>
            </div>
        );
    }
    componentDidMount(){
        axios.get('/hot').then(({data})=>{
            console.log(data.movieList);
            
        })
    }
}

export default Login;