import { useEffect, useState } from 'react'
import { BsCart4, BsCheckCircleFill } from 'react-icons/bs'
import { FaRegCircle } from 'react-icons/fa'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HistoryBack } from '../function/function'

function CartHeader(){
    return(
      <>
        <div style={{textAlign : 'left', height : '50px'}}>
          <HistoryBack /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장바구니
        </div>
      </>
    )
  }
  
  function CartMain(){
  
    let cartList = useSelector((state)=>{return state.cart})

    console.log("cartList : " + cartList)
    // console.log("cartList : " + cartList[0].title)
    // console.log("cartList : " + cartList[0].price)
    console.log("test : " + Object.keys(cartList).length)
    return(
      <>
      {
        ( cartList == "" || cartList == null || cartList == undefined || ( cartList != null && typeof value == "object" && !Object.keys(cartList).length )) ? 
        <CartEmpty /> : <CartDetail />
      }
      </>
    )
    

    
  
  }

  function CartDetail(){
    let cartList = useSelector((state)=>{return state.cart})
    let [isSelectTot, setIsSelectTot] = useState(true)
    let [isSelectOne, setIsSelectOne] = useState([])
    let [listCnt, setListCnt] = useState(cartList.length)

    useEffect(() => {
      let copy = []
      cartList.map((a,i)=>{
        copy[i] = true
        if(cartList.length === (i+1))
          setIsSelectOne(copy)
      })
      console.log("tot!!!")
    },[])

    useEffect(() => {
      let cnt = 0
      console.log("listCnt : " + listCnt)
      cartList.map((a,i) => {
        if(isSelectOne[i] === true){
          cnt = cnt +  1
        }
      })
      console.log("cnt : " + cnt)
      setListCnt(cnt)
    },[isSelectOne])
    
    return(
      <div>
        <div style={{textAlign : 'left', width : '100%', height : '20px'}}>
          <div style={{width : '80%', float : 'left'}}>
            {isSelectTot === true ? <BsCheckCircleFill style={{marginLeft : '10px', marginRight : '10px'}} size="20px" onClick={()=>{setIsSelectTot(false)}} /> : <FaRegCircle style={{marginLeft : '10px', marginRight : '10px'}} size="20px" onClick={()=>{setIsSelectTot(true)}}/>}
            전체선택 ( {listCnt}/{cartList.length} )</div>
          <div style={{width : '20%', float : 'left'}}><a onClick={()=>{alert('상품을 삭제하시겠습니까?')}}>상품삭제</a></div>
        </div>
        <hr style={{width : '100%', marginTop : '10px'}}/> 
        { 
        cartList.map((a,i)=>{
          return(
            <>
              <div style={{textAlign : 'left', width : '100%'}}>
                <div style={{width : '80%', float : 'left'}}> 
                로라로라
                </div>
                <div style={{width : '20%', float : 'left'}}><a onClick={()=>{alert('쿠폰을 받으시겠습니까?')}}>쿠폰받기 </a></div>
              </div>
              
              <hr style={{width : '100%', marginTop : '10px'}}/> 

              <div style={{textAlign : 'left'}}>
                {isSelectOne[i] === true ? <BsCheckCircleFill style={{marginLeft : '10px'}} size="20px" onClick={() => {
                  let copy = [...isSelectOne]
                  copy[i] = !isSelectOne[i]
                  setIsSelectOne(copy)
                }} /> : <FaRegCircle style={{marginLeft : '10px', marginRight : '10px'}} size="20px" onClick={()=>{
                  let copy = [...isSelectOne]
                  copy[i] = !isSelectOne[i]
                  setIsSelectOne(copy)
                }}/>}
                 : {cartList[i].title}
              </div>
              <div>결제금액 : {cartList[i].price} </div>
              <button>바로구매</button> <button>상품 추가</button>
              <hr/>
            </>
          )
        })
        }
        <div>
          <div>총 상품금액</div>
          <div>총 배송비</div>
          <div>총 결제예상금액</div>
        </div>
      </div>
    )
  }

  function CartEmpty(){
    const navigare = useNavigate()
    return(
      <div>
          <div style={{height : '400px', textAlign : 'center', paddingTop : '150px'}}><BsCart4 size="100px"/></div>           
          <div>
            <h5>장바구니에 담긴 상품이 없어요</h5>
            <div>원하는 상품을 담아보세요</div>
            <div><button onClick={()=>{navigare('/')}}>상품 보러 가기</button></div>
          </div>
        </div>
    )
  }

  export { CartHeader, CartMain }