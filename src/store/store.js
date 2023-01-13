import {configureStore, createSlice} from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'cart',
    //'상품명', '수량', '금액'
    initialState : [],
    reducers : {
        changeCartList(state, action){
            //state는 기존 initialState값
            //배열에 상품 추가해주고 리턴
            alert('장바구니에 담겼습니다.')
            state.push(action.payload)
        }
    }
})

let search = createSlice({
    name : 'search',
    //'상품명', '수량', '금액'
    initialState : [],
    reducers : {
        searchList(state, action){
            //state는 기존 initialState값
            //배열에 상품 추가해주고 리턴
            //state = Object.assign(action.payload)
            if(state.length === 0){
                state.push(action.payload)
            }else{
                state.pop()
                state.push(action.payload)
            }
        },
        searchListReset(state,action){
            if(state.length > 0){
                state.pop()
            }
        }
    }
})

export let {changeCartList} = cart.actions
export let {searchList, searchListReset} = search.actions

export default configureStore({

    reducer : {

        cart : cart.reducer,
        search : search.reducer
    }
})