import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const VendorBatchHistory = () => {
  return (
    <>
    <div className='flex space-x-9 items-center mt-7 ml-14'>
                <Link to='/vendor' className="text-xl font-bold opacity-50 text-[#7640AC]">Vendor Dashboard</Link>
                <Link to='/vendor' className="text-xl font-bold opacity-50 text-[#7640AC] gap-2 flex items-center"><FaGreaterThan size={13} />Listed Products</Link>
                <Link to='/vendor/live-products' className="text-xl font-bold gap-2 opacity-50 text-[#7640AC] flex items-center"><FaGreaterThan size={13} />Live Products</Link>
                <Link to='/vendor/product' className="text-xl font-bold gap-2 flex items-center opacity-50 text-[#7640AC]"><FaGreaterThan size={13} />Product Details</Link>
                <Link className="text-xl font-bold gap-2 flex items-center text-[#7640AC]"><FaGreaterThan size={13} />Product Batch Details</Link>
            </div>

    <h1 class="px-20 pt-8  font-semibold text-2xl">Batch History </h1>

    <div class="box1 mt-12 mx-auto bg-[#FFFFFF] h-[200px] w-[70%] rounded-lg flex flex-row justify-between px-20 border-2">
        <div class="box1-1 flex flex-row justify-around  items-center w-[40%] ">
            <div class="box1-1-1">
                <ul class="font-semibold">
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
                <ul class="font-semibold">
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

    <div class="box2 mt-4 mx-auto bg-[#FFFFFF] h-[230px] w-[70%]  rounded-lg flex flex-row justify-between px-20 border-2">
        <div class="box2-1 flex flex-row justify-around  items-center w-[40%] ">
            <div class="box2-1-1">
                <ul class="font-semibold">
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
                <ul class="font-semibold">
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
    
    <div class="box3 mt-4 mx-auto bg-[#FFFFFF] h-[250px] w-[70%] border-2 rounded-lg flex flex-row justify-between px-20">
        <div class="box3-1 flex flex-row justify-between items-center w-[40%] ">
            <div class="box3-1-1">
                <ul class="font-semibold ml-10">
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
                <ul class="font-semibold">
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
    
    </>
  )
}

export default VendorBatchHistory