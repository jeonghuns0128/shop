import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown, Nav, Card, Row, Col, CardGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate, Route, Routes } from 'react-router-dom'
import {changeCartList} from '../store/store.js'
import { useDispatch, useSelector } from 'react-redux'
import { RxShare2 } from 'react-icons/rx'
import { AiFillStar } from 'react-icons/ai'


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
        <div style={{marginTop : '20px'}}>
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

function Test(){
    
}

export { ProductList, Test }
