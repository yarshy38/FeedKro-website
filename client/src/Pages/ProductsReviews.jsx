import React, { useState, useEffect } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import FilterComponent from '../components/Filter Component/FilterComponent';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import Pagination from '../components/Pagination/Pagination';
import { VscChevronDown } from "react-icons/vsc";
import { RxStarFilled } from "react-icons/rx";
import { RxStar } from "react-icons/rx";
const ProductsReviews = () => {
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
                    <Link to='/productswithreviewlist' className={`${location.pathname === '/productswithreviewlist' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Products With Review List</Link>
                    <Link to='/productsreveiws' className={`${location.pathname === '/productsreveiws' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Products Reviews</Link>

                </div>
                <FilterComponent />
            </div>  


            <div className='mt-10'>
                {currentProducts.map((e) => (
                    <>
                        <div class="box4 mt-12  bg-[#FFFFFF] h-[210px] w-[1190px] rounded-lg flex flex-col justify-between px-20 mx-auto">
                            <div class="box4-1 flex flex-row justify-between">
                                <div class="box4-1-1 flex flex-row items-center gap-10">
                                    <img class="w-[103px] h-[100px] mt-4" src="assets/images/profile.png" alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold ">Name Of User</h1>
                                        <div className='flex text-yellow-400 mt-2'>
                                            <RxStarFilled size={30} /><RxStarFilled size={30} /><RxStarFilled size={30} /><RxStarFilled size={30} /><RxStar size={30} />
                                        </div>
                                    </div>
                                </div>
                                <h2 class="pl-[700px] pt-4 text-gray-600">04/05/2023</h2>
                            </div>
                            <h3 class="flex justify-center  mx-auto text-xl pl-8 text-[#444444] h-[90px] w-[93%]">
                                The message from the user will appear here in this format.
                                While the size of the text box <br />depends on the length of the text.</h3>
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

export default ProductsReviews