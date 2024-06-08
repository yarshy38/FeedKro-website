import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const HomeScreenBanner = () => {
    return (
        <>
            <div className='flex space-x-9 items-center mt-7 ml-14'>
                <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                <Link to='/' className="text-xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={13} />Home setting</Link>
                <Link className="text-xl font-bold gap-2 flex items-center"><FaGreaterThan size={13} />  Add Home Screen Banner</Link>
            </div>
            <div class="box bg-[#FFFFFF] w-[60%] h-[250px] rounded-xl flex justify-center items-center mt-12 mx-auto">
            <FaRegFileImage size={30} />
            <h1 class="text-[#000000] text-xl font-medium pl-4">Upload image</h1>
         </div>
              
    <div class="small-boxe mt-8 h-[80px]  flex flex-row justify-center mx-auto">
        <div class="box1 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
            rounded-lg flex justify-center items-center mr-4">
            <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
            flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box2 bg-[#FFFFFF] w-[65px] h-[68px] border-[0.5px] border-[#707070]
        rounded-lg flex justify-center items-center mr-4">
        <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
        flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box3 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
            rounded-lg flex justify-center items-center mr-4">
        <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
        flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box4 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
        rounded-lg flex justify-center items-center mr-4">
        <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
        flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box5 bg-[#FFFFFF] w-[65px] h-[68px] border-[0.5px] border-[#707070]
        rounded-lg flex justify-center items-center mr-4">
        <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
        flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box6 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
        rounded-lg flex justify-center items-center mr-4">
        <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
        flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box7 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
        rounded-lg flex justify-center items-center mr-4">
        <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
        flex justify-center items-center"><FaPlus /></div>
        </div>

        <div class="box8 bg-[#FFFFFF] w-[65px] h-[68px]  border-[0.5px] border-[#707070]
        rounded-lg flex justify-center items-center mr-4">
        <div class="box1-1 border border-1 rounded-lg border-[#707070] w-[30px] h-[30px]
        flex justify-center items-center"><FaPlus /></div>
        </div>
    </div>  

    <div class="btn flex justify-center h-[60px] mt-28">
        <button class="w-[250px] h-[50px] bg-[#2DA157] text-[#FFFFFF] text-xl font-medium rounded-full
         flex justify-center items-center">Add</button>
        </div>
        </>
    )
}

export default HomeScreenBanner