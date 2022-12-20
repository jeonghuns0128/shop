import {Carousel, ListGroup} from 'react-bootstrap'

import {GrDeliver} from 'react-icons/gr'
import {RiCoupon3Line} from 'react-icons/ri'
import {BiWallet} from 'react-icons/bi'
import {HiOutlineChat} from 'react-icons/hi'


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

export { MypageMiddleMenu, IndividualIntervalsMyPage, FlushMyPage}