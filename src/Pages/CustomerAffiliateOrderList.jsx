import React, { useState, useEffect } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import FilterComponent from '../components/Filter Component/FilterComponent';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import Pagination from '../components/Pagination/Pagination';

const CustomerAffiliateOrderList = () => {
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
                    <Link to='/allRegisteredCoustomers' className={`${location.pathname === '/allRegisteredCoustomers' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Customer's Affiliates list</Link>
                    <Link to='/coustomerAffiliateDetails' className={`${location.pathname === '/coustomerAffiliateDetails' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />   Customer's Affiliate Details</Link>
                    <Link to='/coustomerAffiliateOrderList' className={`${location.pathname === '/coustomerAffiliateOrderList' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />    Customer's Affiliate orders list</Link>
                </div>
                <FilterComponent />
            </div>

            <div className='mt-10'>
                {currentProducts.map((e) => (
                    <div class="box mt-12 bg-[#FFFFFF] border border-1 border-[#DCDADA] rounded-xl mx-10
                    h-[107px] flex items-center">
                       <div class=" w-[100%] flex  justify-around px-4 ">
                           <ul>
                               <li class="flex justify-center font-bold mb-2 ">Order No</li>
                               <li class="flex justify-center">1234</li>
                           </ul>
                           <ul>
                               <li class="flex justify-center font-bold mb-2  ">Customer ID</li>
                               <li class=" flex justify-center">CA-1234</li>
                           </ul>
                           <ul>
                               <li class="flex justify-center font-bold mb-2  ">Customer Name</li>
                               <li class=" flex justify-center">Ibrahim Khan</li>
                           </ul>
                           <ul>
                               <li class="flex justify-center font-bold mb-2  ">Date</li>
                               <li class=" flex justify-center">26/05/2023</li>
                           </ul>
                           <ul>
                               <li class="flex justify-center font-bold mb-2  ">No of Products</li>
                               <li class=" flex justify-center">10</li>
                           </ul>
                           <ul>
                               <li class="flex justify-center font-bold mb-2  ">Worth of order</li>
                               <li class="flex justify-center">2010</li>
                           </ul>
                           <ul>
                               <li class="flex justify-center font-bold mb-2  ">Commision</li>
                               <li class="flex justify-center text-[#2DA157]">05</li>
                           </ul>
                           <ul>
                               <li class="flex justify-center font-bold mb-2 ">More Details</li>
                               <Link
                               to="/coustomerAffiliateOrderListDetails"
                               >
                               <button class="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg">Open</button>
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

export default CustomerAffiliateOrderList