import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Location from '../../components/Location';
import { useState } from 'react';

const PartnerWalletDetail = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("/data.json")
        const wholeData = await data.json();
        setrowData(wholeData)
    }
    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/partner' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%]">Partner Dashboard</Link>
                    <Link to='/partner/partnerwallet' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Partners Wallet</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Partners Wallet Details</Link>
                </div>
            </div>
            <div className="mt-12 flex flex-col justify-center items-center">
                <img className="h-[90px] w-[90px]" src="/assets/images/profile.png" alt="" />
                <h1 className="text-[#444444] text-2xl font-medium opacity-[100%] pt-4 text-center">Name of Partner</h1>
            </div>
            <div>
                <Location />
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
            <div className="mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-2">Orders completed</li>
                            <li className="pb-2">Canceled orders</li>
                            <li className="pb-2">Average daily deliveries</li>
                            <li className="pb-2">Average delivery time</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-2">35</li>
                            <li className="pb-2">05</li>
                            <li className="pb-2">28</li>
                            <li className="pb-2">30min</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-2">Lifetime earnings</li>
                            <li className="pb-2">Lifetime Transactions</li>
                            <li className="pb-2">Pending earnings</li>
                            <li className="pb-2">Cleared</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-2">150k</li>
                            <li className="pb-2">150k</li>
                            <li className="pb-2 text-[#FE5555] text-right">20k</li>
                            <li className="pb-2 text-[#2DA157] text-right">35k</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl text-[#444444] font-medium mt-8 mb-12 px-16">Transaction History</h1>
            {rowData && rowData.map(() => (
                <div className="box bg-[#FFFFFF] w-[95%] h-[105px] mt-4 flex flex-row justify-between items-center mx-auto rounded-xl px-6">
                    <div className="img-part w-[10%]">
                        <img className="w-[70px] h-[70px]" src="/assets/images/profile.png" alt="" />
                    </div>
                    <div className="flex flex-row justify-between w-[90%]">
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Partner ID</li>
                            <li className="flex justify-center">R-1234</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Partner Name</li>
                            <li className="flex justify-center">Mr. Khan</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Date</li>
                            <li className="flex justify-center">13/07/2023</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Transaction ID</li>
                            <li className="flex justify-center">123456789</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Mean</li>
                            <li className="flex justify-center">Easypaisa</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">From</li>
                            <li className="flex justify-center">Ahmed</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Amount</li>
                            <li className=" text-[#2DA157] flex justify-center">15000</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Detail</li>
                           <Link
                           to="partnertransacdetail">
                            <button className="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
            ">Open</button>
                           </Link>

                        </ul>
                    </div>
                </div>
            ))
            }


        </>
    )
}

export default PartnerWalletDetail