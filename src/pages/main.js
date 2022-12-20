import { Navbar,  Container, Offcanvas, Nav, NavDropdown, Form, Button, Carousel, ListGroup, Card, CardGroup,Row, Col} from 'react-bootstrap'

import { CiTextAlignJustify } from 'react-icons/ci'
import { GiAmpleDress } from 'react-icons/gi'
import { FaDog, FaStore, FaCompass, FaHeart, FaUserCircle, FaClipboard } from 'react-icons/fa'
import { GiClothes, GiConverseShoe } from 'react-icons/gi'
import { BsCart4 } from 'react-icons/bs'
import { AiTwotoneHome } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import {GrDeliver} from 'react-icons/gr'
import {HiOutlineChat} from 'react-icons/hi'
import {RiCoupon3Line} from 'react-icons/ri'
import {BiWallet} from 'react-icons/bi'


import { ImSearch } from 'react-icons/im'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { HistoryBack } from '../function/function'
import '../css/bootstrap.css'
import { useState, useEffect } from 'react'

function MainHeader() {

  const navigate = useNavigate()

  return (
    <nav className="wrapperTop" style={{backgroundColor : 'black', overflow: "hidden"}}>
      <div style={{float: "left", width : "30%", textAlign : 'center', height : "45px"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUyPlAh5FynvdTYZRVvSGLnlNHq60JbAdmKg--nGQ9xrmxnIJR5Cs4O4xCxbIt6l086A&usqp=CAU" style={{width : '100%', height : '100%', backgroundColor : 'gray'}} />
      </div>
      <div style={{width : '30%'}}></div>
      <div style={{float: "left", width : "20%", textAlign : 'center', height : "45px", lineHeight : "45px", color : 'white', paddingLeft : '50px'}}>
        <ImSearch size="30px" />
      </div>
      <div style={{float: "left", width : "20%", textAlign : 'center', height : "45px", lineHeight : "45px", color : 'white'}}>
        <BsCart4 onClick={() => {navigate('/cart')}} size="35px" style={{marginBottom : '5px'}} />
      </div>
    </nav>
  )
}

function TopMenu() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link style={{color : 'black'}} eventKey="1" href="/">
          투데이
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color : 'black'}} eventKey="2" href="/brend">
          브랜드
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color : 'black'}} eventKey="3" href="/best">
          베스트
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color : 'black'}} eventKey="4" href="/buety">
          뷰티
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

function IndividualIntervals() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://contents.kyobobook.co.kr/pmtn/2022/event/d8f9f1ea49984d999f164427fbe65480.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://contents.kyobobook.co.kr/pmtn/2022/event/0425c81c0a5c4a5492f951868d1c80ea.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://contents.kyobobook.co.kr/pmtn/2022/event/8386bdfb34fb463690404d9cde8f15c0.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}



function HorizontalCategory() {
  const navigate = useNavigate()
  return (
    <ListGroup horizontal style={{paddingTop : '10px'}}>
      <ListGroup.Item style={{borderRight : 'none', borderLeft : 'none'}}>
        <CiTextAlignJustify size="40"/> 전체
      </ListGroup.Item>
      <ListGroup.Item style={{borderRight : 'none', borderLeft : 'none'}}>
        <FaDog size="40" /> 애견
      </ListGroup.Item>
      <ListGroup.Item style={{borderRight : 'none', borderLeft : 'none'}}>
        <GiClothes size="40" onClick={() => {navigate('/clothes/top')}} /> 상의
      </ListGroup.Item>
      <ListGroup.Item style={{borderRight : 'none', borderLeft : 'none'}}>
        <GiAmpleDress onClick={() => {navigate('/clothes/bottom')}} size="40" /> 하의
      </ListGroup.Item>
      <ListGroup.Item style={{borderRight : 'none', borderLeft : 'none'}}>
        <GiConverseShoe onClick={() => {navigate('/clothes/shoes')}} size="40"/>신발
      </ListGroup.Item>
    </ListGroup>
  )
}

function CommonHeaderMain(){

  const navigate = useNavigate()

  return(
    <>
      {/* <div style={{textAlign : "left", fontSize : "20px", marginTop : '10px', marginLeft : '10px'}}>마이페이지 */}
      <div className='wrapperTop' style={{backgroundColor : 'black', color : "white", fontSize : '20px', paddingTop : '5px'}}>마이페이지
        <IoIosNotificationsOutline style={{marginLeft : "160px", marginRight : '7px', color : 'white'}} size="40" />
        <BsCart4 onClick={()=>{navigate('/cart')}} style={{marginBottom : "5px", color : "white"}} size="40" />

        {/* <div style={{float: "left", width : "30%", textAlign : 'center', height : "45px"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUyPlAh5FynvdTYZRVvSGLnlNHq60JbAdmKg--nGQ9xrmxnIJR5Cs4O4xCxbIt6l086A&usqp=CAU" style={{width : '100%', height : '100%', backgroundColor : 'gray'}} />
        </div>
        <div style={{width : '30%'}}></div>
        <div style={{float: "left", width : "20%", textAlign : 'center', height : "45px", lineHeight : "45px", color : 'white', paddingLeft : '50px'}}>
          <ImSearch size="30px" />
        </div>
        <div style={{float: "left", width : "20%", textAlign : 'center', height : "45px", lineHeight : "45px", color : 'white'}}>
          <BsCart4 size="35px" style={{marginBottom : '5px'}} />
        </div> */}

      </div>
    </>
  )
}

function RecommendArea(){
  return(
    <Container style={{marginTop : '10px'}}>
      <Row>
        <Col style={{paddingLeft : '2px', paddingRight : '2px'}}>
          <Card>
            <Card.Img src="http://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8311476%2F83114765936.jpg&type=f372_372" />
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '14px'}}>바잉몰</div>
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '12px'}}>[HONEST, YOU] 아..</div>
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '18px'}}>25,000</div>
          </Card>
        </Col>
        <Col style={{paddingLeft : '2px', paddingRight : '2px'}}>
          <Card>
            <Card.Img src="http://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8470200%2F84702007640.jpg&type=f372_372" />
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '14px'}}>트렌디어패럴</div>
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '12px'}}>♥주문폭주♥ mix..</div>
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '18px'}}>34,000</div>
          </Card>
        </Col>
        <Col style={{paddingLeft : '2px', paddingRight : '2px'}}>
          <Card>
            <Card.Img src="http://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8299192%2F82991926334.jpg&type=f372_372" />
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '14px'}}>어텀뮤트</div>
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '12px'}}>나이키브랜드</div>
            <div style={{textAlign : 'left', paddingLeft : '4px', fontSize : '18px'}}>17,000</div>
          </Card>
        </Col>
      </Row>
    </Container>

    
    // <CardGroup style={{margin : 'auto'}}>
      // <Card style={{height : '100px', width : '100px', margin : '10px'}}>
      //   <Card.Img style={{height : '200px'}} src="http://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8311476%2F83114765936.jpg&type=f372_372" />
      //   <Card.Body>
      //     <Card.Title>test</Card.Title>
      //     <Card.Text>
      //       test2
      //     </Card.Text>
      //   </Card.Body>
      //   <Card.Footer>
      //   <small className="text-muted">Last updated 3 mins ago</small>
      //   </Card.Footer>
      // </Card>
    //   <Card style={{height : '100px', width : '100px'}}>
    //     <Card.Img variant="top" style={{height : '200px'}} src="http://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8311476%2F83114765936.jpg&type=f372_372" />
    //     <Card.Body>
    //       <Card.Title>test</Card.Title>
    //       <Card.Text>
    //         test2
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //     <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card style={{height : '100px', width : '100px'}}>
    //     <Card.Img variant="top" src="http://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8311476%2F83114765936.jpg&type=f372_372" />
    //     <Card.Body>
    //       <Card.Title>test</Card.Title>
    //       <Card.Text>
    //         test2
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //     <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>
  )
}

export { MainHeader, TopMenu, IndividualIntervals, HorizontalCategory, RecommendArea, CommonHeaderMain}

