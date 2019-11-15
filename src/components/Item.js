import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Item extends Component {
    render() {
        let { nm, img, id } = this.props
        return (
            <div>
                <img src={img} onClick={() => { this.props.history.push(`/detail/${id}`) }} />
                {nm}
            </div>
        );
    }
}

export default withRouter(Item);