import { useEffect, useState } from 'react'
import { BsCart4, BsCheckCircleFill } from 'react-icons/bs'
import { FaRegCircle } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HistoryBack } from '../function/function'
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios'
import { searchList } from '../store/store'
import { AiFillStar, AiOutlineCheck } from 'react-icons/ai'

function SearchHeader(){

    let [keyword, setKeyword] = useState()
    //let searchList = useSelector((state)=>{return state.search})
    let dispatch = useDispatch()  
    
    return(
      <>
        <div className="wrapperTop" style={{textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden", width : '100%'}}>
          <div style={{width : '10%', height : '45px', float : 'left', paddingTop : '5px'}}>
            <HistoryBack />
          </div>
          {/* 검색 시 form 전송 버전
          <form action={process.env.REACT_APP_API_URL + '/search/result'} method='POST'>
            <div style={{position: 'relative', color : 'gray', width : '90%', height : '45px', float : 'left', textAlign : 'left', paddingTop : '5px', fontSize : '20px'}}>
                <input type="text" name="keyword" placeholder='상품이나 스토어를 검색해보세요.' style={{width : '320px', border: "1px solid white", borderRadius: "15px", backgroundColor : 'white', color : 'black', fontSize : '17px'}} />
                <button type='submit' style={{backgroundColor : 'white', position : 'absolute', width: '40px', top: '5px', left : '269px', margin: '0', border : '0', height : '0px', marginTop : '3px'}}>
                    <ImSearch size="22px" style={{marginBottom : '10px'}}/>
                </button>
            </div>
          </form> */}

          <div style={{position: 'relative', color : 'gray', width : '90%', height : '45px', float : 'left', textAlign : 'left', paddingTop : '5px', fontSize : '20px'}}>
            <input type="text" name="keyword" onChange={(e)=>{setKeyword(e.target.value)}} placeholder='상품이나 스토어를 검색해보세요.' style={{width : '320px', border: "1px solid white", borderRadius: "15px", backgroundColor : 'white', color : 'black', fontSize : '17px'}} />
                <button onClick={() => {
                    
                    if(keyword === undefined){
                        alert('검색어를 입력해주세요.')
                    }else{
                        axios.get(process.env.REACT_APP_API_URL + '/search/' + keyword).then((result) => {
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

function SearchMain(){
    
    let searchResult = useSelector((state)=>{return state.search})
    
    return(
      <>
      {
        ( searchResult == "" || searchResult == null || searchResult == undefined || ( searchResult != null && typeof searchResult == "object" && !Object.keys(searchResult).length )) ? 
        <SearchEmpty /> : <SearchDetail />
      }
      </>
    )
}

function SearchEmpty(){
    return(
        <div style={{marginTop : '50px'}}>검색결과 없음</div>
    )
}

function SearchDetail() {
    let searchResult = useSelector((state)=>{return state.search})
    let searchResultCnt = searchResult[0].totcnt
    let searchResultList = searchResult[0].keyword
    let navigate = useNavigate()
    return(
        <>
        <div style={{marginTop : '50px', textAlign : 'left', marginLeft : '10px', marginBottom : '10px'}}>검색 결과 : {searchResultCnt}건</div>
        
        <div style={{ width : '100%'}}>
          {searchResultList && searchResultList.map(searchResultList => {
                return(
                    <>
                    <div style={{width : '100%', height : '160px', marginBottom : '20px'}} >
                        {/* onClick={() => {navigate('/product/clothes/shoes/' + searchResultList._source.id)}} */}
                        <div style={{width : '150px', height : '160px', float : 'left'}}>
                            {/* <img src={product.img_url} style={{maxWidth:'100%', maxHeight:'100%'}}/> */}
                            <img src={process.env.REACT_APP_AWS_S3_URL + '/product/' + searchResultList._source.barcode + '.jpg'} style={{maxWidth:'90%', maxHeight:'100%'}}/>
                        </div>
                        <div style={{height : '160px', textAlign : 'left'}}>
                            <div style={{paddingRight : '20px', marginBottom : '5px', textOverflow : 'ellipsis', overflow : 'hidden', height:'40px', fontSize : '16px', lineHeight : '20px', WebkitLineClamp : '2', WebkitBoxOrient :'vertical', display:'-webkit-box'}}>{searchResultList._source.title}</div>
                            <div>
                                <div style={{fontSize : '15px', color : 'red', float : 'left'}}>와우쿠폰할인가</div>
                                <div style={{float : 'left'}}>&nbsp;{searchResultList._source.sale_discount_rate}%&nbsp;</div>
                                <div style={{textDecoration: 'line-through'}}>{searchResultList._source.price}원</div>
                            </div>
                            <div style={{marginBottom : '10px'}}>
                                <div style={{fontSize : '20px', color : 'red'}}>{searchResultList._source.sale_price}원 </div>
                                {/* <div style={{fontSize : '15px', color : 'red'}}>(10ml당 4,222원)</div> */}
                            </div>
                            <div style={{fontSize : '15px', color : 'green'}}>오늘(목) 도착 보장</div>
                            <div style={{fontSize : '15px'}}>
                                와우 혜택 적용 <AiOutlineCheck />
                            </div>
                            <div>
                                <div style={{color : 'orange', float : 'left'}}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                <div>&nbsp;({searchResultList._source.review_cnt})</div>
                            </div>
                        </div>                       
                    </div>
                    <hr />
                    </>
                )
            })}
        </div>
        </>
    )
}

export { SearchHeader, SearchMain }