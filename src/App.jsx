import { Faqs } from './assets/Faqs';
import { useState } from 'react'

function App() {
  const questions = [
    "What is Frontend Mentor, and how will it help me?",
    "Is Frontend Mentor free?",
    "Can I use Frontend Mentor projects in my portfolio?",
    "How can I get help if I'm stuck on a Frontend Mentor challenge?"
  ];
  const answers = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members"
  ];
  // const [showans, setShowans] = useState(null);

  // const handleToggle = (question) =>{
  //   setShowans((prev)=> (prev === question ? null : question));
  // }
  const [active, setActive] = useState(false);
  const handleActive = (question) =>{
    setActive((pre)=> (pre === question ? null : question ));
  }
  return (
    <div className="w-full h-[100vh] bg-contain bg-no-repeat bg-[url('/images/background-pattern-desktop.svg');] bg-[#f9f0ff]">
      <div className="flex items-center flex-col justify-center w-full h-[100vh]">
        <div className="bg-white px-12 py-8 max-sm:px-5 rounded-xl w-1/2 max-sm:w-3/4 h-fit">
          <div className="flex pb-10 gap-3">
            <img src="/images/icon-star.svg" alt="star-icon" />
            <h1 className="text-4xl font-bold text-[#2f1533]">FAQs</h1>
          </div>
          <ul className="flex flex-col">
            {questions.map((question, index)=>(
              <Faqs key={index} question={question} answer={answers[index]} active={active === question}  onClick={handleActive} />
            ))}
          </ul>
        </div>
        <div className="pt-5">
          Challenge by <a href='#' target="_blank">Frontend Mentor</a>. Coded by <a href="#">Laxmi Chaudhary</a>.
        </div>
      </div>

    </div>

  )
}

export default App
