import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DropdownButton, Dropdown, Nav, Card, Row, Col, CardGroup } from 'react-bootstrap'
import { RxShare2 } from 'react-icons/rx'
import { AiFillStar } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'

import Button from 'react-bootstrap/Button';
import '../css/bootstrap.css'
import {changeCartList} from '../store/store.js'

function DivPage() {
    return <div className="alert alert-warning">2초 이내 구매시 할인</div>
  }
  
  function DetailPage(props) {
  
    let dispatch = useDispatch()    
    let [inputData, setInputData] = useState('')
    let [tabChange, setTapChange] = useState(0)

    useEffect(() => {
      let timer = setTimeout(() => {
        setIsColsed(false)
        //console.log('2초 후 : ' + isColesd);
      }, 2000)
      //console.log('2');
  
      if (inputData != '' && isNaN(inputData)) {
        alert('숫자만 입력하세요!')
      }
  
      return () => {
        //console.log('1');
        clearTimeout(timer)
      }
  
      //    아래 return은 useEffect 실행 전 동작하게 하고 싶을 때 사용
      //    return () => {
      //     코드실행~~ (타이머 실행 시 기존 타이머 제거)
      //    }
    }, [inputData])
  
    let [product, setProduct] = useState('')
    let [isColesd, setIsColsed] = useState(true)
    //console.log('처음 : ' + isColesd);
  
    let { id } = useParams()
    console.log("id : " + id);
    //console.log("props : " + props.shoes[id]);
    
    useEffect(() => {
      axios.get('http://localhost:3000/clothes/shoes/' + id).then((result) => {
      console.log('front : ' + result.data)
      setProduct(result.data)
      })
      .catch(() => {
          console.log('실패')
      })
      }, [])
      
    
      const modalEl = useRef(); // 
      const [isOpend, setIsOpend] = useState(false);
      
      const handleClickOutside = ({ target }) => {
          if (isOpend && !modalEl.current.contains(target)) setIsOpend(false);
          console.log("isopen : " + isOpend)
        };
      
      useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
          window.removeEventListener("click", handleClickOutside);
        };
      }, []);
     
      return (
          <>
           {product && product.map(product => { 
              return(
              <div className="container">
                  <div className="row">
                      {/* {isColesd == true ? <DivPage /> : null} */}
                      <div className="col-md-6">
                          <img src={product.img_url} width="100%"/>
                      </div>
                      <div className="col-md-6">
                          <div style={{width : '100%'}}>
                              <div style={{width : '90%', float : 'left', textAlign : 'left'}}>{product.content}</div>
                              <div style={{width : '10%', float : 'left'}}><RxShare2 size='30px' /></div>
                          </div>
                          <h4 className="pt-5" style={{textAlign : 'left'}}>{product.title}</h4>
                          <div style={{width : '100%', height : '30px'}}>
                              <div style={{textAlign : 'left', color : 'orange', float : 'left'}}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                              <div style={{textAlign : 'left', float : 'left'}}>리뷰 154개</div>
                          </div>
                          <div style={{width : '100%'}}>
                              <div style={{textAlign : 'left',color : 'pink', float : 'left', fontSize : '20px', marginRight : '10px'}}>10%</div>
                              <div style={{textAlign : 'left', float : 'left', fontSize : '20px'}}>{product.price}원</div>
                          </div>
  
                          {/* <div style={{width : '100%'}}>
                              <div style={{width : '40%', float : 'left'}}>
                                  <input onChange={(e) => { setInputData(e.target.value) }}/>{' '}
                              </div>
                              <div style={{width : '30%', float : 'left'}}>
                              <button className="btn btn-danger">주문하기</button>
                              </div>
                              <div style={{width : '30%', float : 'left'}}>
                              <button className="btn btn-danger" onClick={() => {
                                  dispatch(changeCartList(product))
                              }}>장바구니담기</button>
                              </div>
                          </div> */}
                          <div>{inputData}</div>
                      </div>
                  </div>
              
                  <Nav justify variant="tabs" defaultActiveKey="/home" style={{marginTop : '10px'}}>
                      <Nav.Item>
                          <Nav.Link onClick={() => {setTapChange(0)}} eventKey="link-0" style={{fontSize : '13px'}}>상품정보</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link onClick={() => {setTapChange(1)}} eventKey="link-1" style={{fontSize : '13px'}}>리뷰</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link onClick={() => {setTapChange(2)}} eventKey="link-2" style={{fontSize : '13px'}}>추천</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link onClick={() => {setTapChange(3)}} eventKey="link-3" style={{fontSize : '13px'}}>문의</Nav.Link>
                      </Nav.Item>
                  </Nav>
                  <div style={{color : 'black'}}>{product.detail_info}</div>
                  <DetailBottom isOpend={isOpend} setIsOpend={setIsOpend}/>
                  {/* <TabComponent tabChange={tabChange} detailInfo={detailInfo} /> */}
                  {/* { isOpend === true ? <ModalOptionSelect ref={modalEl} /> : null} */}
                  { isOpend && <ModalOptionSelect ref={modalEl} product={product} isOpend={isOpend} setIsOpend={setIsOpend}/>}
              </div> )
          })}
      </>
      )
      
  
  //   if (typeof props.product[id] != 'undefined') {
  //     if (id == props.product[id].id) {
  //       return (
  //         <div className="container">
  //           <div className="row">
  //             {isColesd == true ? <DivPage /> : null}
  //             <div className="col-md-6">
  //               <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
  //             </div>
  //             <div className="col-md-6">
  //               <h4 className="pt-5">{props.product[id].title}</h4>
  //               <p>{props.product[id].content}</p>
  //               <p>{props.product[id].price}원</p>
  //               <input
  //                 onChange={(e) => {
  //                   setInputData(e.target.value)
  //                 }}
  //               />{' '}
  //               <button className="btn btn-danger">주문하기</button>
  //               <div>{inputData}</div>
  //             </div>
  //           </div>
  
  //           <Nav justify variant="tabs" defaultActiveKey="/home">
  //             <Nav.Item>
  //               <Nav.Link onClick={() => {setTapChange(0)}} eventKey="link-0">상세정보</Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item>
  //               <Nav.Link onClick={() => {setTapChange(1)}} eventKey="link-1">리뷰</Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item>
  //               <Nav.Link onClick={() => {setTapChange(2)}} eventKey="link-2">Q&A</Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item>
  //               <Nav.Link onClick={() => {setTapChange(3)}} eventKey="link-3">반품/교환정보</Nav.Link>
  //             </Nav.Item>
  //           </Nav>
  //           <TabComponent tabChange={tabChange} detailInfo={detailInfo} />
  //         </div>
  //       )
  //     } else {
  //       return <div>실패</div>
  //     }
  //   } else {
  //     return <div>실패</div>
  //   }
  }
  
  function TabComponent(props) {
    return [
      <div>{props.detailInfo}</div>,
      <div>2번내용</div>,
      <div>3번내용</div>,
      <div>4번내용</div>,
    ][props.tabChange]
  }

  function DetailBottom(props){
    return(
        <div style={{width : '100%', height : '65px', marginLeft : '12px', marginRight : '12px', marginTop : '5px', marginBottom : '10px'}}>
            <div style={{width : '20%', height : '65px', float : 'left', display : 'flex', justifyContent : 'center', alignItems : 'center', fontSize : '15px'}}>
                <AiFillStar style={{color : 'orange'}} /> 리뷰(16)
            </div>
            <div style={{width : '10%', height : '65px', float : 'left', textAlign : 'center', display : 'flex', justifyContent : 'center', alignItems : 'center', paddingLeft : '13px'}}><FiHeart size='25px' /></div>
            <div style={{width : '70%', height : '65px', float : 'left', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><BuyButton style={{width : '80px'}} isOpend = {props.isOpend} setIsOpend={props.setIsOpend} /></div>
        </div>
    )
  }

  function BuyButton(props) {

    return (
      <div>
        <div className="d-grid gap-2"  >
            <Button variant="primary" size="lg" style={{backgroundColor : 'pink', width : '200px'}} onClick={()=>{
                props.setIsOpend(true)
            }}>구매하기</Button>
        </div>
      </div>
    );
  }

  function ModalOptionSelect(props) {
    
    let dispatch = useDispatch()    

    return (
        <div className='modal_purchase_background'>
            <div className='modal_purchase_box'>
                <div style={{textAlign : 'right', marginRight : '10px', marginTop : '10px'}} ><FiX onClick={() => {
                    props.setIsOpend(false)
                }} size="30px" /></div>
                <div style={{height : '5%', textAlign : 'center'}}>
                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width : '90%'}}>
                        옵션 선택
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div style={{height : '30%'}}>
                    <div>화이트XL(상의)</div>
                </div>
                
                <div style={{height : '20%'}}>
                    <div>
                        <div style={{width : '80%', float : 'left'}}>1개 상품 금액</div>
                        <div style={{width : '20%', float : 'left'}}>24,900원</div>
                    </div>
                    <div>
                        <div style={{width : '80%', float : 'left'}}>배송비</div>
                        <div style={{width : '20%', float : 'left'}}>무료배송</div>
                    </div>
                    
                    <div style={{width : '100%', float : 'left'}}  >
                        <div style={{width : '50%', float : 'left', textAlign : 'center'}}>
                            <Button variant="primary" size="lg" style={{backgroundColor : 'pink', width : '170px'}}>바로구매</Button>
                        </div>
                        <div style={{width : '50%', float : 'left', textAlign : 'center'}}>
                            <Button variant="primary" size="lg" style={{backgroundColor : 'pink', width : '170px'}} onClick={()=>{
                                dispatch(changeCartList(props.product))
                            }}>장바구니</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
  }
export {DivPage, DetailPage, TabComponent, DetailBottom}