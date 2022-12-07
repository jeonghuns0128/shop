import './App.css'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react'
import data from './data.js'
import { ProductList, DetailPage } from './pages/productList'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import {
  Header,
  TopMenu,
  IndividualIntervals,
  HorizontalCategory,
  CardList,
} from './pages/bootstrap.js'
import { HistoryBack } from './function/function'

function App() {
  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate()

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <TopMenu />
            <IndividualIntervals />
            <HorizontalCategory />
           </>
        }
        />
        
        <Route path="/clothes" element={<div><div> <HistoryBack /> 의류 페이지</div><Outlet></Outlet></div>}>
          <Route path="top" element={<div>상의 페이지</div>}>
          </Route>
          <Route path="bottom" element={<div>하의 페이지</div>}>
          </Route>
          <Route path="shoes" element={<div><div>신발 페이지</div>
            <ProductList />
          {/* <Outlet></Outlet> */}
          </div>
        }>
            {/* <Route path=":id" element={<DetailPage shoes={shoes} />} /> */}
          </Route>


          {/* <Route path="/detail" element={
              <div>
                <div>
                  <h3>상품 상세페이지</h3>
                </div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route path="shoes/:id" element={<DetailPage shoes={shoes} />} />
            <Route path="top" element={<p>상의\</p>} />
            <Route path="bottom" element={<p>하의\</p>} />
          </Route> */}
        </Route>

        <Route path="/clothes/shoes/:id" element={
          <>
            <HistoryBack />
            <DetailPage/>
          </>}></Route>

        <Route path="/about" element={
            <div>
              about페이지 <Outlet></Outlet>
            </div>
          }
        >
          <Route path="member" element={<div>member페이지</div>} />
          <Route path="location" element={<div>location페이지</div>} />
        </Route>

        <Route path="/event" element={
            <div>
              <h3>오늘의 이벤트 </h3>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스\</p>} />
          <Route path="two" element={<p>생일기념 쿠폰 받기\</p>} />
        </Route>

        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  )
}

export default App
