import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const VendorDetails = () => {
    return (
        <>
            <div className='flex space-x-9 items-center mt-7 mx-20'>
                <Link to='/vendor' className="text-2xl font-bold opacity-50 text-[#7640AC]">Vendor Dashboard</Link>
                <Link to='/vendor' className="text-2xl font-bold opacity-50 text-[#7640AC] gap-2 flex items-center"><FaGreaterThan size={17} />Vendors</Link>
                <Link to='/vendor/registered' className="text-2xl font-bold opacity-50 text-[#7640AC] gap-2 flex items-center"><FaGreaterThan size={17} />Registered Vendors</Link>
                <Link to='/vendor/batch-update-details' className="text-2xl font-bold text-[#7640AC] gap-2 flex items-center"><FaGreaterThan size={17} />Vendor Profile</Link>
            </div>
            <div className="mt-12 flex flex-col justify-center items-center">
                <img className="h-[90px] w-[90px]" src="/assets/images/profile.png" alt="" />
                <h1 className="text-[#444444] text-2xl font-medium opacity-[100%] pt-4 text-center">Name of Vendor</h1>
            </div>
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="box-left flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Vendor ID</li>
                            <li className="pb-1">Contact No</li>
                            <li className="pb-1">Password</li>
                            <li className="pb-1">Address</li>
                            <li className="pb-1">Vendor Type</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">FP-123</li>
                            <li className="pb-1">0313 1234567</li>
                            <li className="pb-1">********</li>
                            <li className="pb-1">House 23, street 7 hayatabad</li>
                            <li className="pb-1 text-[#FE5555]">FSP</li>
                        </ul>
                    </div>
                </div>
                <div className="box-right flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">CNIC No</li>
                            <li className="pb-1">Email</li>
                            <li className="pb-1">Location</li>
                            <li className="pb-1">Date of joining</li>
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
        
            <div class="cards mt-8 w-[90%] h-[170px] flex flex-row justify-between items-center mx-auto ">
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
            <h1 class="mt-16 text-[#444444] text-2xl font-medium opacity-[100%] text-center">Performance</h1>
            <div class=" mt-16 flex justify-center items-center">
                <img class="h-[100px]" src="./Group 117.svg" alt="" />
            </div>
            <div class="mt-16 flex justify-center items-center text-center mb-8">
                <h1 class="w-[35%] text-[#444444] text-sm font-medium">Your performance status depends on the numbers
                    of <br /> active affiliates. The criteria of active affiliate may vary in time</h1>
            </div>
        </>
    )
}

export default VendorDetails