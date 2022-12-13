import { Navbar,  Container, Offcanvas, Nav, NavDropdown, Form, Button, Carousel, ListGroup, Card, CardGroup,Row, Col} from 'react-bootstrap'

import { CiTextAlignJustify } from 'react-icons/ci'
import { GiAmpleDress } from 'react-icons/gi'
import { FaDog, FaStore, FaCompass, FaHeart, FaUserCircle } from 'react-icons/fa'
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

function Header() {
  // return (
  //   <>
  //     <Navbar key={false} bg="light" expand={false} className="mb-3" style={{position: 'fixed', top: '0', left: '0', right: '0', height: '60px', display : 'block'}}>
  //       <Container fluid>
  //         <Navbar.Brand>도그박</Navbar.Brand>
  //         <div>
  //           <Navbar.Toggle style={{marginRight : "10px"}} aria-controls={`offcanvasNavbar-expand-${false}`} />
  //           <ImSearch style={{marginRight : "10px"}} size="35" />
  //           <BsCart4 style={{marginBottom : "5px"}} size="40" />
  //         </div>
  //         <Navbar.Offcanvas
  //           id={`offcanvasNavbar-expand-${false}`}
  //           aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
  //           placement="end"
  //         >
  //           <Offcanvas.Header closeButton>
  //             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
  //               Offcanvas
  //             </Offcanvas.Title>
  //           </Offcanvas.Header>
  //           <Offcanvas.Body>
  //             <Nav className="justify-content-end flex-grow-1 pe-3">
  //               <Nav.Link href="#action1">Home</Nav.Link>
  //               <Nav.Link href="#action2">Link</Nav.Link>
  //               <NavDropdown
  //                 title="Dropdown"
  //                 id={`offcanvasNavbarDropdown-expand-${false}`}
  //               >
  //                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
  //                 <NavDropdown.Item href="#action4">
  //                   Another action
  //                 </NavDropdown.Item>
  //                 <NavDropdown.Divider />
  //                 <NavDropdown.Item href="#action5">
  //                   Something else here
  //                 </NavDropdown.Item>
  //               </NavDropdown>
  //             </Nav>
  //             <Form className="d-flex">
  //               <Form.Control
  //                 type="search"
  //                 placeholder="Search"
  //                 className="me-2"
  //                 aria-label="Search"
  //               />
  //               <Button variant="outline-success">Search</Button>
  //             </Form>
  //           </Offcanvas.Body>
  //         </Navbar.Offcanvas>
  //       </Container>
  //     </Navbar>
  //   </>
  // )
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
        <BsCart4 size="35px" style={{marginBottom : '5px'}} />
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

function IndividualIntervalsMyPage() {
  return (
    <div style={{paddingTop : '150px'}}>
    <Carousel style={{paddingTop : '10px'}}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://static.coupangcdn.com/ca/cmg_paperboy/image/1669790279692/221130_C0_%EB%A1%9C%EC%BC%93%EB%B0%B0%EC%86%A1_SMD-23343.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://static.coupangcdn.com/ea/cmg_paperboy/image/1670257722514/C0_1213_%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3_%E1%84%8B%E1%85%A1%E1%84%8E%E1%85%B5%E1%86%B7.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
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

function CommonHeaderDetail(){
  return(
    <>
      <div>
        <HistoryBack />
        
          <ImSearch style={{marginLeft : "250px", marginRight : '10px'}} size="35" />
          <BsCart4 style={{marginBottom : "5px"}} size="40" />
        
      </div>
    </>
  )
}

function CommonHeaderMain(){
  return(
    <>
      {/* <div style={{textAlign : "left", fontSize : "20px", marginTop : '10px', marginLeft : '10px'}}>마이페이지 */}
      <div className='wrapperTop' style={{backgroundColor : 'black', color : "white"}}>마이페이지
        <IoIosNotificationsOutline style={{marginLeft : "160px", marginRight : '7px', color : 'white'}} size="40" />
        <BsCart4 style={{marginBottom : "5px", color : "white"}} size="40" />

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

function BottomMenu(){
  const navigate = useNavigate()
  let [activeNav, setactiveNav] = useState()
  // let [grayCss, setGrayCss] = useState('nav-item active')
  // let [pinkCss, setPinkCss] = useState('active')
  let [itemCss1, setItemCss1] = useState(false)
  let [itemCss2, setItemCss2] = useState(false)
  let [itemCss3, setItemCss3] = useState(false)
  let [itemCss4, setItemCss4] = useState(false)
  let [itemCss5, setItemCss5] = useState(false)

  //useEffect 사용해야 하나? 수정필요

  useEffect(() => {
    if(activeNav == 0){
      setItemCss1(true)
      setItemCss2(false)
      setItemCss3(false)
      setItemCss4(false)
      setItemCss5(false)
    } else if(activeNav == 1){
      setItemCss1(false)
      setItemCss2(true)
      setItemCss3(false)
      setItemCss4(false)
      setItemCss5(false)
    } else if(activeNav == 2){
      setItemCss1(false)
      setItemCss2(false)
      setItemCss3(true)
      setItemCss4(false)
      setItemCss5(false)
    } else if(activeNav == 3){
      setItemCss1(false)
      setItemCss2(false)
      setItemCss3(false)
      setItemCss4(true)
      setItemCss5(false)
    } else if(activeNav == 4){
      setItemCss1(false)
      setItemCss2(false)
      setItemCss3(false)
      setItemCss4(false)
      setItemCss5(true)
    }

    console.log("activeNav : " + activeNav)
   }, [activeNav])

  return (
    <nav className="wrapper" style={{backgroundColor : 'black'}}>
      <div><AiTwotoneHome className={itemCss1 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(0); navigate('/'); }} /></div>
      <div><FaStore className={itemCss2 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(1)}}/></div>
      <div><FaCompass className={itemCss3 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(2)}}/></div>
      <div><FaHeart className={itemCss4 == true ? 'nav-item active' : 'nav-item'} size='30px'onClick={() => {setactiveNav(3)}}/></div>
      <div><FaUserCircle className={itemCss5 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(4); navigate('/mypage'); }}/></div>
    </nav>
  )
}

function MypageMiddleMenu(){
    return(
      <>
      <div>
        <div style={{paddingtop : '10px'}}>
          <div style={{paddingTop : '10px'
        ,float: "left"
        ,width: "25%"
        ,textAlign: "center"
      
        /* 세로길이 설정 */
        ,height: "45px"
        ,lineHeight: "45px"
        }}><GrDeliver size="40" ></GrDeliver><div style={{ fontSize : "13px"}}>주문º배송</div></div>
          <div style={{paddingTop : '10px'
        ,float: "left"
        ,width: "25%"
        ,textAlign: "center"
      
        /* 세로길이 설정 */
        ,height: "45px"
        ,lineHeight: "45px"
        }}><HiOutlineChat size="40" ></HiOutlineChat><div style={{ fontSize : "13px"}}>리뷰</div></div>
          <div style={{paddingTop : '10px'
        ,float: "left"
        ,width: "25%"
        ,textAlign: "center"
      
        /* 세로길이 설정 */
        ,height: "45px"
        ,lineHeight: "45px"
        }}><RiCoupon3Line size="40" ></RiCoupon3Line><div style={{ fontSize : "13px"}}>쿠폰</div></div>
          <div  style={{paddingTop : '10px'
        ,float: "left"
        ,width: "25%"
        ,textAlign: "center"
      
        /* 세로길이 설정 */
        ,height: "45px"
        ,lineHeight: "45px"
        }}><BiWallet size="40"></BiWallet><div style={{ fontSize : "13px", paddingBottom : '100px'}}>포인트</div></div>
        </div>
      </div>
      <div></div>
      </>
    )
}

function FlushMyPage() {
  return (
    <ListGroup variant="flush" style={{paddingTop : '10px', textAlign : 'left'}}>
      <ListGroup.Item>
        <div style={{fontSize : '13px', marginBottom : '10px'}}>쇼핑</div>
        <div>최근 본 상품</div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div style={{fontSize : '13px', marginBottom : '10px'}}>고객센터</div>
        <div>판매자 문의 내역</div>
        <div>FAQ</div>
        <div>공지사항</div>
        <div>문의 및 건의</div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div style={{fontSize : '13px', marginBottom : '10px'}}>리워드</div>
        <div>최대 673.350 포인트 모으기</div>
        <div>공유 리워드</div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div style={{fontSize : '13px', marginBottom : '10px'}}>에픽</div>
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
        <div>e'pick 프로필</div>        
      </ListGroup.Item>
    </ListGroup>
  );
}

export { Header, TopMenu, IndividualIntervals, HorizontalCategory, CommonHeaderDetail, RecommendArea, BottomMenu, CommonHeaderMain, MypageMiddleMenu, IndividualIntervalsMyPage, FlushMyPage }

