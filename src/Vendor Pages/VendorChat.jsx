import React, { useState, useEffect } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
const VendorChat = () => {
    const location = useLocation();

    return (
        <>
            <div className='flex justify-between mx-10 mt-7'>
                <div className='flex space-x-9 items-center'>
                    <Link to='/vendor' className="text-xl font-bold opacity-50 text-[#7737B6]">Vendor Dashboard</Link>
                    <Link to='/vendor/vendorsupport' className={`${location.pathname === '/customer' ? 'text-black' : 'text-[#7737B6]'} opacity-50 text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />Support</Link>
                    <Link to='/chat' className={`${location.pathname === '/chat' ? 'text-black' : 'text-[#7737B6]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Chat</Link>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
                <input type="text" className='w-[50%] rounded-full h-16 text-xl font-medium pl-7 shadow-xl' placeholder='Type Your Message Here' />
                <PiPaperPlaneRightFill className='relative text-green-500 right-14' size={40} />
            </div>

            <div className='bg-white mx-20 p-5 rounded-md mt-10 '>
                <div className='bg-[#FAEEE7] shadow-md p-3 w-[50%] rounded-md'>
                    <h1 className='text-xl font-medium'>
                    The message from the user will appear here in this format. While the size of the text box depends on the length of the text.

                    </h1>
                    <div className='flex justify-end gap-5 mt-5'>
                        <h1>04/05/2023</h1>
                        <h1>3:37 pm</h1>
                        <IoIosArrowRoundDown size={25} className='text-red-500'/>
                    </div>
                </div>
                <div className='bg-white shadow-md p-3 w-[50%] rounded-md flex flex-col ml-auto mt-3 '>
                    <h1 className='text-xl font-medium'>
                    The message from the user will appear here in this format. While the size of the text box depends on the length of the text.

                    </h1>
                    <div className='flex justify-end gap-5 mt-5'>
                        <h1>04/05/2023</h1>
                        <h1>3:37 pm</h1>
                        <IoIosArrowRoundUp size={25} className='text-green-500'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VendorChat