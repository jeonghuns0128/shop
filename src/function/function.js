import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { Button, Modal} from 'react-bootstrap';
import { MdArrowForwardIos } from 'react-icons/md'
import { MypageMiddleMenu } from '../pages/bootstrap'


function HistoryBack(){

    const navigate = useNavigate();
    return (
        <>
            <MdArrowBackIosNew size='30' onClick={() => {navigate(-1)}} />
        </>
    )

}

function MyPage() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return (
        <>
        <div onClick={() => {handleShow(true)}}>
            <div style={{textAlign :'left'}}> 도그박 로그인 및 회원가입 </div>
            <div style={{textAlign :'left', fontSize : '13px'}}> 3초면 돼요. 더 편리한 도그박을 경험하세요. </div>  
        </div>
        {/* { loginMainModal == true ? <LoginMainModal SetLoginMainModal={SetLoginMainModal} /> : null} */}
        <MypageMiddleMenu />

        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton style={{border : 'none', marginRight : '330px'}}> 
          </Modal.Header>
          <LoginMainModal />
        </Modal>

        </>
    )
}

function LoginMainModal(){
    
    const CLIENT_ID = '58b5cdf9bd4f73d2bd0137e88df3ce48'
    const REDIRECT_URI = 'http://localhost:3000/oauth/kakao'
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div>
            <div style={{paddingTop : "70px", paddingBottom : "70px"}}>
                <img src="data:image/png;base64,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" />
                
            </div>
            <div style={{textAlign : 'center'}}>
                <a href={KAKAO_AUTH_URL}>
                    <img src={process.env.PUBLIC_URL + './kakao_login_medium_wide.png'} />
                </a>
            </div>
        </div>
    )
}

export {HistoryBack, MyPage}