import { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FilterComponent from '../../components/FilterComponent';


const TransactionRequestPartner = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("/data.json")
        const wholeData = await data.json();
        console.log(wholeData)
        setrowData(wholeData)
    }

    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mb-12 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/partner' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%]">Partner Dashboard</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Transaction Requests</Link>
                </div>
                <div>
                    <FilterComponent />
                </div>
            </div>
            {
                rowData && rowData.map((e) => (
                    <div class="bg-[#FFFFFF] w-[90%] h-[100px] mb-4 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
                        <div className="w-[10%]">
                            <img className="w-[80px] h-[80px]" src="/assets/images/profile.png" alt="" />
                        </div>
                        <div class="flex flex-row justify-between w-[90%]">
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Partner ID</li>
                                <li class="flex justify-center">FSP-1234</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Partner Name</li>
                                <li class="flex justify-center">Mr. Khan</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Date</li>
                                <li class="flex justify-center">24/07/2023</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Transaction Request</li>
                                <li class="flex justify-center text-[#2DA157]">2000 FC</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Pay Here</li>
                                <Link
                                to="transacrequestdetail"
                                >
                                <button class="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
                            ">Open</button>
                                </Link>

                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TransactionRequestPartner