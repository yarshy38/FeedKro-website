import {useEffect , useState} from 'react'
import { FaRegEdit } from "react-icons/fa";
import Pagination from '../Pagination/Pagination'
import { Link } from 'react-router-dom';
const AllProductsCard = () => {
  const [ data , setData ] = useState([])
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
    {currentProducts.map((e)=>(
        <div className='flex xl:gap-12 2xl:gap-20  items-center bg-white  rounded-2xl mx-10 mt-10'>
        <div className='ml-10'>
          <img src={e.imagePath} alt="" className='max-w-32'/>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Product ID</h1>
          <h3 className="text-2xl font-medium mt-5">{e.product_id}</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Product Name</h1>
          <h3 className="text-2xl font-medium mt-5">{e.name}</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Vender Price</h1>
          <h3 className="text-2xl font-medium mt-5">{e.VendorPrice}</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Trade Price</h1>
          <h3 className="text-2xl font-medium mt-5">{e.TradePrice}</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Retail Price</h1>
          <h3 className="text-2xl font-medium mt-5">{e.retailPrice}</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Status</h1>
          <h3 className="text-2xl font-medium mt-5 text-[#2DA157]">{e.status}</h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Products Detail</h1>
          <Link
          to="/specific-product"
          >
          <h3 className="text-xl font-medium mt-5 bg-[#7179E0] px-3 rounded-xl py-1 text-white text-center">Active</h3>
          </Link>
        </div>
        <div>
        <FaRegEdit className='text-[#2DA157]' size={43} />
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

export default AllProductsCard