import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const BatchHistoryDetails = () => {
  return (
    <>
    <div className='flex space-x-9 items-center mt-7 ml-14'>
                <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                <Link to='/sale' className="text-xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={13} />Archived Product Sales History</Link>
                <Link to='/product' className="text-xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={13} />   Product History</Link>
                <Link to='/his' className="text-xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={13} />   Batch History</Link>
                <Link className="text-xl font-bold gap-2 flex items-center"><FaGreaterThan size={13} />    Batch History Details</Link>
            </div>

    <h1 class="px-20 pt-8  font-medium text-2xl">Batch History Details</h1>

    <div class="box1 mt-12 mx-auto bg-[#FFFFFF] h-[200px] w-[1190px] rounded-lg flex flex-row justify-between px-20">
        <div class="box1-1 flex flex-row justify-around  items-center w-[40%] ">
            <div class="box1-1-1">
                <ul class="font-medium">
                    <li class="pb-2">Product Id</li>
                    <li class="pb-2">Product Name</li>
                    <li class="pb-2">Category</li>
                    <li class="pb-2">Company</li>
                </ul>
            </div>
            <div class="box1-1-2">
                <ul>
                    <li class="pb-2">VG-123</li>
                    <li class="pb-2">Tomato</li>
                    <li class="pb-2">Vegetables</li>
                    <li class="pb-2">Nestle</li>
                </ul>
            </div>
        </div>
        <div class="box1-2 flex flex-row justify-around  items-center w-[40%]">
            <div class="box1-2-1">
                <ul class="font-medium">
                    <li class="pb-2">Vender ID</li>
                    <li class="pb-2">Vender Name</li>
                    <li class="pb-2">Unit</li>
                    <li class="pb-2">Max sell range</li>
                </ul>
            </div>
            <div class="box1-2-2">
                <ul>
                    <li class="pb-2">VGV-123</li>
                    <li class="pb-2">Javed Khan</li>
                    <li class="pb-2">1 kg</li>
                    <li class="pb-2">50 units</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="box2 mt-4 mx-auto bg-[#FFFFFF] h-[230px] w-[1190px] rounded-lg flex flex-row justify-between px-20">
        <div class="box2-1 flex flex-row justify-around  items-center w-[40%] ">
            <div class="box2-1-1">
                <ul class="font-medium">
                    <li class="pb-2">Active Batch No</li>
                    <li class="pb-2">Type</li>
                    <li class="pb-2">Total Batch Products</li>
                    <li class="pb-2">Batch Products Sold</li>
                    <li class="pb-2">Batch Products Instock</li>
                </ul>
            </div>
            <div class="box2-1-2">
                <ul>
                    <li class="pb-2">VG0523-111</li>
                    <li class="pb-2">CTN x 12</li>
                    <li class="pb-2">500 x 12</li>
                    <li class="pb-2 text-[#FE5555]">500 x 12</li>
                    <li class="pb-2 text-[#2DA157]">---</li>
                </ul>
            </div>
        </div>
        <div class="box2-2 flex flex-row justify-around  items-center w-[40%]">
            <div class="box2-2-1">
                <ul class="font-medium">
                    <li class="pb-2">Manufactured Date</li>
                    <li class="pb-2">Expiary Date</li>
                    <li class="pb-2">Batch Entry Date</li>
                    <li class="pb-2">Batch Activation date</li>
                    <li class="pb-2">Batch Closing date</li>
                </ul>
            </div>
            <div class="box2-2-2">
                <ul>
                    <li class="pb-2">28/05/2023</li>
                    <li class="pb-2">28/05/2024</li>
                    <li class="pb-2">28/05/2024</li>
                    <li class="pb-2 text-[#2DA157]">28/05/2024</li>
                    <li class="pb-2 text-[#FE5555]">28/06/2024</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="box3 mt-4 mx-auto bg-[#FFFFFF] h-[250px] w-[1190px] rounded-lg flex flex-row justify-between px-20">
        <div class="box3-1 flex flex-row justify-between items-center w-[40%] ">
            <div class="box3-1-1">
                <ul class="font-medium ml-10">
                    <li class="pb-2">Vender Price/unit</li>
                    <li class="pb-2">Retail Price</li>
                    <li class="pb-2">Trade Price</li>
                    <li class="pb-2">Margin</li>
                    <li class="pb-2">Margin%</li>
                </ul>
            </div>
            <div class="box3-1-2 mr-20">
                <ul>
                    <li class="pb-2">80</li>
                    <li class="pb-2">100</li>
                    <li class="pb-2">90</li>
                    <li class="pb-2">10</li>
                    <li class="pb-2">5%</li>
                </ul>
            </div>
        </div>
        <div class="box3-2 flex flex-row justify-around  items-center w-[40%]">
            <div class="box3-2-1">
                <ul class="font-medium">
                    <li class="pb-2">Total Products</li>
                    <li class="pb-2">Sold Products</li>
                    <li class="pb-2">Product returns</li>
                    <li class="pb-2">Net products</li>
                    <li class="pb-2">Net payout</li>
                </ul>
            </div>
            <div class="box3-2-2">
                <ul>
                    <li class="pb-2">500</li>
                    <li class="pb-2">470</li>
                    <li class="pb-2 text-[#2DA157]">30</li>
                    <li class="pb-2 text-[#FE5555]">470</li>
                    <li class="pb-2">PKR 37,600</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="box4 mt-4 mx-auto bg-[#FFFFFF] h-[250px] w-[1190px] rounded-lg flex flex-col justify-center items-center px-20">
        <div class="box4-1 flex flex-row mb-12">
                <ul>
                    <li class="text-[#000000] font-bold">Payout Clearence</li>
                </ul>
                <ul>
                    <li class="pb-2 ml-16"><button class="w-[50px] h-[25px] bg-[#FFFFFF] text-[#000000] 
                        border border-1 border-[#707070] ">5</button></li>
                </ul>
                <h1 class="text-[#000000] font-medium pl-2">days</h1>
        </div>
        <div class="box-btn">
            <button class="text-sm bg-[#FAAE4B] w-[208px] h-[40px] rounded-full text-[#FFFFFF]  ">Clear Now</button>
        </div>
    </div>
    </>
  )
}

export default BatchHistoryDetails