import React, { useState, useEffect } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import FilterComponent from '../components/Filter Component/FilterComponent';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import { VscChevronDown } from "react-icons/vsc";
import { IoMdTrash } from "react-icons/io";

const AllFaqsList = () => {
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
                    <Link to='/allfaqs' className={`${location.pathname === '/allfaqs' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  All Faqs List</Link>

                </div>
                <FilterComponent />
            </div>


            <div className='mt-10'>
                {currentProducts.map((e) => (
                    <>
                        <div class="box mt-12 bg-[#FFFFFF] border border-1 border-[#DCDADA] rounded-xl mx-10 h-[107px] flex flex-row justify-between items-center">
                            <div class="w-[40%] flex  justify-around  ">
                                <ul>
                                    <li class="flex justify-center font-semibold mb-2 ">Date</li>
                                    <li class="flex justify-center">21/06/2030</li>
                                </ul>
                                <ul>
                                    <li class="flex justify-center font-semibold mb-2  ">What is your question?</li>
                                    <li class=" flex justify-center">Your answer is here.</li>
                                </ul>
                            </div>
                            <div class="icons w-[15%] flex gap-12 me-2 items-center">
                                <input type="checkbox" className="toggle" checked />
                                <IoMdTrash className='text-red-500' size={50} />
                                <VscChevronDown size={50} />
                            </div>
                        </div>

                    </>
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

export default AllFaqsList