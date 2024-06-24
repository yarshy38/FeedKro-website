import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

const DeliverySchedule = () => {
    const location = useLocation();
    return (
        <>
            <div className='flex justify-between mx-10 mt-7'>
                <div className='flex space-x-9 items-center'>
                    <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                    <Link to='/delivery' className={`${location.pathname === '/delivery' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />Delivery Schedule Settings</Link>
                </div>
            </div>
            <div class="box bg-[#FFFFFF] w-[80%] h-[250px] mt-12 mx-auto rounded-xl flex flex-col">
                <div class="flex flex-row justify-between px-10 py-4">
                    <h1 class="text-[#000000] text-2xl font-medium">Free Delivery</h1>
                    <FaRegEdit size={40} className='text-green-400' />
                </div>
                <div class="flex flex-row justify-between items-center pt-8 px-10">
                    <h1 class="text-[#000000] font-medium opacity-[67%] w-[10%]">Order time</h1>
                    <div class="flex mx-auto">
                        <div class="flex flex-row justify-around items-center w-[70%] mr-20">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-10">From</h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
                 flex justify-center items-center">9:00 am</h2>
                        </div>
                        <div class="flex flex-row justify-center items-center">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-10">To</h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
                 flex justify-center items-center">12:00 pm</h2>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-between items-center pt-8 px-10">
                    <h1 class="text-[#000000] font-medium opacity-[67%] w-[10%]">Delivery time</h1>
                    <div class="flex mx-auto">
                        <div class="flex flex-row justify-around items-center w-[70%] mr-20">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-10">From</h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
                 flex justify-center items-center">4:00 pm</h2>
                        </div>
                        <div class="flex flex-row justify-center items-center">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-10">To</h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
                 flex justify-center items-center">7:00 pm</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box bg-[#FFFFFF] w-[80%] h-[250px] mt-8 mx-auto rounded-xl flex flex-col">
                <div class="flex flex-row justify-between px-10 py-4">
                    <h1 class="text-[#FE5555] text-2xl font-medium">Quick Delivery</h1>
                    <FaRegEdit size={40} className='text-green-400' />
                </div>
                <div class="flex flex-row justify-between pt-8 px-10">
                    <h1 class="text-[#000000] font-medium opacity-[67%] w-[10%]">Order time</h1>
                    <div class="flex mx-auto">
                        <div class="flex flex-row justify-around items-center w-[70%] mr-20">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-10">From</h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
                 flex justify-center items-center">6:00 am</h2>
                        </div>
                        <div class="flex flex-row justify-center items-center">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-10">To</h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
                 flex justify-center items-center">11:00 pm</h2>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-between items-center pt-8 px-10">
                    <h1 class="text-[#000000] font-medium opacity-[67%] w-[10%]">Delivery time</h1>
                    <div class="flex mx-auto">
                        <div class="flex flex-row justify-around items-center w-[70%] mr-20">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-14">In</h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
                 flex justify-center items-center mr-4">40 min</h2>
                        </div>
                        <div class="flex flex-row justify-center items-center">
                            <h1 class="text-[#000000] font-medium opacity-[67%] pr-10"></h1>
                            <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px]
                 flex justify-center items-center"></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box bg-[#FFFFFF] w-[80%] h-[320px] mt-8 mx-auto rounded-xl flex flex-col">
                <div class="flex flex-row justify-between px-10 py-4">
                    <h1 class="text-[#000000] text-2xl font-medium">Delivery Price</h1>
                    <div class="icons flex justify-around flex-row gap-10">
                        <FiPlusCircle size={40} className='text-red-800' />
                        <FaRegEdit size={40} className='text-green-400' />
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="mx-12">
                        <h1 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[220px] border border[#707070]
            rounded-lg flex justify-center items-center mt-4 ">upto 5km</h1>
                        <h1 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[220px] border border[#707070]
            rounded-lg flex justify-center items-center mt-4 ">6 to 10km</h1>
                        <h1 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[220px] border border[#707070]
            rounded-lg flex justify-center items-center mt-4 ">11 to 15km</h1>
                        <h1 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[220px] border border[#707070]
            rounded-lg flex justify-center items-center mt-4 ">16 to 20km</h1>
                    </div>
                    <div>
                        <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
            flex justify-center items-center mr-4 mt-4">40</h2>
                        <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
            flex justify-center items-center mr-4 mt-4">70</h2>
                        <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
            flex justify-center items-center mr-4 mt-4">100</h2>
                        <h2 class="text-[#000000] font-medium opacity-[67%] h-[40px] w-[100px] border rounded-lg
            flex justify-center items-center mr-4 mt-4">70</h2>
                    </div>
                </div>
            </div>

            <div class="w-[200px] h-[40px] bg-[#2DA157] mt-16 mb-16 flex justify-center items-center mx-auto rounded-full">
                <button class="text-[#FFFFFF] text-lg font-medium">Update</button>
            </div>
        </>
    )
}

export default DeliverySchedule