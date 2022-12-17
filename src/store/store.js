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

export let {changeCartList} = cart.actions

export default configureStore({

    reducer : {

        cart : cart.reducer
    }
})