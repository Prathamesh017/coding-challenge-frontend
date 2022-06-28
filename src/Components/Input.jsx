import React from 'react'
import axios from 'axios';
import { Axios } from 'axios';
import { useState ,useEffect} from 'react'

function Input() {
  const [info,setinfo]=useState({
    title:"",
    body:""
  })
const [error,setError]=useState(false);
const [test,setTest]=useState({value:false,msg:""});

const sendInfo=(e)=>{
 const{name,value}=e;
 setinfo((prev)=>{
  return {...prev,[name]:value}
 })
 setTest({value:false,msg:""});
}


const getData2=async()=>{
try{
const response=await  axios.post(`https://jsonplaceholder.typicode.com/posts`,{
  userId:1,
  title:info.title,
  body:info.body
})
setTest({
  value:true,
  msg:"Message Sent Succesfully"
})
}

catch(e){
  setTest({
    value:true,
    msg:"Request Failed"
  })
console.log(e);
}
}
const submitData=()=>{
  setError(true);
  if(info.title==="" || info.body===""){
    return;
  }
  getData2();
}

  return (
      <div className='input-box'>
    <div className="inputs">
      <div className="input-1">
        <input type="text" placeholder="enter title" name="title" onChange={e=>sendInfo(e.target)}></input>
       {(error && info.title==="") && <p className='error'>Please enter title</p>}
      </div>
      <div className="input-2">
        <input type="text" placeholder="enter body"  name="body" onChange={e=>{sendInfo(e.target)}}></input>
        {(error && info.body==="") && <p className='error'>Please enter body</p>}
      </div>
    </div>
    <button className='submitBtn' onClick={submitData}>Submit</button>
    { test.value && <p className={test.msg==="Request Failed"? "error":"success"}>{test.msg}</p>}
      </div>
  )
}

export default Input