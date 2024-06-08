import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const VendorNewNotifications = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/vendor' className="mr-5 text-[#7737B6] text-xl font-bold opacity-[50%]">Vender Dashboard</Link>
                    <Link to='/vendor/vendornotification' className="mr-5 text-[#7737B6] text-xl font-bold opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Notifications</Link>
                    <Link className="mr-5 text-[#7737B6] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />New Notification</Link>
                </div>
            </div>
            <div className="bg-[#FFFFFF] w-[50%] mt-12 mx-auto rounded-xl">
                <textarea name="" id="" cols="30" rows="10" className="w-[100%] px-4 py-4 text-[#000000] opacity-[70%] font-medium">
                    Write the notification text here
                </textarea>
            </div>

            <div className="mt-14 mb-16 flex justify-center">
                <button className="bg-[#A06CD4] w-[20%] h-[45px] text-[#FFFFFF] text-xl font-medium rounded-full
                     ">Send</button>
            </div>
        </>
    )
}

export default VendorNewNotifications