import {FloatingLabel, Form} from 'react-bootstrap'
import { HistoryBack } from '../function/function'
import { BsPencilSquare, BsChatTextFill,BsChatSquareText } from 'react-icons/bs'

import { AiOutlineEye } from 'react-icons/ai'
import { TfiMore } from 'react-icons/tfi'
import { BsBookmark } from 'react-icons/bs'
import { FiHeart, FiBellOff, FiShare } from 'react-icons/fi'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { boardData } from '../store/store'
import { ImSearch } from 'react-icons/im'
import { searchList } from '../store/store'


function BoardMainList(){
    let searchResult = useSelector((state)=>{return state.search})

    return(
        <>
        {
          ( searchResult == "" || searchResult == null || searchResult == undefined || ( searchResult != null && typeof searchResult == "object" && !Object.keys(searchResult).length )) ? 
          <BoardAllSearch /> : <BoardKeywordSearch />
        }
        </>
      )
}

function BoardKeywordSearch(){
    let searchResult = useSelector((state)=>{return state.search})
    let searchResultCnt = searchResult[0].totcnt
    let searchResultList = searchResult[0].keyword
    const navigate = useNavigate()

    return(
        <div style={{marginTop : '55px', width : '100%'}}>
            <div style={{textAlign : 'left'}}>검색 결과 {searchResultCnt}건</div>
            {searchResultList && searchResultList.map(searchResultList => {
            return(
                <>
                <div>
                    <div style={{textAlign : 'left', height : '45px'}}>
                        <div style={{float : 'left', width : '10%', marginLeft : '10px', height : '40px'}}><BsChatTextFill size="30px"/></div>
                        <div style={{float : 'left', width : '80%', height : '40px'}}>
                            <div style={{textAlign : 'left', marginLeft : '10px', height : '20px'}}>
                                <div style={{float : 'left', fontSize : '13px', width : '25%'}}>{searchResultList._source.category}</div>
                                <div style={{fontSize : '11px', width : '80%', paddingTop : '1px'}}>4시간</div>
                            </div>
                            <div style={{textAlign : 'left', marginLeft : '10px', height : '20px'}}>
                                <div style={{float : 'left', fontSize : '13px', width : '25%'}}>{searchResultList._source.company}</div>
                                <div style={{fontSize : '11px', width : '80%', paddingTop : '1px'}}>{searchResultList._source.user_id}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign : 'left', width : '350px', height : '60px', marginTop : '-10px'}}>
                        <div onClick={() => {navigate("/board/detail")}}>
                            <div style={{paddingLeft : '10px', fontSize : '21px', textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap', marginBottom : '5px'}}>{searchResultList._source.title}</div>
                            <div style={{paddingLeft : '10px', textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap'}}>{searchResultList._source.content}</div>
                        </div>
                    </div>
                    <div style={{width : '100%', marginTop : '13px'}}>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><FiHeart size="20px" /> {searchResultList._source.like_cnt}</div>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><BsChatSquareText size="20px" /> {searchResultList._source.review_cnt}</div>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><AiOutlineEye size="20px"/> {searchResultList._source.view_cnt}</div>
                    </div>
                    <hr style={{marginTop : '41px'}}/>
                </div>
                </>
            )
            })}
        </div>
    )
}

function BoardAllSearch(){
    
    const navigate = useNavigate();
    let [boardList, setBoardList] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/board/').then((result) => {
        setBoardList(result.data.board)
        })
        .catch(() => {
            console.log('실패')
        })
    }, [])
    // MdOutlineHomeWork 직장
    // RiHeartsFill 연애
    // BsChatTextFill 자유
    // 인생
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
                                <div style={{float : 'left', fontSize : '13px', width : '25%'}}>{boardList._source.category}</div>
                                <div style={{fontSize : '11px', width : '80%', paddingTop : '1px'}}>4시간</div>
                            </div>
                            <div style={{textAlign : 'left', marginLeft : '10px', height : '20px'}}>
                                <div style={{float : 'left', fontSize : '13px', width : '25%'}}>{boardList._source.company}</div>
                                <div style={{fontSize : '11px', width : '80%', paddingTop : '1px'}}>{boardList._source.user_id}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign : 'left', width : '350px', height : '60px', marginTop : '-10px'}}>
                        <div onClick={() => {navigate("/board/" + boardList._id)}}>
                            <div style={{paddingLeft : '10px', fontSize : '21px', textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap', marginBottom : '5px'}}>{boardList._source.title}</div>
                            <div style={{paddingLeft : '10px', textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap'}}>{boardList._source.content}</div>
                        </div>
                    </div>
                    <div style={{width : '100%', marginTop : '13px'}}>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><FiHeart size="20px" /> {boardList._source.like_cnt}</div>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><BsChatSquareText size="20px" /> {boardList._source.review_cnt}</div>
                        <div style={{width: "calc(100%/3)", float : 'left'}}><AiOutlineEye size="20px"/> {boardList._source.view_cnt}</div>
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

    let [keyword, setKeyword] = useState()
    //let searchList = useSelector((state)=>{return state.search})
    let dispatch = useDispatch()  
    
    return(
      <>
        <div className="wrapperTop" style={{textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden", width : '100%'}}>
          <div style={{width : '10%', height : '45px', float : 'left', paddingTop : '5px'}}>
            <HistoryBack />
          </div>
          
          <div style={{position: 'relative', color : 'gray', width : '90%', height : '45px', float : 'left', textAlign : 'left', paddingTop : '5px', fontSize : '20px'}}>
            <input type="text" name="keyword" onChange={(e)=>{setKeyword(e.target.value)}} placeholder='관심 있는 글 검색' style={{width : '320px', border: "1px solid white", borderRadius: "15px", backgroundColor : 'white', color : 'black', fontSize : '17px'}} />
                <button onClick={() => {
                    
                    if(keyword === undefined){
                        alert('검색어를 입력해주세요.')
                    }else{
                        axios.get(process.env.REACT_APP_API_URL + '/board/search/' + keyword).then((result) => {
                            dispatch(searchList(result.data))
                            })
                            .catch(() => {
                                console.log('실패')
                            })
                    }
                }} style={{backgroundColor : 'white', position : 'absolute', width: '40px', top: '5px', left : '269px', margin: '0', border : '0', height : '0px', marginTop : '3px'}}>
                    <ImSearch size="22px" style={{marginBottom : '10px'}}/>
                </button>
          </div>
        </div>
      </>
    )
  }

function BoardWriteButton(){
    const navigate = useNavigate()
    return(
        <div style={{marginRight : '10px', position: "fixed", right: "0px", bottom: "50px"}}>
            <BsPencilSquare size="50px" onClick={() => {navigate('/board/write')}} />
        </div>
    )
} 

// function BoardWriteTop_MysqlVersion(){
//     const navigate = useNavigate()
//     return(
//       <>
//         <div className="wrapperTop" style={{textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden"}}>
//           <div style={{width : '20%', color : 'white', float : 'left', textAlign : 'center', paddingTop : '10px', fontSize : '15px'}} onClick={() => {
//             navigate(-1)
//           }}>취소</div>
//           <div style={{color : 'white', width : '60%', float : 'left', textAlign : 'center', paddingTop : '5px', fontSize : '20px'}}>게시판</div>
//           <div style={{width : '20%', color : 'white', float : 'left', textAlign : 'center', paddingTop : '10px', fontSize : '15px'}}>
//             <button type='submit' form='boardWrite'>등록</button>
//           </div>
//         </div>
//       </>
//     )
//   }

// function BoardWrite_MysqlVersion() {
//     return (
//       <div style={{marginTop : '55px', width : '100%'}}>
//         <form action={process.env.REACT_APP_API_URL + '/board/write' } method='POST' id='boardWrite'>
//             <FloatingLabel
//             controlId="title"
//             name="title"
//             id="title"
//             label="제목"
//             className="mb-3"
//             >
//                 <Form.Control as="textarea" placeholder="Leave a comment here" name="title" id="title"/>
//             </FloatingLabel>
//             <FloatingLabel controlId="content" id="content" label="내용" name="content">
//                 <Form.Control
//                     as="textarea"
//                     placeholder="Leave a comment here"
//                     style={{ height: '510px' }}
//                     name="content"
//                     id="content"
//                 />
//             </FloatingLabel>
//         </form>
//       </div>
//     );
//   }

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

  function BoardDetailTop(){

    return(
      <>
        <div className="wrapperTop" style={{textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden", width : '100%'}}>
          <div style={{width : '10%', height : '45px', float : 'left', paddingTop : '5px'}}>
            <HistoryBack />
          </div>
          <div style={{textAlign : 'right', marginTop : '6px'}}>
            <FiBellOff size="30px" color='white' style={{marginRight : '10px'}} />
            <BsBookmark size="30px" color='white' style={{marginRight : '10px'}} />
            <TfiMore size="30px" color='white' style={{marginRight : '10px'}} />
          </div>
        </div>
      </>
    )
  }

  function BoardDetailMain(){

    let {id} = useParams()
    let [boardData, setBoardData] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/board/' + id).then((result) => {
        setBoardData(result.data)
        console.log(result.data)
        })
        .catch(() => {
            console.log('실패')
        })
    }, [])

    return(
        <>
            {boardData == null ? null :
                <>
                <div style={{marginTop : '50px', textAlign : 'left'}}>
                    <div style={{float : 'left'}}>마크</div>
                    <div style={{float : 'left', marginLeft : '10px'}}>{boardData.user_id}</div>
                    <div style={{marginLeft : '90px'}}>{boardData.insert_time}</div>
                </div>
                <div style={{textAlign : 'left', marginTop : '15px'}}>
                    <div style={{fontSize : '20px'}}>{boardData.title}</div>
                    <div style={{marginTop : '10px'}}>{boardData.content}</div>
                </div>
                <div style={{marginTop : '13px'}}>
                    <div style={{width: "calc(100%/3)", float : 'left'}}><FiHeart size="20px" /> {boardData.like_cnt}</div>
                    <div style={{width: "calc(100%/3)", float : 'left'}}><BsChatSquareText size="20px" /> {boardData.review_cnt}</div>
                    <div style={{width: "calc(100%/3)", float : 'left'}}><FiShare size="20px"/> 공유하기</div>
                </div>
                </>
            }
        </>
    )
  }

export {BoardMainList, BoardTop, BoardWriteButton, BoardWrite, BoardWriteTop, BoardDetailTop, BoardDetailMain}