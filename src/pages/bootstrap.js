import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
  Carousel,
  ListGroup,
  Card,
} from 'react-bootstrap'

import { CiTextAlignJustify } from 'react-icons/ci'
import { GiAmpleDress } from 'react-icons/gi'
import { FaDog } from 'react-icons/fa'
import { GiClothes, GiConverseShoe } from 'react-icons/gi'
import { BsGithub } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand>도그박</Navbar.Brand>
          <ImSearch size="30" />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
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
    <ListGroup horizontal>
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

function CardList() {
  return (
    <>
      <Card style={{ width: '10' }}>
        <Card.Img variant="top" src="./shoes1.jpg" />
      </Card>
    </>
  )
}

export { Header, TopMenu, IndividualIntervals, HorizontalCategory, CardList }
