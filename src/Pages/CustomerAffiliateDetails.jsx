import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FaGreaterThan } from "react-icons/fa6";
import Pagination from '../components/Pagination/Pagination';
const CustomerAffiliateDetails = () => {
    const location  = useLocation()
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
                    <Link to='/allRegisteredCoustomers' className={`${location.pathname === '/coustomerAffiliateDetails' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />   Customer's Affiliate Details</Link>
                </div>

            </div>

            <h1 className="px-20 pt-8  font-bold text-2xl">Customer's Affiliate Details</h1>
    <div className="box1 mt-12 bg-[#FFFFFF] h-[200px] w-[85%] rounded-lg flex flex-row justify-between mx-auto px-20">
        <div className="box1-1 flex flex-row justify-around items-center w-[40%]">
            <div className="box1-1-1">
                <ul className="font-semibold">
                    <li className="pb-2">Partner ID</li>
                    <li className="pb-2">Contact No</li>
                    <li className="pb-2">Password</li>
                    <li className="pb-2">Address</li>
                    <li className="pb-2">Partner Type</li>
                </ul>
            </div>
            <div className="box1-1-2">
                <ul>
                    <li className="pb-2">FP-123</li>
                    <li className="pb-2">0313 1234567</li>
                    <li className="pb-2"></li>
                    <li className="pb-2">House 23, street 7 hayatabad</li>
                    <li className="pb-2 text-[#FE5555]">FCP</li>
                </ul>
            </div>
        </div>
        <div className="box1-2 flex flex-row justify-around items-center w-[40%]">
            <div className="box1-2-1">
                <ul className="font-semibold">
                    <li className="pb-2">Customer Name</li>
                    <li className="pb-2">CNIC No</li>
                    <li className="pb-2">Email</li>
                    <li className="pb-2">Location</li>
                    <li className="pb-2">Date of joining</li>
                </ul>
            </div>
            <div className="box1-2-2">
                <ul>
                    <li className="pb-2">Mr. Khan</li>
                    <li className="pb-2">17301-1234567-1</li>
                    <li className="pb-2">abc@gmail.com</li>
                    <li className="pb-2">Peshawar</li>
                    <li className="pb-2">05/02/2023</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="box1 mt-4 bg-[#FFFFFF] h-[200px] w-[85%] rounded-lg flex flex-row justify-between mx-auto px-10">
        <div className="box1-1 flex flex-row justify-around items-center w-[40%]">
            <div className="box2-1-1">
                <ul className="font-semibold">
                    <li className="pb-2">Total Affiliates</li>
                    <li className="pb-2">Active Affiliates</li>
                    <li className="pb-2">Inactive Affiliates</li>
                    <li className="pb-2">Active month</li>
                </ul>
            </div>
            <div className="box2-1-2">
                <ul>
                    <li className="pb-2">100</li>
                    <li className="pb-2 text-[#2DA157]">45</li>
                    <li className="pb-2">55</li>
                    <li className="pb-2">12/06/2023</li>
                </ul>
            </div>
        </div>
        <div className="box1-2 flex flex-row justify-around items-center w-[40%]">
            <div className="box2-2-1">
                <ul className="font-semibold">
                    <li className="pb-2">Life time Earnings</li>
                    <li className="pb-2">Total active coins</li>
                    <li className="pb-2">Coins Used</li>
                    <li></li>
                </ul>
            </div>
            <div className="box2-2-2">
                <ul>
                    <li className="pb-2">5000 FC</li>
                    <li className="pb-2 text-[#2DA157]">2000 FC</li>
                    <li className="pb-2 text-[#FE5555]">3000 FC</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>

    <h1 className="px-20 pt-12  font-bold text-2xl">Total affiliates of this customer</h1>
    {currentProducts.map((e) => (
                    <div className="box mt-12 bg-[#FFFFFF] border border-1 border-[#DCDADA] rounded-xl mx-16
                    h-[107px] flex items-center">
                       <div className="image w-[15%] flex justify-center">
                           <img className="w-[80px] h-[80px]" src="profil.png" alt="" />
                       </div>
                       <div className="w-[85%] flex  justify-between mx-8 ">
                           <ul>
                               <li className="flex justify-center font-semibold mb-2">Customer ID</li>
                               <li className="flex justify-center">C1234</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-semibold mb-2  ">Customer Name</li>
                               <li className=" flex justify-center">Mr. Khan</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-semibold mb-2  ">Total Orders</li>
                               <li className=" flex justify-center">100</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-semibold mb-2  ">Earnings</li>
                               <li className=" flex justify-center">2500</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-semibold mb-2  ">Status</li>
                               <li className=" flex justify-center  text-[#2DA157]">Active</li>
                           </ul>
                           <ul>
                               <li className="flex justify-center font-semibold mb-2 ">Detail</li>
                               <Link 
                               to="/coustomerAffiliateOrderList"
                               >
                               <button className="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg">Open</button>
                               </Link>
                           </ul>
                       </div>
                   </div>
                ))}
        
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

export default CustomerAffiliateDetails