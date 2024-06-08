import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { FaReceipt } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const VendorTransacDetail = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/vendor' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%]">Vender Dashboard</Link>
                    <Link to='/vendor/vendorwallet' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Venders Wallets</Link>
                    <Link to='/vendor/vendorwalletdetail' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Venders Wallets Details</Link>
                    <Link className="mr-5 text-[#7640AC] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Vender Transaction Details</Link>
                </div>
            </div>
            <div className="mt-12 flex flex-col justify-center items-center">
                <img className="h-[90px] w-[90px]" src="/assets/images/profile.png" alt="image" />
                <h1 className="text-[#444444] text-2xl font-medium opacity-[100%] pt-4 text-center">Name of Vender</h1>
            </div>
            <div className="mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Vender ID</li>
                            <li className="pb-1">Contact No</li>
                            <li className="pb-1">Password</li>
                            <li className="pb-1">Address</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">V-123</li>
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
            <h1 className="text-2xl text-[#444444] font-medium mt-8 mb-6 px-16">Transaction Request</h1>
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[130px] flex flex-row justify-between items-center mx-auto px-20 ">
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
                            <li className="pb-2">FPBN-123 |</li>
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
            <h1 className="text-2xl text-[#444444] font-medium mt-8 mb-6 px-16">Transaction Done</h1>
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-1">Total Payment Sent</li>
                            <li className="pb-1">Mean</li>
                            <li className="pb-1">Sender ID</li>
                            <li className="pb-1">Sender Account No</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-1 text-[#2DA157]">2000 FC</li>
                            <li className="pb-1">Easypaisa</li>
                            <li className="pb-1">FM-123</li>
                            <li className="pb-1">123456789</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-1">Transaction ID</li>
                            <li className="pb-1">Receiver Account No</li>
                            <li className="pb-1">Sender Name</li>
                            <li className="pb-1">Date</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-1">12345765321</li>
                            <li className="pb-1">12345678901</li>
                            <li className="pb-1">Ahmed</li>
                            <li className="pb-1">25/07/2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl text-[#444444] font-medium mt-8 px-16">Transaction Receipt</h1>
            <div class="mt-12 mb-12 w-[90%] h-[350px] flex flex-row justify-center items-center mx-auto ">
                <div
                    class="border border-1 border-[#546159] mr-6 rounded-lg w-[20%] h-[350px] flex flex-row justify-center items-center">
                    <FaReceipt />
                    <h1 class="text-[#000000] font-medium opacity-[100%] pl-4">Sender Receipt</h1>
                </div>
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[20%] h-[350px] flex flex-row justify-center items-center">
                    <FaReceipt />
                    <h1 class="text-[#000000] font-medium opacity-[100%] pl-4">Reciever Receipt</h1>
                </div>
            </div>

        </>
    )
}

export default VendorTransacDetail