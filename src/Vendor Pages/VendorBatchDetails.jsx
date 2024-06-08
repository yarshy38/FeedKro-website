import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useState } from 'react';

const VendorBatchDetails = () => {
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
                    <Link to='/vendor' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%]">Vender Dashboard</Link>
                    <Link to='/vendor/vendorproducthistory' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Products History</Link>
                    <Link to='/vendor/productbatchhistory' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Product Batches History</Link>
                    <Link className="mr-5 text-[#7640AC] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Batch Details</Link>
                </div>
            </div>
            <h1 class="px-20 pt-8  font-bold text-2xl">Batch History</h1>
            <div class="box1 mt-12 ml-20 bg-[#FFFFFF] h-[180px] w-[90%] rounded-lg flex flex-row justify-between px-20">
                <div class="box1-1 flex flex-row justify-around  items-center w-[40%] ">
                    <div class="box1-1-1">
                        <ul class="font-bold">
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
                        <ul class="font-bold">
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

            <div class="box2 mt-4 ml-20 bg-[#FFFFFF] h-[230px] w-[1190px] rounded-lg flex flex-row justify-between px-20">
                <div class="box2-1 flex flex-row justify-around  items-center w-[40%] ">
                    <div class="box2-1-1">
                        <ul class="font-bold">
                            <li class="pb-2">Batch No</li>
                            <li class="pb-2">Type</li>
                            <li class="pb-2">Total batch Products</li>
                            <li class="pb-2">Batch Products Sold</li>
                            <li class="pb-2">Batch Products Instock</li>
                        </ul>
                    </div>
                    <div class="box2-1-2">
                        <ul>
                            <li class="pb-2">VG0523-111</li>
                            <li class="pb-2">CTN x 12</li>
                            <li class="pb-2">500 x 12</li>
                            <li class="pb-2 text-[#FE5555]">470 x 12</li>
                            <li class="pb-2 text-[#2DA157]">.........</li>
                        </ul>
                    </div>
                </div>
                <div class="box2-2 flex flex-row justify-around  items-center w-[40%]">
                    <div class="box2-2-1">
                        <ul class="font-bold">
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
                            <li class="pb-2">28/06/2024</li>
                            <li class="pb-2">28/06/2024</li>
                            <li class="pb-2 text-[#2DA157]">28/06/2024</li>
                            <li class="pb-2 text-[#FE5555]">28/06/2024</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="box3 mt-4 ml-20 bg-[#FFFFFF] h-[200px] w-[90%] rounded-lg flex flex-row justify-between px-20">
                <div class="box3-1 flex flex-row justify-between items-center w-[40%] ">
                    <div class="box3-1-1">
                        <ul class="font-bold ml-10">
                            <li class="pb-2">Vender Price/unit</li>
                            <li class="pb-2">Retail Price</li>
                            <li class="pb-2">Total products</li>
                            <li class="pb-2">Sold products</li>
                        </ul>
                    </div>
                    <div class="box3-1-2 mr-20">
                        <ul>
                            <li class="pb-2">80</li>
                            <li class="pb-2">100</li>
                            <li class="pb-2">500</li>
                            <li class="pb-2">470</li>
                        </ul>
                    </div>
                </div>
                <div class="box3-2 flex flex-row justify-around  items-center w-[40%]">
                    <div class="box3-2-1">
                        <ul class="font-bold">
                            <li class="pb-2">Product returns</li>
                            <li class="pb-2">Net products</li>
                            <li class="pb-2">Net payout</li>
                            <li class="pb-2">Payout Clearence</li>
                        </ul>
                    </div>
                    <div class="box3-2-2">
                        <ul>
                            <li class="pb-2 text-[#2DA157]">30</li>
                            <li class="pb-2 text-[#FE5555]">470</li>
                            <li class="pb-2">PKR 37,600</li>
                            <li class="pb-2"><button class="w-[50px] h-[25px] bg-[#FFFFFF] text-[#000000] 
                    border border-1 border-[#707070] ">5</button>days</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="text-xl text-[#000000] font-bold mt-12 mb-8 px-16">Batch Price Update History</h1>
            {rowData && rowData.map(() => (
                <div className="box bg-[#FFFFFF] w-[95%] h-[105px] mb-6 flex flex-row justify-between items-center mx-auto rounded-xl px-6">
                    <div className="img-part w-[10%]">
                        <img className="w-[70px] h-[70px]" src="/assets/images/dashboard/tomatoProduct.png" alt="" />
                    </div>
                    <div className="flex flex-row justify-between w-[90%]">
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Product ID</li>
                            <li className="flex justify-center">VG-123</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Vender ID</li>
                            <li className="flex justify-center">VN-123</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Date</li>
                            <li className="flex justify-center">DD-MM-YYYY</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Vender Price Update</li>
                            <li className="flex justify-center text-[#FE5555]">500</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Retail Price Update</li>
                            <li className="flex justify-center">100</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Active Batch No</li>
                            <li className="flex justify-center">VPBN-321</li>
                        </ul>
                    </div>
                </div>
            ))
            }
            <h1 class="px-20 pt-8  font-bold text-2xl">Batch Reviews</h1>
            <div class="box4 mt-12 ml-20 h-[200px] w-[90%] rounded-lg flex flex-col justify-between px-20">
                <div class="box4-1 flex flex-row justify-between w-[100%]">
                    <div class="box4-1-1 flex flex-row w-[50%]">
                        <img class="w-[125px] h-[122px]" src="/assets/images/profile.png" alt="image" />
                        <div className='pl-6 pt-4 flex-col'>
                            <h1 class="font-bold text-2xl">Name of user</h1>
                            <div className=' flex flex-row'>
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaRegStar className='text-[#FE2626] text-2xl pl-1' />
                            </div>
                        </div>
                    </div>
                    <h2 class="flex justify-end pt-4 text-gray-600 w-[50%]">04/05/2023</h2>
                </div>
                <h3 class="flex justify-center items-center text-xl  text-[#444444] h-[90px] w-[100%]">
                    The message from the user will appear here in this format.
                    While the size of the text box <br />depends on the length of the text.</h3>
                <hr class="flex justify-center ml-24 w-[80%]" />
            </div>

            <div class="box4 mt-12 ml-20 h-[200px] w-[90%] rounded-lg flex flex-col justify-between px-20">
                <div class="box4-1 flex flex-row justify-between w-[100%]">
                    <div class="box4-1-1 flex flex-row w-[50%]">
                        <img class="w-[125px] h-[122px]" src="/assets/images/profile.png" alt="image" />
                        <div className='pl-6 pt-4 flex-col'>
                            <h1 class="font-bold text-2xl">Name of user</h1>
                            <div className=' flex flex-row'>
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaStar className='text-[#FE2626] text-2xl pl-1' />
                            <FaRegStar className='text-[#FE2626] text-2xl pl-1' />
                            </div>
                        </div>
                    </div>
                    <h2 class="flex justify-end pt-4 text-gray-600 w-[50%]">04/05/2023</h2>
                </div>
                <h3 class="flex justify-center items-center text-xl  text-[#444444] h-[90px] w-[100%]">
                    The message from the user will appear here in this format.
                    While the size of the text box <br />depends on the length of the text.</h3>
                    <hr class="flex justify-center ml-24 w-[80%]" />
            </div>
        </>
    )
}

export default VendorBatchDetails