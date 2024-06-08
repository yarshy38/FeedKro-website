import React from 'react'
import BatchHistoryCard from '../components/Batch History/BatchHistoryCard'

const BatchHistory2 = () => {
  return (
    <>
    <BatchHistoryCard />
    <div class="box mt-12 bg-[#FFFFFF] border border-1 border-[#DCDADA] rounded-xl mx-10
     h-[107px] flex items-center">
        <div class=" w-[100%] flex  justify-around ">
            <ul>
                <li class="flex justify-center font-medium mb-2 ">Product ID</li>
                <li class="flex justify-center">VG-123</li>
            </ul>
            <ul>
                <li class="flex justify-center font-medium mb-2  ">Product Name</li>
                <li class=" flex justify-center">Tomato</li>
            </ul>
            <ul>
                <li class="flex justify-center font-medium mb-2  ">Batche No</li>
                <li class=" flex justify-center">VG0523-111</li>
            </ul>
            <ul>
                <li class="flex justify-center font-medium mb-2  ">Type</li>
                <li class=" flex justify-center">CTN x12</li>
            </ul>
            <ul>
                <li class="flex justify-center font-medium mb-2  ">Total Products</li>
                <li class=" flex justify-center">500</li>
            </ul>
            <ul>
                <li class="flex justify-center font-medium mb-2  ">Batch-Activation</li>
                <li class="flex justify-center text-[#2DA157]">29/06/2024</li>
            </ul>
            <ul>
                <li class="flex justify-center font-medium mb-2  ">Batch-Closed</li>
                <li class="flex justify-center text-[#FE5555]">28/07/2024</li>
            </ul>
            <ul>
                <li class="flex justify-center font-medium mb-2 ">Details</li>
                <button class="text-sm bg-[#FAAE4B] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg">Open</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default BatchHistory2