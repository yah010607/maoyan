import React, { Component } from 'react';

const WithLanJie=(Comp)=>{
   return class NewComp extends Component {
       componentWillMount(){
           if(!localStorage.user){
            this.props.history.push('/login')
           }
       }
        render() {
            return (
                <Comp/>
            );
        }
    }
}


export default WithLanJie;