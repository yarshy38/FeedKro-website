import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { ImFilePicture } from "react-icons/im";
import { Link } from 'react-router-dom';

const VendorTransacRequestDetail = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/vendor' className="mr-5 text-[#7F40BE] text-xl font-bold opacity-[50%]">Vender Dashboard</Link>
                    <Link to='/vendor/vendortransacrequest' className="mr-5 text-[#7F40BE] text-xl font-bold opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Transaction Requests</Link>
                    <Link className="mr-5 text-[#7F40BE] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Transaction Request Details</Link>
                </div>
            </div>
            <div className="mt-12 flex flex-col justify-center items-center">
                <img className="h-[90px] w-[90px]" src="/assets/images/profile.png" alt="image" />
            </div>
            <div className="mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Partner ID</li>
                            <li className="pb-1">Contact No</li>
                            <li className="pb-1">Password</li>
                            <li className="pb-1">Address</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">FCP-213</li>
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
            <h1 className="text-2xl text-[#444444] font-medium mt-8 px-20">Transaction Request</h1>
            <div className="mt-8 bg-[#FDFDFD] w-[90%] h-[110px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-2">Requested Amount</li>
                            <li className="pb-2">Mean chosen</li>
                            <li className="pb-2">Batch No</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-2">2000 FC</li>
                            <li className="pb-2">Easypaisa</li>
                            <li className="pb-2"> FPBN-123| FPBN-124 |</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-2">Date</li>
                            <li className="pb-2">Account No</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-2">24/07/2023</li>
                            <li className="pb-2">12345678901</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl text-[#444444] font-medium mt-12 px-20">Payment Details</h1>
            <div className="mt-12 flex flex-row justify-around mx-10">
                <div className="w-[40%]">
                    <div className="category-box bg-[#FFFFFF] opacity-[67%] h-[55px] mb-8 flex items-center rounded-lg">
                        <h1 className="text-sm text-[#000000] font-medium pl-8">Sender ID</h1>
                    </div>
                    <div className="category-box bg-[#FFFFFF] opacity-[67%] h-[55px] mb-8 flex items-center rounded-lg">
                        <h1 className="text-sm text-[#000000] font-medium pl-8">Sender Account No</h1>
                    </div>
                    <div className="category-box bg-[#FFFFFF] opacity-[67%] h-[55px] mb-8 flex items-center rounded-lg">
                        <h1 className="text-sm text-[#000000] font-medium pl-8">Transaction ID</h1>
                    </div>
                </div>

                <div className="w-[40%]">
                    <div className="category-box bg-[#FFFFFF] opacity-[67%] h-[55px] flex mb-8 items-center rounded-lg">
                        <h1 className="text-sm text-[#000000] font-medium pl-8">Sender Name</h1>
                    </div>
                    <div className="category-box bg-[#FFFFFF] opacity-[67%] h-[55px] flex mb-8 items-center rounded-lg">
                        <h1 className="text-sm text-[#000000] font-medium pl-8">Transaction Amount</h1>
                    </div>
                    <div className="category-box bg-[#FFFFFF] opacity-[67%] h-[55px] mb-8 flex flex-row justify-between items-center px-8 rounded-lg">
                        <h1 className="text-sm text-[#000000] font-medium">Upload Transaction Reciept</h1>
                        <ImFilePicture />
                    </div>
                </div>
            </div>
            <div className="mt-12 mb-8 bg-[#7179E0] w-[25%] h-[55px] flex justify-center items-center mx-auto rounded-full ">
                <button className="text-[#FFFFFF] text-2xl font-medium opacity-[100%]">Pay Now</button>
            </div>

        </>
    )
}

export default VendorTransacRequestDetail