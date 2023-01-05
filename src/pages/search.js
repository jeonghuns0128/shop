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
                     axios.get(process.env.REACT_APP_API_URL + '/search/' + keyword).then((result) => {
                        console.log('totcnt : ' + result.data.totcnt)
                        console.log('searchKeyword : ' + result.data.keyword[0]._source.field)
                        console.log('searchKeyword : ' + result.data.keyword[1]._source.field)
                        console.log('searchKeyword : ' + result.data.keyword[2]._source.field)
                        console.log('searchKeyword : ' + result.data.keyword[3]._source.field)
                        //setProduct(result.data)
                        dispatch(searchList(result.data))
                        })
                        .catch(() => {
                            console.log('실패')
                        })
                }} style={{backgroundColor : 'white', position : 'absolute', width: '40px', top: '5px', left : '269px', margin: '0', border : '0', height : '0px', marginTop : '3px'}}>
                    <ImSearch size="22px" style={{marginBottom : '10px'}}/>
                </button>
          </div>
        </div>
      </>
    )
  }

function SearchMain(){
    
    let searchList = useSelector((state)=>{return state.search})
    console.log('searchList : ' + JSON.stringify(searchList))
    return(
        <>  
            {searchList.size > 0 ? <div style={{marginTop : '50px'}}>검색결과 : {searchList.totcnt} 건</div> : null}
            
            {searchList.keyword && searchList.keyword.map((searchList,i) => {
                return(
                    <>
                    <div>{searchList._source.field}</div>
                    </>
                )
            })}
            
        </>
    )
}


export { SearchHeader, SearchMain }