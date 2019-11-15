import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div onClick={(e)=>{this.city(e)}}>
                <p>上海</p>
                <p>青岛</p>
                <p>广州</p>
                <p>山西</p>
                <p>河北</p>
            </div>
        );
    }
    city=(e)=>{
       if(e.target.tagName=='P'){
           localStorage.city=e.target.innerHTML
           this.props.history.go(-1)
       }
        
    }
}

export default City;