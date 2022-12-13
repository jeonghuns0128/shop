import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown, Nav, Card, Row, Col, CardGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate, Route, Routes } from 'react-router-dom'

function ProductList(props) {
//       <img src={process.env.PUBLIC_URL + './shoes' + num + '.jpg'}
    let [product, setProduct] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/clothes/shoes/').then((result) => {
        console.log('front : ' + result.data)
        setProduct(result.data)
        })
        .catch(() => {
            console.log('실패')
        })
    }, [])

    console.log("product : " + product);

    return (
        <div>
            <CardGroup>
                {product && product.map(product => {
                    return(
                    <Card onClick={() => {navigate('/clothes/shoes/' + product.id)}}>
                        <Card.Img variant="top" style={{height : '200px'}} src={product.img_url} />
                        <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.content}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    )
                })}
            </CardGroup>            
        </div>
    )
}

function DivPage() {
  return <div className="alert alert-warning">2초 이내 구매시 할인</div>
}

function DetailPage(props) {
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

   
    return (
        <>
         {product && product.map(product => { 
            return(
            <div className="container">
                <div className="row">
                    {isColesd == true ? <DivPage /> : null}
                    <div className="col-md-6">
                        <img src={product.img_url} width="100%"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{product.title}</h4>
                        <p>{product.content}</p>
                        <p>{product.price}원</p>
                        
                        <input onChange={(e) => { setInputData(e.target.value) }}/>{' '}
                        <button className="btn btn-danger">주문하기</button>
                        <div>{inputData}</div>
                    </div>
                </div>
            
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTapChange(0)}} eventKey="link-0">상세정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTapChange(1)}} eventKey="link-1">리뷰</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTapChange(2)}} eventKey="link-2">Q&A</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTapChange(3)}} eventKey="link-3">반품/교환정보</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                {/* <TabComponent tabChange={tabChange} detailInfo={detailInfo} /> */}
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

export { ProductList, DetailPage }