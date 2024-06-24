import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AddNewProduct = () => {
  return (
    <>
    <div className='flex space-x-9 items-center mt-7 ml-14'>
                <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                <Link to='/' className="text-xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={13} /> Shelf setting</Link>
                <Link className="text-xl font-bold gap-2 flex items-center"><FaGreaterThan size={13} />   Add new Product</Link>
            </div>

            <div class="box bg-[#FFFFFF] w-[60%] h-[250px] rounded-xl flex justify-center items-center mt-12 mx-auto">
            <FaRegFileImage size={30} />
        <h1 class="text-[#000000] text-xl font-medium pl-4">Upload image</h1>
    </div>

    <div class="small-boxe mt-8 h-[80px]  flex flex-row justify-center mx-auto">
        <div class="box1 bg-[#FFFFFF] w-[65px] h-[68px]   border-[0.5px] border-[#707070]
                  rounded-lg flex justify-center items-center mr-8">
            <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
                  flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box2 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
              rounded-lg flex justify-center items-center mr-8">
            <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
              flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box3 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
                  rounded-lg flex justify-center items-center mr-8">
            <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
              flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box4 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
              rounded-lg flex justify-center items-center mr-8">
            <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
              flex justify-center items-center"><FaPlus /></div>
        </div>
    </div>
=
    <div class="flex flex-col items-end mr-12">
        <div class="flex flex-col items-center">
        <FaDownload />
            <h1 class="text-[#546159] text-sm font-medium">Insert Data</h1>
        </div>
    </div>

    <div class="inputs mt-12 flex flex-row justify-around mx-10">
        <div class="input-left w-[40%]">
            <div class="category-box bg-[#FFFFFF] h-[50px] mb-4 flex items-center rounded-full">
                <input class="text-sm text-[#000000] font-medium pl-8" />
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] mb-4 flex items-center rounded-full">
                <input class="text-sm text-[#000000] font-medium pl-8" />
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] mb-4 flex items-center rounded-full">
                <input class="text-sm text-[#000000] font-medium pl-8" />
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] mb-4 flex items-center rounded-full">
                <input class="text-sm text-[#000000] font-medium pl-8" />
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] mb-4 flex items-center rounded-full">
                <input class="text-sm text-[#000000] font-medium pl-8" />
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] mb-4 flex items-center rounded-full">
                <input class="text-sm text-[#000000] font-medium pl-8" /> 
            </div>
        </div>

        <div class="right-input w-[40%]">
            <div class="category-box bg-[#FFFFFF] h-[50px] flex mb-4 items-center rounded-full">
                <h1 class="text-sm text-[#000000] font-medium pl-8">Product Name</h1>
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] flex mb-4 items-center rounded-full">
                <h1 class="text-sm text-[#000000] font-medium pl-8">Brand</h1>
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] flex mb-4 items-center rounded-full">
                <h1 class="text-sm text-[#000000] font-medium pl-8">Vender Name</h1>
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] flex mb-4 items-center rounded-full">
                <h1 class="text-sm text-[#000000] font-medium pl-8">Max sell range</h1>
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] flex mb-4 items-center rounded-full">
                <h1 class="text-sm text-[#000000] font-medium pl-8">Retail price</h1>
            </div>
            <div class="category-box bg-[#FFFFFF] h-[50px] flex mb-4 items-center rounded-full">
                <h1 class="text-sm text-[#000000] font-medium pl-8">Margin</h1>
            </div>
        </div>
    </div>
    <div class="input-bottom flex flex-row justify-center items-center">
        <div class="category-box bg-[#FFFFFF] w-[40%] h-[50px] mb-4 flex items-center rounded-full mr-8">
            <h1 class="text-sm text-[#000000] font-medium pl-8">Parent to (ID of that product)</h1>
        </div>
        <i class='bx bx-message-alt-check'></i>
    </div>

    <div class="btn flex justify-center h-[60px] mt-16">
        <button class="w-[250px] h-[50px] bg-[#2DA157] text-[#FFFFFF] text-xl font-medium rounded-full
         flex justify-center items-center">Add</button>
        </div>
    </>
  )
}

export default AddNewProduct