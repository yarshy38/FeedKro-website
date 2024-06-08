import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
const AllCategoriesCard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/allCategories.json");
        const data = await response.json();
        setData(data);
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
      {currentProducts.map((e) => (
        <div className="flex xl:gap-12 2xl:gap-28  items-center bg-white  rounded-2xl mx-10 mt-10">
          <div>
            <img src={e.imagePath} alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Name of Category</h1>
            <h3 className="text-2xl font-medium mt-5">{e.name}</h3>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Description</h1>
            <h3 className="text-2xl font-medium mt-5">{e.description}</h3>
          </div>
          <div>
            <h1 className="text-2xl font-bold">No of Products</h1>
            <h3 className="text-2xl font-medium mt-5">{e.products}</h3>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Status</h1>
            <h3 className="text-2xl font-medium mt-5 text-[#2DA157]">
              {e.status}
            </h3>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Products Detail</h1>
            <Link
            to="/all-products"
            >
              <h3 className="text-xl font-medium mt-5 bg-[#7179E0] px-3 rounded-xl py-1 text-white text-center">
                open
              </h3>
            </Link>
          </div>
          <Link
          to="/new-cate"
          >
            <FaRegEdit className="text-[#2DA157]" size={43} />
          </Link>
        </div>
      ))}

      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          totalProducts={data.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default AllCategoriesCard;
