import { useEffect, useState } from 'react'
import Pagination from './Pagination/Pagination'
const CustomizeCard = ({ att1, att2, att3, att4, att5, att6, att7, attb1, attb2, attb3, gap , image , noimage }) => {
    const [data, setData] = useState([])
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
            {currentProducts.map((e) => (
                <div className={`flex xl:gap-12 2xl:gap-${gap ? gap : "24"} items-center bg-white  rounded-2xl mx-10 mt-10`}>
                    <div>
                        {
                            noimage ? "" :          
                            
                            <img src={`${image ? '/assets/images/profile.png' :"/assets/images/dashboard/tomatoProduct.png"}`} alt="" className='w-32' />

                        }
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{att1}</h1>
                        <h3 className="text-2xl font-medium mt-5">VG-123</h3>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">{att2}</h1>
                        <h3 className="text-2xl font-medium mt-5">VN-123</h3>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{att3}</h1>
                        <h3 className="text-2xl font-medium mt-5">DD-MM-YY</h3>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{att4}</h1>
                        <h3 className="text-2xl font-medium mt-5 ">3</h3>
                    </div>
                 {
                    att5 && 
                    <div>
                    <h1 className="text-2xl font-bold">{att5}</h1>
                    <h3 className="text-xl font-medium mt-5 text-red-600">10</h3>
                </div>
                 }
                    {
                        att6 &&  <div>
                        <h1 className="text-2xl font-bold">{att6}</h1>
                        <h3 className="text-2xl font-medium mt-5 ">3</h3>
                    </div>
                    }
                    {
                        att7 &&  <div>
                        <h1 className="text-2xl font-bold">{att7}</h1>
                        <h3 className="text-2xl font-medium mt-5 ">3</h3>
                    </div>
                    }
                    {
                        attb1 && 
                        <div>
                            <h1 className="text-2xl font-bold">{attb1}</h1>
                            <h3 className="text-2xl font-medium mt-5 text-[#2DA157]">10</h3>
                        </div>
                    }
                    <div>
                        <h1 className="text-2xl font-bold">{attb2}</h1>
                        <h3 className="text-xl font-medium mt-5 bg-[#7179E0] px-3 rounded-xl py-1 text-white text-center">open</h3>
                    </div>
                    {
                        attb3 && <div>
                            <h1 className="text-2xl font-bold">{attb3}</h1>
                            <h3 className="text-xl font-medium mt-5 bg-red-600 px-3 rounded-xl py-1 text-white text-center">Reject</h3>
                        </div>
                    }
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

export default CustomizeCard