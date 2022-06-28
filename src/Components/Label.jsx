import React from 'react'
import {useEffect,useState} from "react" ;
import Map from './Map';

function Label() {
const [error,setError]=useState(true);
const [errorBtn,setErrorBtn]=useState(true);
const [name,setNames]=useState([]);
const [map,showMap]=useState(false);
const [id,setId]=useState("");
const [mapAddress,setMapAddress]=useState("");

const onchangeSelector=(value)=>{
  setId(value);
  setError(false);

}
const setAddress=()=>{
    if(id){
  
        const n=name.filter((na)=>{
            if(na.id==id){
                return na.id;
            }
        })
        setMapAddress(n[0].address);
        showMap(true);
        
            }
            else{
                
                setMapAddress("");
                
            }
}

useEffect(()=>{
const getData=async()=>{
    try{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data=await response.json();
    setNames(data);
    setAddress();
    setErrorBtn(false);
    }
    catch(e){
        console.log(e.message);
        setNames([]);
        
    }
}

getData();
},[])
  return (
     

<div className='labels'>
    <label htmlFor="name" className='labels-title'>Select a  User</label>
    <select id="names"  onChange={(e)=>onchangeSelector(e.target.value)}>
      {name.length>1 && <option  defaultValue={"none"} disabled={id?true:false} >Please Select a User</option> }
         {name.map((item)=>{
             return  <option value={item.id} key={item.id}>{item.name}</option> 
            })
        }  
        </select>
        {error && <p className='labels-loading'>{errorBtn?"Loading...":"please select a user"} </p>}
        {!errorBtn && <button onClick={()=>setAddress()} className="showMapBtn">Show Address</button>}
       {map && <Map mapAddress={mapAddress}></Map>}
    </div>
  
   
  )
  
}

export default Label