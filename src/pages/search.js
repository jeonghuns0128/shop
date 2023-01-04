import { useEffect, useState } from 'react'
import { BsCart4, BsCheckCircleFill } from 'react-icons/bs'
import { FaRegCircle } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HistoryBack } from '../function/function'
import CloseButton from 'react-bootstrap/CloseButton';

function SearchHeader(){

    return(
      <>
        <div className="wrapperTop" style={{textAlign : 'left', height : '45px',backgroundColor : 'black', overflow: "hidden", width : '100%'}}>
          <div style={{width : '10%', height : '45px', float : 'left', paddingTop : '5px'}}>
            <HistoryBack />
          </div>
          <form action={process.env.REACT_APP_API_URL + '/search/result'} method='POST'>
            <div style={{color : 'gray', width : '80%', height : '45px', float : 'left', textAlign : 'left', paddingTop : '5px', fontSize : '20px'}}>
                <input type="text" name="keyword" placeholder='상품이나 스토어를 검색해보세요.' style={{width : '300px', border: "1px solid white", borderRadius: "15px", backgroundColor : 'white', color : 'black', fontSize : '17px'}} />
            </div>
            <div style={{color : 'white', width : '10%', height : '45px', textAlign : 'center', float : 'left', paddingTop : '10px'}}>
                <button type='submit'>전송</button>
                {/* <ImSearch type='submit' size="22px" /> */}
            </div>
          </form>
        </div>
      </>
    )
  }

function Test(){
    return(
        <>
        </>
    )
}

export { SearchHeader, Test }