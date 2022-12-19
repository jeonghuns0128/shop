import { useEffect, useState } from 'react'
import { BsCart4, BsCheckCircleFill } from 'react-icons/bs'
import { FaRegCircle } from 'react-icons/fa'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HistoryBack } from '../function/function'
import CloseButton from 'react-bootstrap/CloseButton';

function CartHeader(){
    return(
      <>
        <div className="wrapperTop" style={{textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden"}}>
          <div style={{width : '20%', float : 'left', paddingTop : '5px'}}>
            <HistoryBack />
          </div>
          <div style={{color : 'white', width : '60%', float : 'left', textAlign : 'center', paddingTop : '5px', fontSize : '20px'}}>장바구니</div>
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
    let [oneProductCnt, setOneProductCnt] = useState([1, 1])

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
        if(cartList.length === cnt){
          setIsSelectTot(true)
        } else{
          setIsSelectTot(false)
        }
      })
      console.log("cnt : " + cnt)
      setListCnt(cnt)
    },[isSelectOne])
    
    return(
      <div>
        <div style={{textAlign : 'left', width : '100%', height : '20px'}}>
          <div style={{width : '80%', float : 'left'}}>
            {isSelectTot === true ? <BsCheckCircleFill style={{marginLeft : '10px', marginRight : '10px'}} size="20px" onClick={()=>{
              setIsSelectTot(false)
              let copy = []
              cartList.map((a,i)=>{
                copy[i] = false
                if(cartList.length === (i+1))
                  setIsSelectOne(copy)
              })
              }} /> : <FaRegCircle style={{marginLeft : '10px', marginRight : '10px'}} size="20px" onClick={()=>{
                setIsSelectTot(true)
                let copy = []
                cartList.map((a,i)=>{
                  copy[i] = true
                  if(cartList.length === (i+1))
                    setIsSelectOne(copy)
                })
                }}/>}
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

              <div style={{width : '100%'}}>
                <div style={{textAlign : 'left', width : '10%', float : 'left'}}>
                  {isSelectOne[i] === true ? <BsCheckCircleFill style={{marginLeft : '10px'}} size="20px" onClick={() => {
                    let copy = [...isSelectOne]
                    copy[i] = !isSelectOne[i]
                    setIsSelectOne(copy)
                  }} /> : <FaRegCircle style={{marginLeft : '10px', marginRight : '10px'}} size="20px" onClick={()=>{
                    let copy = [...isSelectOne]
                    copy[i] = !isSelectOne[i]
                    setIsSelectOne(copy)
                  }}/>}
                </div>

                <div style={{width : '90%', float : 'left'}}>
                  <div style={{width : '100%'}}>
                    <div style={{width : '20%', float : 'left'}}>사진</div>
                    <div style={{width : '70%', float : 'left'}}>{cartList[i].title}</div>
                    <div style={{width : '10%', float : 'left'}}><CloseButton /></div>
                  </div>
                  <div style={{textAlign : 'left'}}>배송비 무료 상품</div>
                  <div>
                    <div style={{textAlign : 'left', width :'80%', float : 'left'}}>
                      <AiOutlineMinus  onClick={() => {
                        let copy = [...oneProductCnt]
                        if (copy[i] > 1){
                          console.log('-')
                          copy[i] = copy[i] - 1
                          setOneProductCnt(copy)  
                        }
                      }} />
                      <input style={{width : '35px'}} value = {oneProductCnt[i]}/>
                      <AiOutlinePlus onClick={() => {
                        let copy = [...oneProductCnt]
                        copy[i] = copy[i] + 1
                        setOneProductCnt(copy)
                      }} />
                    </div>
                    <div style={{width : '20%', float : 'left'}}>{cartList[i].price}</div>
                  </div>
                  <div>
                    <div style={{textAlign : 'left', width :'80%', float : 'left'}}>배송비</div>
                    <div style={{width : '20%', float : 'left'}}>무료</div>
                  </div>
                  <div>
                    <div style={{textAlign : 'left', width :'80%', float : 'left'}}>총 결제금액</div>
                    <div style={{width : '20%', float : 'left'}}>{cartList[i].price}</div>
                  </div>
                </div>   
                <div style={{width : '90%', float : 'left'}}>
                  <div style={{width : '50%', float : 'left'}}>
                    <button>바로구매</button>
                  </div>
                  <div style={{width : '50%', float : 'left'}}>
                    <button>상품 추가</button>
                  </div>
                </div>
              </div>

              <hr/>
            </>
          )
        })
        }
        <div style={{width : '100%'}}>
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