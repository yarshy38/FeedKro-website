import React from 'react'
import { FaGreaterThan } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function BatchHistory() {
  return (
    <>
      <div className='mx-10 mt-7'>
        <div className='flex space-x-9 items-center'>
          <Link to='/' className="text-2xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
          <Link to='/' className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} />Shelf setting</Link>
          <Link to='/all-products' className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} />All Products</Link>
          <Link className="text-2xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={17} />Tomato</Link>
          <Link className="text-2xl font-bold gap-2 flex items-center"><FaGreaterThan size={17} />Batch History</Link>
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


        </div>

        {/* Review Section */}
        <div className='my-[92px] font-bold text-2xl'>Batch Reviews</div>

        <div className='flex items-center gap-6'>

          <div>
            <img className='w-[115px] h-[112px]' src="./assets/images/batch-history/review-profile.png" alt="" />
          </div>

          <div className='w-full'>

            {/* name and date */}
            <div className='flex justify-between  mt-20'>
              <div className='text-2xl font-bold'>Name of User</div>
              <div className='text-xl'>04/05/2023</div>
            </div>

            {/* rating */}
            <div className='mt-2'>
              {/* md */}
              <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>

            {/* description */}
            <div className='text-2xl mt-12 mb-8'>
              The message from the user will appear here in this format. While the size of the text boxdepends on the length of the text.
            </div>

            <hr className='border-2' />

          </div>

        </div>
        <div className='flex items-center gap-6'>

          <div>
            <img className='w-[115px] h-[112px]' src="./assets/images/batch-history/review-profile.png" alt="" />
          </div>

          <div className='w-full'>

            {/* name and date */}
            <div className='flex justify-between  mt-20'>
              <div className='text-2xl font-bold'>Name of User</div>
              <div className='text-xl'>04/05/2023</div>
            </div>

            {/* rating */}
            <div className='mt-2'>
              {/* md */}
              <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>

            {/* description */}
            <div className='text-2xl mt-12 mb-8'>
              The message from the user will appear here in this format. While the size of the text boxdepends on the length of the text.
            </div>

            <hr className='border-2' />

          </div>

        </div>
        <div className='flex items-center gap-6'>

          <div>
            <img className='w-[115px] h-[112px]' src="./assets/images/batch-history/review-profile.png" alt="" />
          </div>

          <div className='w-full'>

            {/* name and date */}
            <div className='flex justify-between  mt-20'>
              <div className='text-2xl font-bold'>Name of User</div>
              <div className='text-xl'>04/05/2023</div>
            </div>

            {/* rating */}
            <div className='mt-2'>
              {/* md */}
              <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>

            {/* description */}
            <div className='text-2xl mt-12 mb-8'>
              The message from the user will appear here in this format. While the size of the text boxdepends on the length of the text.
            </div>

            <hr className='border-2' />

          </div>

        </div>


      </div>
    </>
  )
}
