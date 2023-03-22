import { HistoryBack } from '../function/function'
import { SearchHeader } from './search'
import { useNavigate } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
import { BsCart4 } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaStore, FaHeart, FaUserCircle, FaClipboard } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { searchKeyword, searchListReset } from '../store/store'

function CommonHeaderDetail(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return(
      <>
        <div className="wrapperTop" style={{backgroundColor : 'black', overflow: "hidden", height : "45px"}}>
          <HistoryBack style={{height : "45px"}} />
          <ImSearch onClick={() => {
            dispatch(searchListReset())
            dispatch(searchKeyword())
            navigate('/search')
            }} style={{marginLeft : "250px", marginRight : '10px', color : 'white', height : "45px"}} size="35" />
          <BsCart4 onClick={() => {navigate('/cart')}} style={{marginBottom : "5px", color : 'white', height : "45px"}} size="40" />
        </div>
      </>
    )
  }

  function BottomMenu(){
    const navigate = useNavigate()
    let navigateUrlData = ['/','/store','/board','/like','/mypage']
    let [activeNav, setactiveNav] = useState()
    const dispatch = useDispatch()
    
    const components = {
        '/': AiTwotoneHome,
        '/store': FaStore,
        '/board': FaClipboard,
        '/like': FaHeart,
        '/mypage': FaUserCircle
      };
    
    return (
      <nav className="wrapper" style={{backgroundColor : 'black'}}>
        {navigateUrlData.map((item, idx) => {
            const ActiveComponent = components[item];
            return(
                <>
                    <div><ActiveComponent className={'nav-item' + (idx === activeNav ? " active" : "")} size='30px' onClick={()=>{
                        //setactiveNav(idx);
                        //하단 아이콘 클릭 시 색상 변경 건은 redux로 처리예정
                        {if(idx === 2) {
                            dispatch(searchListReset())
                         }
                        }
                        navigate(navigateUrlData[idx]);
                    }} /></div>
                    
                </>
            )
        })}
      </nav>
    )
  }

export {CommonHeaderDetail, BottomMenu}