import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PartnerAppDetails = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/partner' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link to='/partner' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Partners</Link>
                    <Link to='/partner/newapplication' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />New Applications</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Partner Applications details</Link>
                </div>
            </div>
            <div className="box mt-12 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Name</li>
                            <li className="pb-1">Contact No</li>
                            <li className="pb-1">Password</li>
                            <li className="pb-1">Address</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">Mr. Khan</li>
                            <li className="pb-1">0313 1234567</li>
                            <li className="pb-1">********</li>
                            <li className="pb-1">House 23, street 7 hayatabad</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">CNIC No</li>
                            <li className="pb-1">Email</li>
                            <li className="pb-1">Location</li>
                            <li className="pb-1">Date of application</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">17301-1234567-1</li>
                            <li className="pb-1">abc@gmail.com</li>
                            <li className="pb-1">Peshawar</li>
                            <li className="pb-1">05/07/2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="cards mt-12 w-[90%] h-[170px] flex flex-row justify-between items-center mx-auto ">
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Icon awesome-id-card.svg" alt="" />
                    <h1 class="text-[#546159] font-medium opacity-[100%] pl-2">Front side of ID Card</h1>
                </div>
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Icon awesome-id-card.svg" alt="" />
                    <h1 class="text-[#546159] font-medium opacity-[100%] pl-2">Back side of ID Card</h1>
                </div>
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Group 137.svg" alt="" />
                    <h1 class="text-[#546159] font-medium opacity-[100%] pl-2">Electricity/Gas Bill</h1>
                </div>
            </div>
            <div className="mt-12 w-[90%] h-[160px] bg-[#FFFFFF] mx-auto">
                <textarea className="w-[100%] h-[160px] px-6 py-6 text-[#000000] text-lg font-medium 
          opacity-[67%]">Write interview invitation text here</textarea>
            </div>
            <div className="mt-12 bg-[#7179E0] w-[25%] h-[55px] flex justify-center items-center mx-auto rounded-full ">
                <button className="text-[#FFFFFF] text-2xl font-medium opacity-[100%]">Invite</button>
            </div>
            <div className="mt-12 mb-8 bg-[#2DA157] w-[25%] h-[55px] flex justify-center items-center mx-auto rounded-full ">
                <button className="text-[#FFFFFF] text-2xl font-medium opacity-[100%]">Confirm Partner</button>
            </div>
        </>
    )
}

export default PartnerAppDetails