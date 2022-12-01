import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import {ProductList,DetailPage,Header} from './pages/productList';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {


  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">도그박</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">투데이</Nav.Link>
            <Nav.Link href="/detail">브랜드</Nav.Link>
            <Nav.Link href="#pricing">베스트</Nav.Link>
            <Header />
          </Nav>
        </Container>
      </Navbar>
      
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
        <div>
          <div className="main-bg"></div>

          <div className="container">
            <div className="row">
              {
                shoes.map(function(a,i){
                  return(
                    
                    <ProductList shoes={shoes} i={i}/>
                    
                  )
                })
              }          
            </div>
          </div>
        </div>
        } />
        
        <Route path="/detail" element={<div><DetailPage /></div>} />
        
        <Route path="/about" element={<div>about페이지 <Outlet></Outlet></div>}>
          <Route path="member" element={<div>member페이지</div>} />
          <Route path="location" element={<div>location페이지</div>} />  
        </Route>

        <Route path="/event" element={<div><h3>오늘의 이벤트 </h3><Outlet></Outlet></div>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스\</p>} />
          <Route path="two" element={<p>생일기념 쿠폰 받기\</p>} />
        </Route>

        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
        
      </Routes>


      
    </div>
  );
}

export default App;
