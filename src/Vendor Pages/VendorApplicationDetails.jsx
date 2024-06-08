import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const VendorApplicationDetails = () => {
    return (
        <>
            <div className='flex space-x-9 items-center mt-7 mx-20'>
                <Link to='/vendor' className="text-2xl font-bold opacity-50 text-[#7640AC]">Vendor Dashboard</Link>
                <Link to='/vendor' className="text-2xl font-bold opacity-50 text-[#7640AC] gap-2 flex items-center"><FaGreaterThan size={17} />Vendors</Link>
                <Link to='/vendor/new-vendors' className="text-2xl font-bold opacity-50 text-[#7640AC] gap-2 flex items-center"><FaGreaterThan size={17} />New Venders Application</Link>
                <Link className="text-2xl font-bold text-[#7640AC]  gap-2 flex items-center"><FaGreaterThan size={17} />Application Details</Link>
            </div>
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="box-left flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Name</li>
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
            <div class=" mt-16 flex flex-col justify-center items-center">
               <textarea name="" id="" cols="30" rows="10" placeholder='Write Interview Invitation Text Here' className='text-2xl w-[90%]'></textarea>
               <button className='bg-blue-600 text-white text-3xl font-medium px-36 mt-10 py-2 rounded-full'>Invite</button>
               <button className='bg-green-600 text-white text-3xl font-medium px-20 mt-5 py-2 rounded-full'>Confirm Partner</button>
            </div>
      
        </>
    )
}

export default VendorApplicationDetails