import { Navbar,  Container, Offcanvas, Nav, NavDropdown, Form, Button, Carousel, ListGroup, Card, CardGroup,Row, Col} from 'react-bootstrap'

import { CiTextAlignJustify } from 'react-icons/ci'
import { GiAmpleDress } from 'react-icons/gi'
import { FaDog } from 'react-icons/fa'
import { GiClothes, GiConverseShoe } from 'react-icons/gi'
import { BsCart4 } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { HistoryBack } from '../function/function'

function Header() {
  return (
    <>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand>도그박</Navbar.Brand>
          <div>
            <Navbar.Toggle style={{marginRight : "10px"}} aria-controls={`offcanvasNavbar-expand-${false}`} />
            <ImSearch style={{marginRight : "10px"}} size="35" />
            <BsCart4 style={{marginBottom : "5px"}} size="40" />
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${false}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

function TopMenu() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link eventKey="1" href="/">
          투데이
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" href="/brend">
          브랜드
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="/best">
          베스트
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" href="/buety">
          뷰티
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

function IndividualIntervals() {
  return (
    <Carousel style={{paddingTop : '10px'}}>
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
      <ListGroup.Item>
        <CiTextAlignJustify size="40" /> 전체
      </ListGroup.Item>
      <ListGroup.Item>
        <FaDog size="40" /> 애견
      </ListGroup.Item>
      <ListGroup.Item>
        <GiClothes size="40" onClick={() => {navigate('/clothes/top')}} /> 상의
      </ListGroup.Item>
      <ListGroup.Item>
        <GiAmpleDress onClick={() => {navigate('/clothes/bottom')}} size="40" /> 하의
      </ListGroup.Item>
      <ListGroup.Item>
        <GiConverseShoe onClick={() => {navigate('/clothes/shoes')}} size="40"/>신발
      </ListGroup.Item>
    </ListGroup>
  )
}

function CommonHeader(){
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

export { Header, TopMenu, IndividualIntervals, HorizontalCategory, CommonHeader, RecommendArea }
