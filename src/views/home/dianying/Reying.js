import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../../../components/Item';

import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'

class Reying extends Component {
    render() {
        let { list } = this.props
        return (
            <div className="container">
                <Scroll
                    click={true}
                    pullDownRefresh
                    doPullDownFresh={this.pullDownFreshAction}
                    pullUpLoad
                    pullUpLoadMoreData={this.loadMoreData}
                    isPullUpTipHide={false}
                >
                    {
                        list.map((item, index) => <Item {...item} key={index} />)
                    }
                </Scroll>
            </div>
        );
    }
    //下拉刷新
    pullDownFreshAction = () => {
        return new Promise((resolve) => {
            this.timer = setTimeout(() => {
                if (Math.random() > 0) {
                    // 如果有新数据
                    window.location.reload()
                }
                resolve()
            }, 1000)
        })
    }
    //上拉加载
    loadMoreData = () => {
        // 更新数据
        return new Promise(resolve => {
            this.timer = setTimeout(() => {
                if (Math.random() > 0) {
                    // 如果有新数据
                   this.props.getList()
                }
                resolve()
            }, 1000)
        })
    }

}

export default connect((state) => {
    return {
        list: state.list
    }
}, (dispatch) => {
    return {
        getList: () => { dispatch({ type: 'GET_LIST' }) }
    }
})(Reying);