import {useEffect , useState} from 'react'
import { FaRegEdit } from "react-icons/fa";
import Pagination from '../Pagination/Pagination'
import { Link } from 'react-router-dom';
const VendorCard = () => {
  const [ data , setData ] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await fetch("/allCategories.json");
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
    {currentProducts.map((e)=>(
        <div className='flex xl:gap-12 2xl:gap-24  items-center bg-white  rounded-2xl mx-10 mt-10'>
        <div>
          <img src="/assets/images/dashboard/tomatoProduct.png" alt="" className='w-32'/>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Product ID</h1>
          <h3 className="text-2xl font-medium mt-5">VG-123</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Product Name</h1>
          <h3 className="text-2xl font-medium mt-5">tomato</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Vendor ID</h1>
          <h3 className="text-2xl font-medium mt-5">VN-123</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Total items</h1>
          <h3 className="text-2xl font-medium mt-5 ">3</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">left Items</h1>
          <h3 className="text-xl font-medium mt-5 text-red-600">3</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Active Batch No</h1>
          <h3 className="text-2xl font-medium mt-5 text-[#2DA157]">3</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Product Details</h1>
          <Link
          to="product"
          >
          <h3 className="text-xl font-medium mt-5 bg-[#7179E0] px-3 rounded-xl py-1 text-white text-center">open</h3>
          </Link>
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

export default VendorCard