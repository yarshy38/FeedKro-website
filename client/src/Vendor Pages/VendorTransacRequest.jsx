import { useState ,useEffect} from 'react';
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const VendorTransacRequest = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("/data.json")
        const wholeData = await data.json();
        console.log(wholeData)
        setrowData(wholeData)
    }

   useEffect(()=>{
    fetchData();
   },[])
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mb-12 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/vendor' className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%]">Vender Dashboard</Link>
                    <Link className="mr-5 text-[#7640AC] text-xl font-bold opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Transaction Requests</Link>
                </div>
            </div>
            {
                rowData && rowData.map((e) => (
                    <div class="bg-[#FFFFFF] w-[90%] h-[100px] mb-4 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
                        <div className="w-[10%]">
                            <img className="w-[80px] h-[80px]" src="/assets/images/profile.png" alt="image" />
                        </div>
                        <div class="flex flex-row justify-between w-[90%]">
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Vender ID</li>
                                <li class="flex justify-center">V-1234</li>
                            </ul>
                            <ul>
                                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Vender Name</li>
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
                                to="vendortransacrequestdetail"
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

export default VendorTransacRequest