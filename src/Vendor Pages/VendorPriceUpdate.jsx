import React, { useState } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import VendorPriceCard from '../components/VendorPriceCard';
import { Link } from 'react-router-dom';
const VendorPriceUpdate = () => {
  const [showDropdown, setShowDropdown] = useState('hidden')
  const [showSearch, setShowSearch] = useState('hidden')
  const [showFilter, setShowFilter] = useState('flex')
  const handleChange = () =>{
    setShowDropdown('hidden')
    setShowFilter('hidden')
    setShowSearch('flex')
    
  }
  return (
    <>
      <div className='flex justify-between mx-10 mt-7'>
        <div className='flex space-x-9 items-center'>
          <Link to='/vendor' className="text-2xl font-bold text-[#7640AC] opacity-50">Vendor Dashboard</Link>
          <Link to='/vendor' className="text-2xl font-bold text-[#7640AC] opacity-50 gap-2 flex items-center"><FaGreaterThan size={17} />Listed Products</Link>
          <Link className="text-2xl font-bold gap-2 text-[#7640AC] flex items-center"><FaGreaterThan size={17} />Price Updates</Link> 
     </div>
        <div className='flex gap-14 me-20'>
          <div className='flex items-center pl-2 pe-6'>
            <h4 className={`${showFilter} text-xl text-[#8C8C8C]  items-center gap-4  shadow-2xl border-[1px] border-[#8C8C8C] bg-white pe-6`} onClick={(() => setShowDropdown(''))}><CiFilter size={30} /> Filter</h4>
            <div className={`${showSearch} items-center  relative left-32 z-0 text-xl text-[#8C8C8C] h-16  shadow-2xl border-[1px] border-[#8C8C8C] bg-white transition ease-in-out duration-1000`}>
              <i><IoSearchOutline size={30} /></i><input className="outline-none" placeholder='Search' />
            </div>
          </div>
          {/* dropdown onlick */}
          <div className={`${showDropdown} absolute bg-white p-2 w-64 space-y-2 transition ease-in-out duration-1000`}>
            <h1 className='text-2xl font-medium text-[#8C8C8C]' onClick={handleChange}>Customer ID</h1>
            <h1 className='text-2xl font-medium text-[#8C8C8C]' onClick={handleChange}>Name</h1>
            <h1 className='text-2xl font-medium text-[#8C8C8C]' onClick={handleChange}>Contact No</h1>
            <h1 className='text-2xl font-medium text-[#8C8C8C]' onClick={handleChange}>Email</h1>
            <h1 className='text-2xl font-medium text-[#8C8C8C]' onClick={handleChange}>Location</h1>
          </div>
          <div>
            <FiPlusCircle size={38} className='text-red-600 relative z-10 ' />
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <VendorPriceCard />
      </div>


    </>
  )
}

export default VendorPriceUpdate