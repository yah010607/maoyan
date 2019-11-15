import React, { Component } from 'react';
import {connect} from 'react-redux';
class Detail extends Component {
    render() {
        this.id=this.props.match.params.id
        let {obj} = this.props
        return (
            <div>
                <img src={obj.img}/>
            </div>
        );
    }
    componentDidMount(){
        this.props.getXQ(this.id)
    }
}

export default connect((state)=>{
    return{
        obj:state.obj
    }
},(dispatch)=>{
    return{
        getXQ:(id)=>{dispatch({type:"XQ",id})}
    }
})(Detail);