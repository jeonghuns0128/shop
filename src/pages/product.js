import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown, Nav, Card, Row, Col, CardGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate, Route, Routes } from 'react-router-dom'
import {changeCartList} from '../store/store.js'
import { useDispatch, useSelector } from 'react-redux'
import { RxShare2 } from 'react-icons/rx'
import { AiFillStar, AiOutlineCheck } from 'react-icons/ai'


function ProductList(props) {
//       <img src={process.env.PUBLIC_URL + './shoes' + num + '.jpg'}

    let [product, setProduct] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/product/clothes/shoes/').then((result) => {
        console.log('front : ' + result.data)
        setProduct(result.data)
        })
        .catch(() => {
            console.log('실패')
        })
    }, [])

    console.log("product : " + product);

    return (
        <>
        <div style={{marginTop : '50px'}}>

        </div>
        <div style={{ width : '100%'}}>
            {product && product.map(product => {
                return(
                    <>
                    <div style={{width : '100%', height : '170px', marginBottom : '20px'}} onClick={() => {navigate('/product/clothes/shoes/' + product.id)}}>
                        <div style={{width : '150px', height : '170px', float : 'left'}}>
                            <img src={product.img_url} style={{maxWidth:'100%', maxHeight:'100%'}}/>
                        </div>
                        <div style={{height : '150px', textAlign : 'left'}}>
                            <div style={{paddingRight : '20px', marginBottom : '5px'}}>이소켈리 레드 리페어 세럼, 1개, 50ml</div>
                            <div>
                                <div style={{fontSize : '15px', color : 'red', float : 'left'}}>와우쿠폰할인가</div>
                                <div style={{float : 'left'}}>&nbsp;13%&nbsp;</div>
                                <div style={{textDecoration: 'line-through'}}>24,480원</div>
                            </div>
                            <div style={{marginBottom : '10px'}}>
                                <div style={{fontSize : '20px', color : 'red', float : 'left'}}>21,100원 </div>
                                <div style={{fontSize : '15px', color : 'red'}}>(10ml당 4,222원)</div>
                            </div>
                            <div style={{fontSize : '15px', color : 'green'}}>오늘(목) 도착 보장</div>
                            <div style={{fontSize : '15px'}}>
                                와우 혜택 적용 <AiOutlineCheck />
                            </div>
                            <div>
                                <div style={{color : 'orange', float : 'left'}}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                <div>&nbsp;(10)</div>
                            </div>
                        </div>                       
                    </div>
                    <hr />
                    </>
                )
            })}
        </div>
        </>


        // <div style={{marginTop : '20px'}}>
        //     <CardGroup>
        //         {product && product.map(product => {
        //             return(
        //             <Card onClick={() => {navigate('/product/clothes/shoes/' + product.id)}}>
        //                 <Card.Img variant="top" style={{height : '200px'}} src={product.img_url} />
        //                 <Card.Body>
        //                 <Card.Title>{product.title}</Card.Title>
        //                 <Card.Text>
        //                     {product.content}
        //                 </Card.Text>
        //                 </Card.Body>
        //                 <Card.Footer>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //                 </Card.Footer>
        //             </Card>
        //             )
        //         })}
        //     </CardGroup>            
        // </div>
    )
}

function Test(){

}

export { ProductList, Test }
