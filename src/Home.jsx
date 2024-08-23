import React from 'react'
import upperimg from './images/image.png'
import { Link } from 'react-router-dom'
export default function Home() {

  return (
    <>
    <div className='bg-[#A46CE5] h-screen'>
      <div className='flex justify-center pt-5'>
        <img className='md:w-72 w-56' src={upperimg} alt="" />
      </div>
      <div className=' m-auto bg-white w-[80%] h-72 rounded-3xl pt-3'>
        <h1 className='font-bold text-[28px] md:text-[33px] text-[#280A82] text-center'>Interesting QUIZ Awaits You</h1>
        <p className='text-center pt-4 md:pt-8 text-[#7e7d7d] text-[20px] md:text-[26px]'>play quizzes with your friends<br/>
        and get various prizes</p>
        <div className='flex justify-center gap-2 pt-8'>
          <div className='w-9 h-3 bg-[#DCDFE3] rounded-full'>.</div>
          <div className='w-9 h-3 bg-[#FF9051] rounded-full'>.</div>
          <div className='w-9 h-3 bg-[#DCDFE3] rounded-full'>.</div>
        </div>
        <Link to="/quiz"><div  className='w-24 bg-[#FF9051] h-24 rounded-full m-auto mt-5 p-5 text-5xl pl-7 text-white'>&#8594;</div></Link>
      </div>
    </div>
    </>
  )
}
