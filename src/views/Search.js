import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from '../components/Item'
class Search extends Component {
    state = {
        val: ""
    }
    render() {
        let { val } = this.state
        let { arr } = this.props
        return (
            <div>
                <input value={val} onChange={(e) => { this.setState({ val: e.target.value }) }} onKeyDown={(e) => {
                    if (e.keyCode == 13) {
                        this.props.Search(val)
                    }

                }} />

                {
                    arr.length?arr.map(item => <Item key={item.id} {...item}/>):<p>暂无数据</p>
                }
            </div>
        );
    }
}

export default connect((state) => {
    return {
        arr: state.arr
    }
}, (dispatch) => {
    return {
        Search: (val) => { dispatch({ type: "SOUSUO", val }) }
    }
})(Search);