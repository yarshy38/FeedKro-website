import React, { useState, useEffect } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import FilterComponent from '../components/Filter Component/FilterComponent';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import Pagination from '../components/Pagination/Pagination';

const CustomerAffiliateList = () => {
    const location = useLocation();
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await fetch("/allProducts.json");
                const data = await response.json();
                setData(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    // Logic to get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
            <div className='flex justify-between mx-10 mt-7'>
                <div className='flex space-x-9 items-center'>
                   <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>  
                   <Link className={`${location.pathname === '/coustomerAffiliateList' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Customer's Affiliates list</Link>

                </div>
                <FilterComponent />
            </div>

            <div className='mt-10'>
                {currentProducts.map((e) => (
                    <div className="box mt-12 bg-[#FFFFFF] border border-1 border-[#DCDADA] rounded-xl mx-16
                    h-[107px] flex items-center">
               
                       <div className="image w-[15%] flex justify-center">
                           <img className="w-[90px] h-[90px]" src={e.imagePath} alt="" />

                       </div>
                       <div className="w-[85%] flex  justify-between mx-8 ">
                           <ul>
                               <li className="flex justify-center font-bold mb-2">Customer ID</li>
                               <li className="flex justify-center">C1234</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-bold mb-2  ">Customer Name</li>
                               <li className=" flex justify-center">Mr. Khan</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-bold mb-2  ">Total Affiliates</li>
                               <li className=" flex justify-center">100</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-bold mb-2  ">Active</li>
                               <li className=" flex justify-center  text-[#2DA157]">45</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-bold mb-2  ">Inactive</li>
                               <li className=" flex justify-center">55</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-bold mb-2  ">Coins wallet</li>
                               <li className=" flex justify-center  text-[#2DA157]">2000 FC</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-bold mb-2 ">Detail</li>
                               <Link
                               to="/coustomerAffiliateDetails"
                               >
                               <button className="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg">Open</button>
                               </Link>
                           </ul>
                       </div>
                   </div>
                ))}
            </div>
            <div className='mt-10'>
                <Pagination
                    currentPage={currentPage}
                    productsPerPage={productsPerPage}
                    totalProducts={data.length}
                    paginate={paginate}
                />
            </div>

        </>
    )
}

export default CustomerAffiliateList