import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import { FaToggleOff } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import FilterComponent from '../components/FilterComponent';
import { useState } from 'react';

const VendorAllFaqs = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("/data.json")
        const wholeData = await data.json();
        setrowData(wholeData)
    }
    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mb-12 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/vendor' className="mr-5 text-[#7737B6] text-xl font-bold opacity-[50%]">Vender Dashboard</Link>
                    <Link className="mr-5 text-[#7737B6] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />All FAQ's</Link>
                </div>
                <div className='flex flex-row'>
                    <FilterComponent />
                    <GoPlusCircle size={30} className='text-[#FE5555]' />
                </div>
            </div>
            {rowData && rowData.map(() => (
                <div className="box mb-4 bg-[#FFFFFF] border border-1 border-[#DCDADA] rounded-xl mx-10
                 h-[107px] flex flex-row justify-between items-center">
                    <div className="w-[40%] flex  justify-around  ">
                        <ul>
                            <li className="flex justify-center font-medium mb-2 ">Date</li>
                            <li className="flex justify-center">21/06/2030</li>
                        </ul>
                        <ul>
                            <li className="flex justify-center font-medium mb-2  ">What is your question?</li>
                            <li className=" flex">Your answer is here.</li>
                        </ul>
                    </div>
                    <div className="icons w-[15%] flex justify-around">
                        <FaToggleOff size={30} className='text-[#546159]' />
                        <MdDelete size={30} className='text-[#FE5555]' />
                        <IoIosArrowDown size={30} className='text-[#546159]' />
                    </div>
                </div>
            ))
            }

        </>
    )
}

export default VendorAllFaqs