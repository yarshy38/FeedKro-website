import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaGreaterThan } from 'react-icons/fa6'

export default function BatchHistoryDetail() {
    return (
        <>
            <div className='mx-10 mt-7'>
                <div className='flex space-x-9 items-center'>
                    <h1 className="text-2xl font-bold text-[#8C8C8C]">Customer Dashboard</h1>
                    <h1 className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} /> Archived Product Sales History</h1>
                    <h1 className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} /> Product History</h1>
                    <h1 className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} />Batch History</h1>
                    <h1 className="text-2xl font-bold gap-2 flex items-center"><FaGreaterThan size={17} /> Batch History Details</h1>
                </div>
            </div>

            <div className='px-[95px]'>

                <div className='my-[92px] font-bold text-2xl'>Batch History</div>

                <div className='flex flex-col gap-8'>


                    <div className='h-[300px] bg-white rounded-xl shadow py-[50px] px-[88px]'>
                        <div className='grid grid-cols-2 gap-96'>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between gap-64'>
                                    <div className='font-bold text-black text-xl'>Product ID</div>
                                    <div className='text-lg font-bold'>VG-123</div>
                                </div>

                                <div className='flex justify-between gap-24'>
                                    <div className='font-bold text-black text-xl'>Product Name</div>
                                    <div className='text-lg font-bold'>Tomato</div>
                                </div>

                                <div className='flex justify-between gap-24'>
                                    <div className='font-bold text-black text-xl'>Category</div>
                                    <div className='text-lg font-bold'>Vegetables</div>
                                </div>

                                <div className='flex justify-between gap-24'>
                                    <div className='font-bold text-black text-xl'>Brand</div>
                                    <div className='text-lg font-bold'>Vegetables</div>
                                </div>

                            </div>


                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between gap-64'>
                                    <div className='font-bold text-black text-xl'>Vendor ID</div>
                                    <div className='text-lg font-bold'>VG-123</div>
                                </div>

                                <div className='flex justify-between gap-24'>
                                    <div className='font-bold text-black text-xl'>Vendor Name</div>
                                    <div className='text-lg font-bold'>Tomato</div>
                                </div>

                                <div className='flex justify-between gap-24'>
                                    <div className='font-bold text-black text-xl'>Unit</div>
                                    <div className='text-lg font-bold'>Vegetables</div>
                                </div>

                                <div className='flex justify-between gap-24'>
                                    <div className='font-bold text-black text-xl'>Max Sell Range</div>
                                    <div className='text-lg font-bold'>Vegetables</div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className='h-[350px] bg-white rounded-xl shadow py-[50px] px-[88px]'>
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



                    <div className='h-[350px] bg-white rounded-xl shadow py-[50px] px-[88px]'>
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

                    <div className='h-[400px] bg-white rounded-xl shadow py-[50px] px-[88px] mb-10'>
                        <div className='flex items-center flex-col'>
                            <div className='flex justify-between gap-24'>
                                <div className='text-black text-2xl mt-4'>Payout Clearance</div>
                                <div className='flex gap-4 items-center'>
                                    <div className='text-2xl border border-green-500 px-4'>5</div>
                                    <div className='text-2xl text-black'>days</div>
                                    <div className='text-4xl ms-3 text-green-500'><FaEdit /></div>
                                </div>
                            </div>
                            <div>
                                <button className='px-[130px] py-[22px] bg-[#FAAE4B] mt-[111px] rounded-full text-2xl text-white'>Clear Now</button>
                            </div>
                        </div>
                    </div>


                </div>




            </div>
        </>
    )
}
