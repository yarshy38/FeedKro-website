import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FilterComponent from '../component/FilterComponent';
import { useState } from 'react';


const ProductBatchHistory = () => {
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
                    <Link to='/vendor/vendorproducthistory' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Products History</Link>
                    <Link className="mr-5 text-[#7640AC] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Product Batches History</Link>
                </div>
            </div>
            {
                rowData && rowData.map((e) => (
                    <div class="bg-[#FFFFFF] w-[90%] h-[100px] mb-4 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
                        
                        <div class="flex flex-row justify-between w-[100%]">
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Product ID</li>
                                <li class="flex justify-center">VG-123</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Batch No</li>
                                <li class="flex justify-center">VG0523-111</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Type</li>
                                <li class="flex justify-center">CTN x12</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Total Products</li>
                                <li class="flex justify-center">500</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Batch Entry</li>
                                <li class="flex justify-center">28/06/2024</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Batch Avtivation</li>
                                <li class="flex justify-center text-[#2DA157]">29/06/2024</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Batch Closed</li>
                                <li class="flex justify-center text-[#FE5555]">28/07/2024</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Details</li>
                                <button class="text-sm bg-[#FAAE4B] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
                            ">Open</button>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ProductBatchHistory