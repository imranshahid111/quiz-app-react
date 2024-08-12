import React from 'react'

export default function Marks({mark}) {
    let load=()=>{
        window.location.reload();
    }
    console.log(mark);
  return (
    <div className='bg-[#A46CE5] h-screen'>
      <div className='flex justify-center pt-5'></div>
      <div className='m-auto bg-white w-[80%] h-5/6 rounded-3xl pt-3'>
        <h1 className='text-center font-semibold text-3xl'>Quiz</h1>
      
       
        <div className='w-[90%] m-auto '>
        <h1 className='text-center pt-40 text-7xl'>Your Marks : {mark}</h1>

        </div>
        <button
          onClick={load}
          className='text-gray-900 w-28 m-40 ml-[45%] bg-[#FF9051] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
        >
        Play Again
        </button>
        
      </div>
    </div>
  )
}
