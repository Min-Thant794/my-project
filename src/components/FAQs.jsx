import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {question: "1. What are the age and license requirements?", answer: "You must be at least 21 years old with a valid driver's license. Drivers under 25 may incur a young driver fee. International renters need an International Driving Permit (IDP) alongside their home country's license."},
    {question: "2. What happens if I return the car late?", answer: "If you are running behind, you can request a trip extension directly through the platform. Unapproved late returns are subject to a late fee plus the hourly rate of the vehicle to ensure the car owner and the next renter aren't kept waiting."},
    {question: "3. What should I do if the car breaks down?", answer: "Don't panic! Let's Drive provides 24/7 roadside assistance with every rental. Simply call our emergency support hotline from the app, and we will dispatch a tow truck or arrange a replacement vehicle for you immediately."},
    {question: "4. Can someone else drive the rental car?", answer: "Yes, but they must be officially added to your reservation. All additional drivers need to create a profile and be verified by Let's Drive before they get behind the wheel to ensure they are fully covered by our insurance."},
    {question: "5. Do I need to refill the gas or clean the car?", answer: "Yes. Please return the car with the exact same fuel or battery level it had at the start of your trip to avoid refueling fees. Standard wear is fine, but smoking or returning the car excessively dirty will result in extra cleaning penalties."}
  ]

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className='px-25 pt-5 w-full mb-10'>
        <div className='w-full font-bold text-4xl text-center mb-10 tracking-wide'>
            Frequently Asked Questions
        </div>
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