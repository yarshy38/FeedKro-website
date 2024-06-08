import {useEffect , useState} from 'react'
import { FaRegEdit } from "react-icons/fa";
import Pagination from '../Pagination/Pagination'
const ProductHistoryCard = () => {
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
    h-[117px] flex items-center">

       <div class="image w-[18%] flex justify-center">
           <img class="w-[113px] h-[108px]" src="assets/images/dashboard/tomatoProduct.png" alt="" />
       </div>
       <div class="w-[80%] flex  justify-around ">
           <ul>
               <li class="flex justify-center font-medium mb-2 ">Product ID</li>
               <li class="flex justify-center">VG-123</li>
           </ul>
           <ul>
               <li class="flex justify-center font-medium mb-2  ">Product Name</li>
               <li class=" flex justify-center">Tomato</li>
           </ul>
           <ul>
               <li class="flex justify-center font-medium mb-2  ">Total Batches</li>
               <li class=" flex justify-center">100</li>
           </ul>
           <ul>
               <li class="flex justify-center font-medium mb-2  ">Cleared</li>
               <li class=" flex justify-center text-[#2DA157]">90</li>
           </ul>
           <ul>
               <li class="flex justify-center font-medium mb-2  ">Pending</li>
               <li class=" flex justify-center text-[#FE5555]">10</li>
           </ul>
           <ul>
               <li class="flex justify-center font-medium mb-2  ">Status</li>
               <li class="flex justify-center text-[#2DA157]">Active</li>
           </ul>
           <ul>
               <li class="flex justify-center font-medium mb-2 ">Products Detail</li>
               <button class="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg ">Open</button>
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

export default ProductHistoryCard