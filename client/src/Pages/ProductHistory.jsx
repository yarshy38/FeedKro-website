import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import ProductHistoryCard from '../components/Product History/ProductHistoryCard';
import { Link } from 'react-router-dom';
const ProductHistory = () => {
  return (
<>
<div className='flex space-x-9 items-center mt-7 ml-14'>
                <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                <Link to='/sale' className="text-xl font-bold text-[#8C8C8C] gap-2 flex items-center"><FaGreaterThan size={13} />Archived Product Sales History</Link>
                <Link className="text-xl font-bold gap-2 flex items-center"><FaGreaterThan size={13} />Product History</Link>
    </div>
    <div>
        <ProductHistoryCard />
    </div>
</>
  )
}

export default ProductHistory