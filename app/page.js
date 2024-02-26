
'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title,desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask)
    
  }
  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)

  }
  let renderTask = <h2>No Task Available</h2>


if(mainTask.length>0){renderTask = mainTask.map((t,i)=>{
    return(
      <li key={i} className="flex items-center justify-between mb-8">
 <div className="flex items-center justify-between w-2/3 ">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6>{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deleteHandler(i)
    }}
    className="p-2 bg-red-400 rounded-lg w-20 font-semibold">Delete</button>
    </li>
    )
  })}
  
  return (
 <>
 <h1 className="bg-black text-[30px] text-white font-bold text-center">TO-DO</h1>
 <form onSubmit={submitHandler} className="bg-slate-500" >
  <input type="text"
  className="w-48 border-black border-4 font-bold m-8 px-4 py-2 "
  placeholder="enter the title"
  value={title}
  onChange={(e)=>{
    setTitle(e.target.value)
  }}
  />
   <input type="text"
  className="w-48 border-black border-4 font-bold m-8 px-4 py-2 "
  placeholder="enter the description"
  value={desc}
  onChange={(e)=>{
    setDesc(e.target.value)
  }}
  />
  <button className="w-32 bg-black rounded-md py-3 px-3 text-white">Add Task</button>
 </form>
 <hr />
 <div className="p-8 bg-slate-400 ">
  {renderTask}

 </div>
 </>

  );
}
