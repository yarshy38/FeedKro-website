import {useEffect , useState} from 'react'
import { FaRegEdit } from "react-icons/fa";
import Pagination from '../Pagination/Pagination'
import { Link } from 'react-router-dom';
const SpecificProductCard = () => {
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
        <div class="box mt-12 bg-[#FFFFFF] border border-1 border-[#DCDADA] rounded-xl mx-10
        h-[107px] flex items-center">
           <div class=" w-[100%] flex  justify-around ">
               <ul>
                   <li class="flex justify-center font-medium mb-2 ">Product ID</li>
                   <li class="flex justify-center">VG-123</li>
               </ul>
               <ul>
                   <li class="flex justify-center font-medium mb-2  ">Batch No</li>
                   <li class=" flex justify-center">VG0523-111</li>
               </ul>
               <ul>
                   <li class="flex justify-center font-medium mb-2  ">Type</li>
                   <li class=" flex justify-center">CTN x12</li>
               </ul>
               <ul>
                   <li class="flex justify-center font-medium mb-2  ">Total Products</li>
                   <li class=" flex justify-center">500</li>
               </ul>
               <ul>
                   <li class="flex justify-center font-medium mb-2  ">Batch Entry</li>
                   <li class=" flex justify-center">28/06/2024</li>
               </ul>
               <ul>
                   <li class="flex justify-center font-medium mb-2  ">Batch-Activation</li>
                   <li class="flex justify-center text-[#2DA157]">29/06/2024</li>
               </ul>
               <ul>
                   <li class="flex justify-center font-medium mb-2  ">Batch-Closed</li>
                   <li class="flex justify-center text-[#FE5555]">28/07/2024</li>
               </ul>
               <ul>
                   <li class="flex justify-center font-medium mb-2 ">Details</li>
                   <Link
                   to="/batch-history"
                   >
                   <button class="text-sm bg-[#FAAE4B] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg">Open</button>
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

export default SpecificProductCard