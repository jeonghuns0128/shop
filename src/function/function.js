import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'

function HistoryBack(){

    const navigate = useNavigate();
    return (
        <>
            <MdArrowBackIosNew size='30' onClick={() => {navigate(-1)}} />
        </>
    )

}

function Test() {
    return (
        <div>test</div>
    )
}

export {HistoryBack, Test}