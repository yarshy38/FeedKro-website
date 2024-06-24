import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import SpecificProductCard from '../components/Specific Product/SpecificProductCard';
const SpecificProduct = () => {
  return (
    <>
      <div className='flex space-x-9 items-center mt-7 mx-20'>
        <h1 className="text-2xl font-bold text-[#8C8C8C]">Customer Dashboard</h1>
        <h1 className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} />Shelf setting</h1>
        <h1 className="text-2xl font-bold gap-2 flex items-center"><FaGreaterThan size={17} />All Products</h1>
        <h1 className="text-2xl font-bold gap-2 flex items-center"><FaGreaterThan size={17} />Tomato</h1>
      </div>

      <div className='flex justify-center mx-20 mt-10'>
        <div className='w-[47%]'>
          <div className='bg-white rounded-2xl px-14 flex items-center justify-center'>
            <img src="/assets/images/dashboard/tomatoProduct.png" alt=""  className='pt-4'/>
          </div>
          <div className='bg-white mt-4 px-6 rounded-2xl'>
            <h1 className='text-xl font-bold pt-5 '>Product ID </h1> <span className='text-xl pl-96 font-medium relative -top-7 mt-3'> VG-123</span>
            <h1 className='text-xl font-bold '>Product Name </h1> <span className='text-xl pl-96 font-medium relative -top-7 mt-3'> Tomato</span>
            <h1 className='text-xl font-bold '>Category </h1> <span className='text-xl pl-96 font-medium relative -top-7 mt-3'>Vegetables</span>
            <h1 className='text-xl font-bold '>Brand </h1> <span className='text-xl pl-96 font-medium relative -top-7 mt-3'>Vegetables</span>
            <h1 className='text-xl font-bold '>Vender ID </h1> <span className='text-xl pl-96 font-medium relative -top-7 mt-3'>VG-123</span>
            <h1 className='text-xl font-bold '>Vender Name</h1>  <span className='text-xl pl-96 font-medium relative -top-7 mt-3'>Javed Khan</span>
            <h1 className='text-xl font-bold '>Unit</h1> <span className='text-xl pl-96 font-medium relative -top-7 mt-3'>1 kg</span>
            <h1 className='text-xl font-bold '>Max sell range</h1> <span className='text-xl pl-96 font-medium relative -top-7 mt-3 flex'>50 units   <FaRegEdit className='text-[#2DA157] ml-10' size={30} /></span>
        
          </div>
        </div>
        <div className='bg-white ml-10 w-[47%]'>
          <div className='flex justify-between items-center px-10 mt-7'>
            <h1 className="text-xl font-bold">Vender Price/unit</h1>
            <div className='flex gap-10 items-center'>          
                <input type="text" className='h-10 w-32 text-center text-xl text-black px-5 border border-black' placeholder='80' />
                <FaRegEdit className='text-[#2DA157]' size={43} />
            </div>
          </div>
          <div className='flex justify-between items-center px-10 mt-7'>
            <h1 className="text-xl font-bold">Retail Price</h1>
            <div className='flex gap-10 items-center'>          
                <input type="text" className='h-10 w-32 text-center text-xl text-black px-5 border border-black' placeholder='80' />
                <FaRegEdit className='text-[#2DA157]' size={43} />
            </div>
          </div>
          <div className='flex justify-between items-center px-10 mt-7'>
            <h1 className="text-xl font-bold">Trade Price</h1>
            <div className='flex gap-10 items-center'>          
                <input type="text" className='h-10 w-32 text-center text-xl text-black px-5 border border-black' placeholder='80' />
                <FaRegEdit className='text-[#2DA157]' size={43} />
            </div>
          </div>
          <div className='flex justify-between items-center px-10 mt-7'>
            <h1 className="text-xl font-bold">Margin</h1>
            <div className='flex gap-10 items-center'>          
                <input type="text" className='h-10 w-32 text-center text-xl text-black px-5 border border-black' placeholder='80' />
                <FaRegEdit className='text-[#2DA157]' size={43} />
            </div>
          </div>
          <div className='flex justify-between items-center px-10 mt-7'>
            <h1 className="text-xl font-bold">Margin %</h1>
            <div className='flex gap-10 items-center'>          
                <input type="text" className='h-10 w-32 text-center text-xl text-black px-5 border border-black' placeholder='80' />
                <FaRegEdit className='text-[#2DA157]' size={43} />
            </div>
          </div>
          <div className='flex justify-between items-center px-10 mt-7'>
            <h1 className="text-xl font-bold">Out of Stock</h1>
            <div className='flex gap-10 items-center'>          
                <input type="text" className='h-10 w-32 text-center text-xl text-black px-5 border border-black' placeholder='80' />
                <FaRegEdit className='text-[#2DA157]' size={43} />
            </div>
          </div>
        </div>
      </div>

      <div className='h-[350px] bg-white rounded-xl shadow py-[50px] px-[88px] mx-28 mt-5'>
            <div className='grid grid-cols-2 gap-96'>

              <div className='flex flex-col gap-4'>
                <div className='flex justify-between gap-64'>
                  <div className='font-bold text-black text-xl'>Active Batch No</div>
                  <div className='text-lg font-bold'>VG-123</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>Type</div>
                  <div className='text-lg font-bold'>Tomato</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>batch Products Sold</div>
                  <div className='text-lg font-bold'>Vegetables</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>batch Products Instock</div>
                  <div className='text-lg font-bold'>Vegetables</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>Total batch Products</div>
                  <div className='text-lg font-bold'>Vegetables</div>
                </div>

              </div>


              <div className='flex flex-col gap-4'>
                <div className='flex justify-between gap-64'>
                  <div className='font-bold text-black text-xl'>Manufactured Date</div>
                  <div className='text-lg font-bold'>VG-123</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>Expiry Date</div>
                  <div className='text-lg font-bold'>Tomato</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>Expiry Date</div>
                  <div className='text-lg font-bold'>Vegetables</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>Batch Activation date</div>
                  <div className='text-lg font-bold'>Vegetables</div>
                </div>

                <div className='flex justify-between gap-24'>
                  <div className='font-bold text-black text-xl'>Batch Closing date</div>
                  <div className='text-lg font-bold'>Vegetables</div>
                </div>

              </div>

            </div>
          </div>

          <div className="mx-14">
          <SpecificProductCard />
          </div>
    </>
  )
}

export default SpecificProduct