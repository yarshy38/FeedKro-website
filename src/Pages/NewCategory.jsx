import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const NewCategory = () => {
    return (
        <>
            <div className='flex space-x-9 items-center mt-7 ml-14'>
                <Link to='/' className="text-2xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                <Link to='/' className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} />Home setting</Link>
                <Link className="text-2xl font-bold gap-2 flex items-center"><FaGreaterThan size={17} /> Add new Category</Link>
            </div>
            <div class="box bg-[#FFFFFF] w-[55%] h-[250px] rounded-xl flex justify-center items-center mt-14 mx-auto">
                <FaRegFileImage size={30} />
                <h1 class="text-[#000000] text-xl font-medium pl-4">Upload image</h1>
            </div>

            <div class="small-boxe mt-8 h-[80px] flex flex-row justify-center">
                <div class="box1 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
     rounded-lg flex justify-center items-center mr-8">
                    <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
           flex justify-center items-center"><FaPlus /></div>
                </div>

                <div class="box2 bg-[#FFFFFF] w-[65px] h-[68px] border-[0.5px] border-[#707070]
        rounded-lg flex justify-center items-center mr-8">
                    <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
       flex justify-center items-center"><FaPlus /></div>
                </div>

                <div class="box3 bg-[#FFFFFF] w-[65px] h-[68px] border-[0.5px] border-[#707070]
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

            <div class="category-box bg-[#FFFFFF] w-[750px] mt-12 h-[66px] flex items-center mx-auto rounded-[40px]">
                <input class="text-2xl text-[#000000] font-medium pl-8" placeholder='Name Of Category' />
            </div>

            <div class="box bg-[#FFFFFF] w-[750px] h-[250px] rounded-xl mt-12 mx-auto">
                <textarea class="text-[#000000] text-lg pt-6 pl-8">Write a short text about the category</textarea>
            </div>
            <div class="btn flex justify-center mt-8">
                <button class="w-[190px] h-[45px] bg-[#2DA157] text-[#FFFFFF] text-2xl font-medium rounded-full
         flex justify-center items-center">Add</button>
            </div>
        </>
    )
}

export default NewCategory