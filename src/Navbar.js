import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParam = new URLSearchParams(location.pathname);
    const term = queryParam.get("search");
  return (
    <div className='w-full h-[6%] flex justify-center items-center rounded-3xl shadow-md'>
        <div className='w-[98%] h-[60%] flex items-center'>
        <div className='w-1/2 h-full flex items-center'>
          <div className='w-[55%] h-full relative'>
          <input onChange={(e)=>{
            navigate(`/page/1&search=${e.target.value}`);
            if(!e.target.value){
            navigate('/page/1');
            }
          }} value={term} className='w-full h-full rounded-2xl p-4' placeholder='Search...'></input>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute bottom-2 right-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar