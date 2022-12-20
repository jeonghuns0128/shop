import { HistoryBack } from '../function/function'
import { useNavigate } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
import { BsCart4 } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaDog, FaStore, FaCompass, FaHeart, FaUserCircle, FaClipboard } from 'react-icons/fa'

function CommonHeaderDetail(){
    const navigate = useNavigate()
    return(
      <>
        <div className="wrapperTop" style={{backgroundColor : 'black', overflow: "hidden", height : "45px"}}>
          <HistoryBack style={{height : "45px"}} />
          <ImSearch style={{marginLeft : "250px", marginRight : '10px', color : 'white', height : "45px"}} size="35" />
          <BsCart4 onClick={() => {navigate('/cart')}} style={{marginBottom : "5px", color : 'white', height : "45px"}} size="40" />
        </div>
      </>
    )
  }

  function BottomMenu(){
    const navigate = useNavigate()
    let [activeNav, setactiveNav] = useState()
    // let [grayCss, setGrayCss] = useState('nav-item active')
    // let [pinkCss, setPinkCss] = useState('active')
    let [itemCss1, setItemCss1] = useState(false)
    let [itemCss2, setItemCss2] = useState(false)
    let [itemCss3, setItemCss3] = useState(false)
    let [itemCss4, setItemCss4] = useState(false)
    let [itemCss5, setItemCss5] = useState(false)
  
    //useEffect 사용해야 하나? 수정필요
  
    useEffect(() => {
      if(activeNav == 0){
        setItemCss1(true)
        setItemCss2(false)
        setItemCss3(false)
        setItemCss4(false)
        setItemCss5(false)
      } else if(activeNav == 1){
        setItemCss1(false)
        setItemCss2(true)
        setItemCss3(false)
        setItemCss4(false)
        setItemCss5(false)
      } else if(activeNav == 2){
        setItemCss1(false)
        setItemCss2(false)
        setItemCss3(true)
        setItemCss4(false)
        setItemCss5(false)
      } else if(activeNav == 3){
        setItemCss1(false)
        setItemCss2(false)
        setItemCss3(false)
        setItemCss4(true)
        setItemCss5(false)
      } else if(activeNav == 4){
        setItemCss1(false)
        setItemCss2(false)
        setItemCss3(false)
        setItemCss4(false)
        setItemCss5(true)
      }
  
      console.log("activeNav : " + activeNav)
     }, [activeNav])
  
    return (
      <nav className="wrapper" style={{backgroundColor : 'black'}}>
        <div><AiTwotoneHome className={itemCss1 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(0); navigate('/'); }} /></div>
        <div><FaStore className={itemCss2 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(1); navigate('/store')}}/></div>
        <div><FaClipboard className={itemCss3 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(2); navigate('/board')}}/></div>
        <div><FaHeart className={itemCss4 == true ? 'nav-item active' : 'nav-item'} size='30px'onClick={() => {setactiveNav(3); navigate('/like')} }/></div>
        <div><FaUserCircle className={itemCss5 == true ? 'nav-item active' : 'nav-item'} size='30px' onClick={() => {setactiveNav(4); navigate('/mypage'); }}/></div>
      </nav>
    )
  }

export {CommonHeaderDetail, BottomMenu}