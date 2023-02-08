import { useEffect, useState } from 'react'
import { BsCart4, BsCheckCircleFill } from 'react-icons/bs'
import { FaRegCircle } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HistoryBack } from '../function/function'
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios'
import { searchKeyword, searchList } from '../store/store'
import { AiFillStar, AiOutlineCheck } from 'react-icons/ai'
import { CgSearchLoading } from 'react-icons/cg'


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
                            dispatch(searchKeyword(keyword))
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
    let searchKeyword = useSelector((state)=>{return state.keyword})
    return(
        <>
        <div style={{marginTop : '250px'}}>'<span style={{color : 'red', fontSize : '20px'}}>{searchKeyword[0]}</span>'에 대한 검색결과가 없습니다.</div>
        <div><CgSearchLoading size="100px" /></div>
        </>
    )
}

function SearchDetail() {
    let searchResult = useSelector((state)=>{return state.search})
    let searchKeyword = useSelector((state)=>{return state.keyword})
    let searchResultCnt = searchResult[0].totcnt
    let searchResultList = searchResult[0].keyword
    let dispatch = useDispatch()
    let navigate = useNavigate()

    return(
        <>
        <div style={{marginTop : '50px', textAlign : 'left', marginLeft : '10px', marginBottom : '10px'}}>'<span style={{color : 'red', fontSize : '20px'}}>{searchKeyword}</span>'에 대한 검색 결과 : {searchResultCnt}건</div>
        <div style={{marginBottom : '10px'}}>
            <div style={{textAlign : 'left', marginLeft : '5px', float : 'left'}}>쿠팡 랭킹순</div>
            <div style={{textAlign : 'left', float : 'left'}}>&nbsp;|&nbsp;</div>
            <div style={{textAlign : 'left', float : 'left'}} onClick={()=>{
                axios.get(process.env.REACT_APP_API_URL + '/search/' + searchKeyword[0] + '?sort=0').then((result) => {
                //axios.get(process.env.REACT_APP_API_URL + '/search/노트북?sort=0').then((result) => {
                    dispatch(searchList(result.data))
                    })
                    .catch(() => {
                        console.log('실패')
                    })
            }}>낮은가격순</div>
            <div style={{textAlign : 'left', float : 'left'}}>&nbsp;|&nbsp;</div>
            <div style={{textAlign : 'left', float : 'left'}} onClick={()=>{
                axios.get(process.env.REACT_APP_API_URL + '/search/' + searchKeyword[0] + '?sort=1').then((result) => {
                    dispatch(searchList(result.data))
                    })
                    .catch(() => {
                        console.log('실패')
                    })
            }}>높은가격순</div>
            {/* <div style={{textAlign : 'left', float : 'left'}}>&nbsp;|&nbsp;</div>
            <div style={{textAlign : 'left', float : 'left'}} onClick={()=>{
                axios.get(process.env.REACT_APP_API_URL + '/search/' + searchKeyword[0] + '?sort=2').then((result) => {
                    dispatch(searchList(result.data))
                    })
                    .catch(() => {
                        console.log('실패')
                    })
            }}>최신순</div> */}
            <div style={{textAlign : 'left', float : 'left'}}>&nbsp;|&nbsp;</div>
            <div style={{textAlign : 'left'}} onClick={()=>{
                axios.get(process.env.REACT_APP_API_URL + '/search/' + searchKeyword[0] + '?sort=3').then((result) => {
                    dispatch(searchList(result.data))
                    })
                    .catch(() => {
                        console.log('실패')
                    })
            }}>리뷰많은순</div>
        </div>
        <div style={{ width : '100%'}}>
          {searchResultList && searchResultList.map(searchResultList => {
                return(
                    <>
                    <div style={{width : '100%', height : '160px', marginBottom : '20px'}} onClick={() => {navigate('/product/' + searchResultList._source.barcode)}} >
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