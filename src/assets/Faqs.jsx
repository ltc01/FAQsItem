import React from 'react'


export const Faqs = ({ question, active, answer, onClick }) => {
  
    const toggle = () => {
        onClick(question);
    }

    return (
            <li className='py-3 w-full h-fit'>
                <div className='flex justify-between' onClick={toggle}>
                    <h2 className={`w-70% max-sm:w-72 font-semibold hover:text-[#ad28eb] cursor-pointer ${active ? 'text-[#ad28eb]' : 'text-[#2f1533]'}`} >{question}</h2>
                    <button>
                        {active ? <img src="/images/icon-minus.svg" alt="" /> : <img src="/images/icon-plus.svg" alt="" />}
                    </button>
                </div>
                <p className={`text-start py-3 mb-3 leading-tight ${active ? 'block' : 'hidden'} text-[#8c6991]`}>{answer}</p>
            </li>
    )
}
