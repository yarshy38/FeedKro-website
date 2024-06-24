import { useState, useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FilterComponent from "../component/FilterComponent";

const VendorWallet = () => {
  const [rowData, setrowData] = useState();
  const fetchData = async () => {
    const data = await fetch("/data.json");
    const wholeData = await data.json();
    console.log(wholeData);
    setrowData(wholeData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-row justify-between mt-8 mb-12 mx-10">
        <div className="flex flex-row justify-center items-center">
          <Link
            to="/vendor"
            className="mr-5 text-[#7640AC] text-xl font-bold opacity-[50%]"
          >
            Vender Dashboard
          </Link>
          <Link className="mr-5 text-[#7640AC] text-xl font-bold opacity-[100%] flex flex-row items-center">
            <FaGreaterThan size={15} className="mx-2" />
            Venders Wallets
          </Link>
        </div>
        <div>
          <FilterComponent />
        </div>
      </div>
      {rowData &&
        rowData.map((e) => (
          <div class="bg-[#FFFFFF] w-[90%] h-[100px] mb-4 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
            <div className="w-[10%]">
              <img
                className="w-[80px] h-[80px]"
                src="/assets/images/profile.png"
                alt="image"
              />
            </div>
            <div class="flex flex-row justify-between w-[90%]">
              <ul>
                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">
                  Vender ID
                </li>
                <li class="flex justify-center">V-1234</li>
              </ul>
              <ul>
                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">
                  Vender Name
                </li>
                <li class="flex justify-center">Mr. Khan</li>
              </ul>
              <ul>
                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">
                  Lifetime Batches
                </li>
                <li class="flex justify-center">147</li>
              </ul>
              <ul>
                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">
                  Lifetime Earning
                </li>
                <li class="flex justify-center">150k</li>
              </ul>
              <ul>
                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">
                  Pending Payments
                </li>
                <li class="flex justify-center text-[#FE5555]">20k</li>
              </ul>
              <ul>
                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">
                  Cleared Payments
                </li>
                <li class="flex justify-center text-[#2DA157]">2000 FC</li>
              </ul>
              <ul>
                <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">
                  Detail
                </li>
                <Link
                to="vendorwalletdetail"
                >
                <button
                  class="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg">
                  Open
                </button>
                </Link>

              </ul>
            </div>
          </div>
        ))}
    </>
  );
};

export default VendorWallet;
