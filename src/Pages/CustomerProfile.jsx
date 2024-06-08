import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
const CustomerProfile = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex justify-between mx-10 mt-7">
        <div className="flex space-x-9 items-center">
          <Link to="/" className="text-xl font-bold text-[#8C8C8C]">
            Customer Dashboard
          </Link>
          <Link
            to="/allRegisteredCoustomers"
            className={`${
              location.pathname === "/allRegisteredCoustomers"
                ? "text-black"
                : "text-[#8C8C8C]"
            } text-xl font-bold gap-2 flex items-center`}
          >
            <FaGreaterThan size={17} /> All Registered Customers
          </Link>
          <Link
            to="/allRegisteredCoustomers"
            className={`${
              location.pathname === "/coustomerProfile"
                ? "text-black"
                : "text-[#8C8C8C]"
            } text-xl font-bold gap-2 flex items-center`}
          >
            <FaGreaterThan size={17} /> Customer Profile
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center mt-24 mb-10">
        <div className=""><img className="h-32 w-32 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww" alt="" /></div>
        <div className="text-3xl">Name of Customer</div>
      </div>


      <div class="box mt-8 h-[560] flex flex-row justify-between mx-20">
        <div class="box1 mt-2 bg-[#FFFFFF] w-[52%] h-[210px] flex flex-row justify-around items-center rounded-lg">
          <div>
            <ul class="space-y-2">
              <li class="text-[#444444] text-xl opacity-[100%]">Customer ID</li>
              <li class="text-[#444444] text-xl opacity-[100%]">Email</li>
              <li class="text-[#444444] text-xl opacity-[100%]">Contact</li>
              <li class="text-[#444444] text-xl opacity-[100%]">Address</li>
              <li class="text-[#444444] text-xl opacity-[100%]">Password</li>
            </ul>
          </div>
          <div>
            <ul class="space-y-2">
              <li class="text-[#444444] text-xl opacity-[100%]">CT-23-12</li>
              <li class="text-[#444444] text-xl opacity-[100%]">
                abc@gmail.com
              </li>
              <li class="text-[#444444] text-xl opacity-[100%]">
                0312-1234567
              </li>
              <li class="text-[#444444] text-xl opacity-[100%]">
                Hayatabad phase 2 Peshawar
              </li>
              <li class="text-[#444444] text-xl opacity-[100%]"></li>
            </ul>
          </div>
        </div>
        <div
          class="box2 mt-2 bg-[#FFFFFF] w-[40%] h-[210px] flex flex-row justify-around items-center
            rounded-lg"
        >
          <div>
            <ul>
              <li class="text-[#444444] text-xl opacity-[100%]">
                Orders completed
              </li>
              <li class="text-[#444444] text-xl opacity-[100%]">
                Canceled orders
              </li>
              <li class="text-[#444444] text-xl opacity-[100%]">
                Total no of affiliates
              </li>
              <li class="text-[#444444] text-xl opacity-[100%]">
                Total spending
              </li>
              <li class="text-[#444444] text-xl opacity-[100%]">Savings</li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="text-[#444444] text-xl opacity-[100%]">35</li>
              <li class="text-[#444444] text-xl opacity-[100%]">05</li>
              <li class="text-[#444444] text-xl opacity-[100%]">30</li>
              <li class="text-[#444444] text-xl opacity-[100%]">45k</li>
              <li class="text-[#444444] text-xl opacity-[100%]">5k</li>
            </ul>
          </div>
        </div>
      </div>

      <h1 class="text-[#444444] text-2xl font-medium mt-12 flex justify-center items-center">
        Performance
      </h1>

      <div className="flex justify-center mt-28">
        <div>
            {/* performance  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1276"
            height="155"
            viewBox="0 0 1276 155"
          >
            <g
              id="Group_117"
              data-name="Group 117"
              transform="translate(0.232 0.935)"
            >
              <rect
                id="Rectangle_102"
                data-name="Rectangle 102"
                width="391"
                height="19"
                rx="5"
                transform="translate(-0.232 67.065)"
                fill="#faae4b"
              />
              <rect
                id="Rectangle_103"
                data-name="Rectangle 103"
                width="521"
                height="19"
                rx="5"
                transform="translate(390.768 67.065)"
                fill="#3ac66c"
              />
              <rect
                id="Rectangle_104"
                data-name="Rectangle 104"
                width="364"
                height="19"
                rx="5"
                transform="translate(911.768 67.065)"
                fill="#915ebf"
              />
              <text
                id="_0"
                data-name="0"
                transform="translate(-0.232 137.065)"
                fill="#444"
                font-size="41"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  0
                </tspan>
              </text>
              <text
                id="Fair"
                transform="translate(142.768 39.065)"
                fill="#faae4b"
                font-size="37"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  Fair
                </tspan>
              </text>
              <text
                id="Good"
                transform="translate(591.768 41.065)"
                fill="#3ac66c"
                font-size="39"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  Good
                </tspan>
              </text>
              <text
                id="Excellant"
                transform="translate(1015.768 39.065)"
                fill="#915ebf"
                font-size="37"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  Excellant
                </tspan>
              </text>
              <text
                id="_10"
                data-name="10"
                transform="translate(367.768 144.065)"
                fill="#444"
                font-size="41"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  10
                </tspan>
              </text>
              <text
                id="_50"
                data-name="50"
                transform="translate(891.768 141.065)"
                fill="#444"
                font-size="38"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  50
                </tspan>
              </text>
              <path
                id="Icon_feather-triangle"
                data-name="Icon feather-triangle"
                d="M21.274,6.292,2.909,34.869A3.805,3.805,0,0,0,2.9,38.892a4.4,4.4,0,0,0,3.72,2.04h36.73a4.4,4.4,0,0,0,3.72-2.04,3.805,3.805,0,0,0-.012-4.023L28.689,6.292a4.505,4.505,0,0,0-7.415,0Z"
                transform="translate(509.282 88.763)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>
      </div>
      <div class=" mt-16 flex justify-center items-center">
        <img class="h-[100px]" src="Group 117.svg" alt="" />
      </div>
      <div class="mt-16 flex justify-center items-center text-center mb-8">
        <h1 class="w-[35%] text-[#444444] text-sm font-medium">
          Your performance status depends on the numbers of <br /> active
          affiliates. The criteria of active affiliate may vary in time
        </h1>
      </div>
    </>
  );
};

export default CustomerProfile;
