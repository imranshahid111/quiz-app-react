import React, { useState } from 'react';
import { Questions } from './Data';
import Marks from './Marks';

export default function Quiz() {
  const [marks, setMarks] = useState(0);
  const [que, setQue] = useState(0);
  const [bg, setBg] = useState(false);
  const [index, setIndex] = useState(null);
  const [selected, setSelected] = useState('');
  const [ans, setAns] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const checkindex = (i, option) => {
    setSelected(option)
    setIndex(i);
  };


  const check = () => {
   

    let iscorrect = Questions[que].answer[index].correct;

    if (iscorrect) {
      setAns(index);
      setBg(true);
     
    } else {
      

      setBg(false);
      const correctIndex = Questions[que].answer.findIndex(answer => answer.correct);
      setAns(correctIndex);
    }
  };


  const clk = () => {
    setTimeout(() => {
      let iscorrect = Questions[que].answer[index].correct;
      if (que < Questions.length - 1) {
        setQue(que + 1);
        if (iscorrect) {
          setMarks(marks + 10);
        }
        setBg(false);
        setIndex(null);
        setAns(null);
      } else {
        setQuizCompleted(true);
      }
    }, 500)
   
  };
  
  if (quizCompleted) { return <Marks mark={marks} /> }

  return (
    <div className='bg-[#A46CE5] h-screen'>
      <div className='flex justify-center pt-9 md:pt-5'></div>
      <div className='m-auto bg-white w-[80%] h-[500px] md:h-5/6 rounded-3xl pt-3'>
        <h1 className='text-center font-semibold text-3xl'>Quiz</h1>
        <h1 className='text-right pr-9 font-semibold text-lg'>Marks: {marks}</h1>
        <h1 className='p-10 font-semibold text-xl md:text-2xl'>{Questions[que].question}</h1>
        <div className='w-[90%] m-auto'>
          {Questions[que].answer.map((v, i) => (
            <button
              onClick={() => checkindex(i, v.text)}
              key={i}
              className={`${i === ans ? "bg-green-600" : selected == v.text? 'bg-blue-700':  "bg-white"
                } text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full`}
            >
              {v.text}
            </button>
          ))}
        </div>
        <button
          onClick={check}
          className=' mx-16 mt-7 text-gray-900 md:mx-[40%] md:mt-20 w-20 md:w-28 bg-[#FF9051] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
        >
          Hint
        </button>
        <button
          onClick={clk}
          className='text-gray-900 w-20 md:w-28 bg-[#FF9051] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
        >
          Next
        </button>
      </div>
    </div>
  );
}
