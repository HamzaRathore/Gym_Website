import React,{useEffect, useState} from 'react'

export default function Prac() {

    // const[count,setCount]=useState(0);
    // const[data,setData]=useState(0);
    
    // const count_handler=()=>{
    //     setCount(count+1);
    // }
    // const data_handler=()=>{
    //     setData(data+1);
    // }
    // useEffect(()=>{
    //     alert("count is " + count);
    // },[count])

    const[newTitle,setNewTitle]=useState("");
    const[title,setTitle]=useState("");

    const clickHandler=()=>{
        setTitle(newTitle);
    }
    const changeHandler=(event)=>{
         setNewTitle(event.target.value);
    }
  return (

    <div>
      {/* <h1>Counter is {count}</h1>
      <h1>Data is {data}</h1>
      <button onClick={count_handler}>Click Here  for count </button>
      <button onClick={data_handler}>Click Here for data</button> */}

      <h1>{title}</h1>
      <input type='text' value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}> Change value </button>
    </div>
  )
}
