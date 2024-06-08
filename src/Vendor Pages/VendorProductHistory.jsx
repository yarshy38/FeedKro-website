import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FilterComponent from '../component/FilterComponent';
import { useState } from 'react';


const VendorProductHistory = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("/data.json")
        const wholeData = await data.json();
        console.log(wholeData)
        setrowData(wholeData)
    }
    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mb-12 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/vendor' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%]">Vender Dashboard</Link>
                    <Link className="mr-5 text-[#7640AC] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Products History</Link>
                </div>
                <div>
                    <FilterComponent />
                </div>
            </div>
            {
                rowData && rowData.map((e) => (
                    <div class="bg-[#FFFFFF] w-[90%] h-[100px] mb-4 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
                        <div className="w-[10%]">
                            <img className="w-[80px] h-[80px]" src="/assets/images/dashboard/tomatoProduct.png" alt="image" />
                        </div>
                        <div class="flex flex-row justify-between w-[90%]">
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Product ID</li>
                                <li class="flex justify-center">VG-123</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Product Name</li>
                                <li class="flex justify-center">Tomato</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Category</li>
                                <li class="flex justify-center">Vegetables</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Vender ID</li>
                                <li class="flex justify-center">VN-123</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Ending Date</li>
                                <li class="flex justify-center text-[#FE5555]">DD-MM-YYYY</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Total Items</li>
                                <li class="flex justify-center">500</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Batch No</li>
                                <li class="flex justify-center">VPBN-321</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Products Detail</li>
                                <button class="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
                            ">Open</button>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default VendorProductHistory