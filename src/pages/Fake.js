import React from 'react';
import {useNavigate } from 'react-router-dom'

export default function Fake() {
const n = useNavigate()
 return<>
    <div onClick={()=>{n("/home")}} >click fake</div>
    </>
}