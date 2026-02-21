import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {question: "Frequently asked question 1.", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem earum perspiciatis nemo dolorem voluptate excepturi. Iure, quasi voluptate eveniet in velit ullam quam consectetur unde, architecto minus, aperiam dolore."},
    {question: "Frequently asked question 2.", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem earum perspiciatis nemo dolorem voluptate excepturi. Iure, quasi voluptate eveniet in velit ullam quam consectetur unde, architecto minus, aperiam dolore."},
    {question: "Frequently asked question 3.", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem earum perspiciatis nemo dolorem voluptate excepturi. Iure, quasi voluptate eveniet in velit ullam quam consectetur unde, architecto minus, aperiam dolore."},
    {question: "Frequently asked question 4.", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem earum perspiciatis nemo dolorem voluptate excepturi. Iure, quasi voluptate eveniet in velit ullam quam consectetur unde, architecto minus, aperiam dolore."},
    {question: "Frequently asked question 5.", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem earum perspiciatis nemo dolorem voluptate excepturi. Iure, quasi voluptate eveniet in velit ullam quam consectetur unde, architecto minus, aperiam dolore."}
  ]

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className='px-25 mb-10'>
        {
            faqs.map((faq, index) => (
                <div key={faq.question} className='flex flex-col gap-3 '>
                    <div className='flex z-10 justify-between cursor-pointer items-center bg-footer rounded-lg text-2xl font-semibold shadow-lg text-amber-50 px-7 py-3'>
                        <div 
                        onClick={() => toggleFAQ(index)}
                        className='w-19/20 select-none'>
                            {faq.question}
                        </div>
                        <div onClick={() => toggleFAQ(index)} className='w-1/20 flex justify-end cursor-pointer active:opacity-65'>
                           {expandedIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        expandedIndex === index 
                          ? 'grid-rows-[1fr] opacity-100 mb-4' 
                          : 'grid-rows-[0fr] opacity-0 mb-0'
                      }`}
                    >
                        <div className='overflow-hidden'>
                            <div className='px-7 py-5 bg-[#d6d6d6] tracking-wide font-semibold rounded-lg'>
                                {faq.answer}
                            </div>
                        </div>
                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default FAQs