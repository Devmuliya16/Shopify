import React from 'react'
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md'

function pagination({pages,page,setpage}) {
  if(pages<5){
    return(
      <div className="flex space-x-1 flex-row items-stretch">
  
      <button className="block p-2 rounded-l-sm text-white bg-black hover:bg-gray-700 " onClick={()=>setpage(page>0 ? page-1 : page)} >
        <MdNavigateBefore/>
      </button>
    {
        [...Array(pages)].map((_,ind)=> (
      
                <button key={ind} className="block rounded-sm p-2 text-xs border-l-lg text-white bg-black hover:bg-gray-700" onClick={()=>setpage(ind+1)}>{ind+1}</button>
        ))
    }
   <button className="block p-2 rounded-r-sm text-white bg-black hover:bg-gray-700 " onClick={()=>setpage(page<pages ? page+1 : page)} >
        <MdNavigateNext/>
      </button>
  </div>
    )
  }
  return (
    

    <div className="flex space-x-1 flex-row items-stretch">
  
      <button className="block p-2 rounded-l-sm text-white bg-black hover:bg-gray-700 " onClick={()=>setpage(page>0 ? page-1 : page)} >
        <MdNavigateBefore/>
      </button>
    
    <>{(page>=1) &&
        <>
        <button className={`block p-2 text-xs border-l-lg text-white bg-black hover:bg-gray-700` } onClick={()=>setpage(0)} > 1 </button>
        <button className={`block p-2 text-xs border-l-lg text-white bg-black hover:bg-gray-700`} >...</button></>
    }
    </>
    
    {
        [...Array(5)].map((_,ind)=> (
      
                <button key={ind+1} className="block rounded-sm p-2 text-xs border-l-lg text-white bg-black hover:bg-gray-700" onClick={()=>setpage(page+ind+1)}>{page+ind+1}</button>
        ))
    }
   
    
    <>{(page<pages-5) &&
        <>
        <button className={`block p-2 text-xs border-l-lg text-white bg-black hover:bg-gray-700`} >...</button>
        <button className={`block p-2 text-xs border-l-lg text-white bg-black hover:bg-gray-700` } onClick={()=>setpage(pages)} > {pages} </button></>
    }
    </>
   <button className="block p-2 rounded-r-sm text-white bg-black hover:bg-gray-700 " onClick={()=>setpage(page<pages-5 ? page+1 : page)} >
        <MdNavigateNext/>
      </button>
  </div>
  )
}

export default pagination