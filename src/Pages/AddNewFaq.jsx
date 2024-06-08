import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom'
const AddNewFaq = () => {
    const location = useLocation();
    return (
        <>
            <div className='flex justify-between mx-10 mt-7'>
                <div className='flex space-x-9 items-center'>
                    <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                    <Link to='/allfaqs' className={`${location.pathname === '/allfaqs' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  All Faqs List</Link>
                    <Link to='/addnewfaq' className={`${location.pathname === '/addnewfaq' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Add New Faq</Link>
                </div>
            </div>
            <div class="bg-[#FFFFFF] w-[60%] mt-12 mx-auto rounded-xl pl-6">
                <textarea name="" id="" cols="2" rows="2" class="w-[100%] pt-4 text-[#000000] opacity-[70%]  font-semibold">
                    Add your question here
                </textarea>
            </div>
            <div class="bg-[#FFFFFF] w-[60%] mt-12 mx-auto rounded-xl pl-6">
                <textarea name="" id="" cols="30" rows="10" class="w-[100%] pt-4 text-[#000000] opacity-[70%]  font-semibold">
                    Answer your question here
                </textarea>
            </div>

            <div class="mt-16 flex justify-center pb-16">
                <button class="text-sm bg-[#2DA157] w-[20%] h-[45px] text-[#FFFFFF] font-medium rounded-xl">Add</button>
            </div>
        </>
    )
}

export default AddNewFaq