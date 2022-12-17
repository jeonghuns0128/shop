import { BsCart4 } from 'react-icons/bs'
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

    return(
      <div>
        <div>전체선택 라인</div>
        { 
        cartList.map((a,i)=>{
          return(
            <>
              <div>상품리스트 : {cartList[i].title}</div>
              <div>결제금액 : {cartList[i].price} </div>
            </>
          )
        })}
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