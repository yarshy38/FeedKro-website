import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
const NewNotification = () => {
    const location = useLocation();
    return (
        <>
            <div className='flex justify-between mx-10 mt-7'>
                <div className='flex space-x-9 items-center'>
                    <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                    <Link to='/notificationList' className={`${location.pathname === '/notificationList' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Notification List History</Link>
                    <Link to='/newnotification' className={`${location.pathname === '/newnotification' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  New Notification</Link>
                </div>
            </div>
            <div class="bg-[#FFFFFF] w-[50%] mt-12 mx-auto border border-black rounded-md">
                <textarea name="" id="" cols="30" rows="10" class="w-[100%] pt-6 text-[#000000] opacity-[70%] font-semibold pl-8" >
                    Write the notification text here
                </textarea>
            </div>

            <div class="mt-14 flex justify-center pb-10">
                <button class="text-sm bg-[#2DA157] w-[20%] h-[45px] text-[#FFFFFF]  font-medium rounded-xl">Send</button>
                </div>
    
    </>

            
  )
}

export default NewNotification