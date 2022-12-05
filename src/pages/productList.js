import { useEffect, useState } from "react";
import { DropdownButton, Dropdown, Nav } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductList(props){
    let num = 1;
    num += props.i;
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + './shoes' + num + '.jpg'} width="80%" onClick={() => {
                navigator('/detail')
            }} />
            <h4>{ props.shoes[props.i].title }</h4>
            <p>{ props.shoes[props.i].price }</p>
        </div>
    )
}

function DivPage(){
    return(
        <div className="alert alert-warning">
            2초 이내 구매시 할인
        </div>
    )    
}

function DetailPage(props){

    let [inputData, setInputData] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => {
           setIsColsed(false);
           //console.log('2초 후 : ' + isColesd);
           }, 2000);
           //console.log('2');

           if(inputData != '' && isNaN(inputData)){
            alert('숫자만 입력하세요!');
           }

        return () => {
            //console.log('1');
            clearTimeout(timer);
        }   

        //    아래 return은 useEffect 실행 전 동작하게 하고 싶을 때 사용
        //    return () => {
        //     코드실행~~ (타이머 실행 시 기존 타이머 제거)
        //    }
    }, [inputData])
    

    let [isColesd, setIsColsed] = useState(true);
    //console.log('처음 : ' + isColesd);
    let {id} = useParams();
    //console.log("id : " + id);
    //console.log("props : " + props.shoes[id]);
    
    

    if (typeof props.shoes[id] != 'undefined'){
        if (id == props.shoes[id].id){
            return (
                <div className="container">
                    <div className="row">
                        {
                            isColesd == true ? <DivPage /> : null
                        }
                        <div className="col-md-6">
                            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="pt-5">{props.shoes[id].title}</h4>
                            <p>{props.shoes[id].content}</p>
                            <p>{props.shoes[id].price}원</p>
                            <input onChange={(e) => {
                                setInputData(e.target.value);
                            }} /> <button className="btn btn-danger">주문하기</button> 
                            <div>{inputData}</div>
                        </div>
                    </div>
                    
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">상세정보</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">리뷰</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Q&A</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                            반품/교환정보
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div> 
            )
        } else {
            return (
                <div>실패</div>
            )
        }
    } else {
        return (
            <div>실패</div>
        )
    }

}

function Header(){
    let [isOpen, setMenu] = useState(false);
    //console.log(isOpen);
    let toggleMenu = () => {
        setMenu(!isOpen);
    }

    return (
        
        <DropdownButton id="dropdown-item-button" title="">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
    )
}

export {ProductList, DetailPage, Header};