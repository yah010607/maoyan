import { createStore } from 'redux'
import list from '../data/list.json'

let reduces = (state = { list: list, obj: {}, arr: [], page: 1, pageNum: 5 }, action) => {
    let newstate = { ...state, arr: [...state.arr], list: [...state.list] }

    switch (action.type) {
        //跳详情
        case 'XQ': newstate.obj = newstate.list.find(item => item.id == action.id)
            return newstate
            
        //模糊搜索
        case 'SOUSUO': {
            if (action.val) {
                newstate.arr = newstate.list.filter(item => item.nm.includes(action.val))
            } else {
                newstate.arr = []
            }
            return newstate
        }

        //上拉加载时，加载的数据   用截取的方法返回数据
        case 'GET_LIST': {
            if (newstate.page < 4) {
                let start = (newstate.page - 1) * newstate.pageNum
                let end = newstate.page * newstate.pageNum
                let data = newstate.list.slice(start, end)
                newstate.list = newstate.list.concat(data)
                newstate.page++
            }

            return newstate
        }
        default: return newstate
    }
}

let store = createStore(reduces)

export default store
