import {FloatingLabel, Form} from 'react-bootstrap'
import { HistoryBack } from '../function/function'
import { BsPencilSquare, BsChatTextFill,BsChatSquareText } from 'react-icons/bs'

import { AiOutlineEye } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function BoardMainList(){
    
    let [boardList, setBoardList] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/boards/').then((result) => {
        console.log('boards : ' + result.data)
        setBoardList(result.data)
        })
        .catch(() => {
            console.log('실패')
        })
    }, [])

    return(
        <div style={{marginTop : '55px', width : '100%'}}>
            {boardList && boardList.map(boardList => {
            return(
                <>
                <div>
                    <div style={{textAlign : 'left', height : '45px'}}>
                        <div style={{float : 'left', width : '10%', marginLeft : '10px', height : '40px'}}><BsChatTextFill size="30px"/></div>
                        <div style={{float : 'left', width : '80%', height : '40px'}}>
                            <div style={{textAlign : 'left', marginLeft : '10px', height : '20px'}}>
                                <div style={{float : 'left', fontSize : '13px', width : '25%'}}>{boardList.category}</div>
                                <div style={{fontSize : '11px', width : '80%', paddingTop : '1px'}}>4시간</div>
                            </div>
                            <div style={{textAlign : 'left', marginLeft : '10px', height : '20px'}}>
                                <div style={{float : 'left', fontSize : '13px', width : '25%'}}>{boardList.company}</div>
                                <div style={{fontSize : '11px', width : '80%', paddingTop : '1px'}}>{boardList.user_id}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign : 'left', width : '350px', height : '60px', marginTop : '-10px'}}>
                        <div style={{paddingLeft : '10px', fontSize : '21px', textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap', marginBottom : '5px'}}>{boardList.title}</div>
                        <div style={{paddingLeft : '10px', textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap'}}>{boardList.content}</div>
                    </div>
                    <div style={{width : '100%', marginTop : '13px'}}>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><FiHeart size="20px" /> {boardList.like_cnt}</div>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><BsChatSquareText size="20px" /> {boardList.review_cnt}</div>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><AiOutlineEye size="20px"/> {boardList.view_cnt}</div>
                    </div>
                    <hr style={{marginTop : '41px'}}/>
                </div>
                </>
            )
            })}
        </div>
    )
}

function BoardTop(){
    return(
      <>
        <div className="wrapperTop" style={{width:'100%', textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden"}}>
          <div style={{width : '20%', float : 'left', paddingTop : '5px'}}>
            <HistoryBack />
          </div>
          <div style={{color : 'white', width : '60%', float : 'left', textAlign : 'center', paddingTop : '5px', fontSize : '20px'}}>게시판</div>
        </div>
      </>
    )
  }

  function BoardWriteTop(){
    const navigate = useNavigate()
    return(
      <>
        <div className="wrapperTop" style={{textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden"}}>
          <div style={{width : '20%', color : 'white', float : 'left', textAlign : 'center', paddingTop : '10px', fontSize : '15px'}} onClick={() => {
            navigate(-1)
          }}>취소</div>
          <div style={{color : 'white', width : '60%', float : 'left', textAlign : 'center', paddingTop : '5px', fontSize : '20px'}}>게시판</div>
          <div style={{width : '20%', color : 'white', float : 'left', textAlign : 'center', paddingTop : '10px', fontSize : '15px'}}>
            <button type='submit' form='boardWrite'>등록</button>
          </div>
        </div>
      </>
    )
  }

function BoardWriteButton(){
    const navigate = useNavigate()
    return(
        <div style={{marginRight : '10px', position: "fixed", right: "0px", bottom: "50px"}}>
            <BsPencilSquare size="60px" onClick={() => {navigate('/board/write')}} />
        </div>
    )
} 

function BoardWrite() {
    return (
      <div style={{marginTop : '55px', width : '100%'}}>
        <form action={process.env.REACT_APP_API_URL + '/board/write' } method='POST' id='boardWrite'>
            <FloatingLabel
            controlId="title"
            name="title"
            id="title"
            label="제목"
            className="mb-3"
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" name="title" id="title"/>
            </FloatingLabel>
            <FloatingLabel controlId="content" id="content" label="내용" name="content">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '510px' }}
                    name="content"
                    id="content"
                />
            </FloatingLabel>
        </form>
      </div>
    );
  }

export {BoardMainList, BoardTop, BoardWriteButton, BoardWrite, BoardWriteTop}