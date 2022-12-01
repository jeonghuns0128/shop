import { useState } from "react";
import { DropdownButton, Dropdown } from 'react-bootstrap';

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

function DetailPage(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

function Header(){
    let [isOpen, setMenu] = useState(false);
    console.log(isOpen);
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