import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FaGreaterThan } from "react-icons/fa6";

const CustomerAffiliateOrderDetails = () => {
    const location = useLocation();
  return (
    <>
        <div className='flex justify-between mx-10 mt-7'>
            <div className='flex space-x-9 items-center'>
                    <Link to='/' className="text-xl font-bold text-[#8C8C8C]">Customer Dashboard</Link>
                    <Link to='/allRegisteredCoustomers' className={`${location.pathname === '/allRegisteredCoustomers' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />  Customer's Affiliates list</Link>
                    <Link to='/coustomerAffiliateDetails' className={`${location.pathname === '/coustomerAffiliateDetails' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />   Customer's Affiliate Details</Link>
                    <Link to='/coustomerAffiliateOrderList' className={`${location.pathname === '/coustomerAffiliateOrderList' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />    Customer's Affiliate orders list</Link>
                    <Link to='/coustomerAffiliateOrderListDetails' className={`${location.pathname === '/coustomerAffiliateOrderListDetails' ? 'text-black' : 'text-[#8C8C8C]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} />     Customer's Affiliate orders details</Link>
                </div>
            </div>

            <div class="box w-[85%] h-[630px] mt-12 flex flex-row mx-auto shadow-xl">
        <div class="box-left w-[42%] flex flex-col">
            <div class="box-top bg-[#FFFFFF] h-[40%] flex flex-row justify-around py-4">
               <div class="left">
                <ul class="text-[#000000] font-semibold opacity-[100%]">
                    <li class="pb-1">Order No</li>
                    <li class="pb-1">Customer ID</li>
                    <li class="pb-1">Name of Customer</li>
                    <li class="pb-1">Address</li>
                    <li class="pb-1">Delivery Type</li>
                    <li class="pb-1">Payment Method</li>
                    <li class="pb-1">Coins Used</li>
                </ul>
               </div>
               <div class="right">
                <ul class="text-[#000000]">
                    <li class="pb-1">1234</li>
                    <li class="pb-1">CA-1234</li>
                    <li class="pb-1">Ibrahim Khan</li>
                    <li class="pb-1">Hayatabad</li>
                    <li class="pb-1">Quick</li>
                    <li class="pb-1">Easypaisa</li>
                    <li class="pb-1">100</li>
                </ul>
               </div>
            </div>
            <div class="box-botm mt-4 bg-[#FFFFFF] h-[60%] flex flex-col py-6">
                <div class="box-bot-top flex flex-row justify-around">
                <div class="left">
                    <ul class="text-[#000000] font-semibold opacity-[100%]">
                        <li class="pb-4">Payment Confirmation</li>
                        <li class="pb-4">Rider ID</li>
                        <li class="pb-4">Rider Name</li>
                        <li class="pb-4">Delivery Time</li>
                        <li class="pb-4">Delivery Date</li>
                    </ul>
                </div>
                <div class="right">
                    <ul class="text-[#000000]">
                        <li class="pb-4">Done</li>
                        <li class="pb-4">R-123</li>
                        <li class="pb-4">Daniyal</li>
                        <li class="pb-4">4:58:02 PM</li>
                        <li class="pb-4">26/05/2023</li>
                    </ul>
                </div>
            </div>
            <div class="mt-14 flex justify-center">
                <button class="text-lg bg-[#FE5555] w-[60%] h-[45px] text-[#FFFFFF] rounded-full
                             ">Delivered</button></div> 
          </div>
        </div>

        <div class="box-right ml-12 bg-[#FFFFFF] w-[54%] h-[100%] flex flex-col">
            <div class="heading flex flex-col justify-center items-center text-center">
                <h1 class="text-[#444444] text-2xl font-semibold">Receipt</h1>
                <h2 class="text-[#444444] text-xl font-semibold">ORDER NO : 1234</h2>
                <h3 class="text-[#444444] text-lg font-semibold">23-03-2023</h3>
                <h4 class="text-[#444444] text-lg font-semibold">Contact no: 03121234567</h4>
                <h4 class="text-[#444444] text-lg font-semibold">Address : House 23, street 5, Sector 7, <br />
                            phase 7 Hayatabad</h4>
            </div>
            <hr class="mt-4 mx-8" />
            <div class="items-price flex flex-row justify-between px-10 py-4">
                <div class="left">
                    <ul>
                        <li class="text-[#444444] font-semibold opacity-[100%] pb-2">ITEM</li>
                        <li class="text-[#444444]">Product 1</li>
                        <li class="text-[#444444]">Product 1</li>
                        <li class="text-[#444444]">Product 1</li>
                        <li class="text-[#444444]">Product 1</li>
                        <li class="text-[#444444]">Product 1</li>
                        <li class="text-[#444444]">Product 1</li>
                        <li class="text-[#444444]">Product 1</li>
                        <li class="text-[#444444]">Product 1</li>
                    </ul>
                </div>
                <div class="right">
                    <ul>
                        <li class="text-[#444444] font-semibold opacity-[100%] pb-2">PRICE</li>
                        <li class="text-[#444444]">Rs. 200</li>
                        <li class="text-[#444444]">Rs. 200</li>
                        <li class="text-[#444444]">Rs. 200</li>
                        <li class="text-[#444444]">Rs. 200</li>
                        <li class="text-[#444444]">Rs. 200</li>
                        <li class="text-[#444444]">Rs. 200</li>
                        <li class="text-[#444444]">Rs. 200</li>
                        <li class="text-[#444444]">Rs. 200</li>
                    </ul>
                </div>
            </div>
            <hr class="mx-8" />
            <div class="total-Rs flex flex-row justify-between px-10 py-4">
                <div class="left">
                    <ul>
                        <li class="text-[#444444] font-semibold">Total</li>
                        <li class="text-[#444444] font-semibold">Coins used</li>
                        <li class="text-[#444444] font-semibold">Delivery</li>
                        <li class="text-[#444444] font-bold opacity-[100%] pt-2">Grand Total</li>
                    </ul>
                </div>
                <div class="right">
                    <ul>
                        <li class="text-[#444444] font-semibold">Rs. 2010</li>
                        <li class="text-[#444444] font-semibold  text-right">10</li>
                        <li class="text-[#444444] font-semibold">Rs. 50</li>
                        <li class="text-[#444444] font-bold opacity-[100%] pt-2">Rs. 2050</li>
                    </ul>
                </div>
            </div>
            <div class="mx-auto text-center mt-4">
            <h1 class="text-lg font-semibold text-[#707070]">Payment method : Cash on delivery</h1>
            <h1 class="text-lg font-semibold text-[#707070]">Logo</h1>
        </div>
        </div>
    </div>
    <h1 class="px-28 pt-12  font-semibold text-2xl">Distribution</h1>
    <table class="table-fixed bg-[#FFFFFF] w-[85%] mx-auto mt-8 shadow-xl">
        <thead class="text-[#11141A] text-lg font-semibold">
          <tr>
            <th class="py-2">Product ID</th>
            <th class="py-2">Product Name</th>
            <th class="py-2">Quantity</th>
            <th class="py-2">Unit Price</th>
            <th class="py-2">Vender Price</th>
            <th class="py-2">Profit margin</th>
            <th class="py-2">Total Price</th>
            <th class="py-2">Net Margin</th>
          </tr> 
        </thead>
        <tbody class="text-center text-[#11141A] text-lg">
          <tr>
            <td class="px-2 py-2">VG-123</td>
            <td class="px-2 py-2">Tomato</td>
            <td class="px-2 py-2">5kg</td>
            <td class="px-2 py-2">40</td>
            <td class="px-2 py-2">38</td>
            <td class="px-2 py-2 text-[#2DA157]">02</td>
            <td class="px-2 py-2">200</td>
            <td class="px-2 py-2 text-[#2DA157]">10</td>
          </tr>
          <tr>
            <td class="px-2 py-2">VG-123</td>
            <td class="px-2 py-2">Tomato</td>
            <td class="px-2 py-2">5kg</td>
            <td class="px-2 py-2">40</td>
            <td class="px-2 py-2">38</td>
            <td class="px-2 py-2 text-[#2DA157]">02</td>
            <td class="px-2 py-2">200</td>
            <td class="px-2 py-2 text-[#2DA157]">10</td>
          </tr>
          <tr>
            <td class="px-2 py-2">VG-123</td>
            <td class="px-2 py-2">Tomato</td>
            <td class="px-2 py-2">5kg</td>
            <td class="px-2 py-2">40</td>
            <td class="px-2 py-2">38</td>
            <td class="px-2 py-2 text-[#2DA157]">02</td>
            <td class="px-2 py-2">200</td>
            <td class="px-2 py-2 text-[#2DA157]">10</td>
          </tr>
          <tr>
            <td class="px-2 py-2">VG-123</td>
            <td class="px-2 py-2">Tomato</td>
            <td class="px-2 py-2">5kg</td>
            <td class="px-2 py-2">40</td>
            <td class="px-2 py-2">38</td>
            <td class="px-2 py-2 text-[#2DA157]">02</td>
            <td class="px-2 py-2">200</td>
            <td class="px-2 py-2 text-[#2DA157]">10</td>
          </tr>
          <tr>
            <td class="px-2 py-2">VG-123</td>
            <td class="px-2 py-2">Tomato</td>
            <td class="px-2 py-2">5kg</td>
            <td class="px-2 py-2">40</td>
            <td class="px-2 py-2">38</td>
            <td class="px-2 py-2 text-[#2DA157]">02</td>
            <td class="px-2 py-2">200</td>
            <td class="px-2 py-2 text-[#2DA157]">10</td>
          </tr> 
        </tbody>
      </table>

      <div class="box1 mt-8 bg-[#FFFFFF] h-[120px] w-[85%] flex flex-row justify-between mx-auto shadow-xl">
        <div class="box1-1 flex flex-row justify-around items-center w-[45%]">
            <div class="box1-1-1">
                <ul class="font-semibold">
                    <li class="pb-2">No of products</li>
                    <li class="pb-2">Delivery Charges</li>
                    <li class="pb-2">Coins Used</li>
                </ul>
            </div>
            <div class="box1-1-2">
                <ul>
                    <li class="pb-2">10</li>
                    <li class="pb-2">50</li>
                    <li class="pb-2">10</li>
                </ul>
            </div>
        </div>
        <div class="box1-2 flex flex-row justify-around items-center w-[45%]">
            <div class="box1-2-1">
                <ul class="font-semibold">
                    <li class="pb-2">Total Worth of Order</li>
                    <li class="pb-2">Net worth of Order</li>
                    <li class="pb-2">Net Margin</li>
                </ul>
            </div>
            <div class="box1-2-2">
                <ul>
                    <li class="pb-2">2060</li>
                    <li class="pb-2 text-[#FE5555]">2000</li>
                    <li class="pb-2 text-[#2DA157]">100</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="2nd-table mt-8 bg-[#FFFFFF] w-[85%] h-[480px] flex flex-row justify-between mx-auto px-10 py-10 shadow-xl">
        <div class="partner">
            <ul>
                <li class="text-[#000000] font-semibold opacity-[100%] pb-4">Partner ID</li>   
                <li class="pb-2 font-semibold text-lg">FSP 123</li>   
                <li class="pb-2 font-semibold text-lg">FCP 125</li>   
                <li class="pb-2 font-semibold text-lg">FR 128</li>   
                <li class="pb-2 font-semibold text-lg">FVD 123</li>   
                <li class="pb-2 font-semibold text-lg">FMP 123</li>   
                <li class="pb-2 font-semibold text-lg">FMP 124</li>
                <li class="pb-2 font-semibold text-lg">FMP 124</li>
                <li class="pb-2 font-semibold text-lg">FMP 124</li> 
                <li class="pb-2 font-semibold text-lg">FMP 124</li>
                <li class="pb-2 font-semibold text-lg">FMP 124</li>   
            </ul>
        </div>
        <div class="Name">
            <ul class="text-center">
                <li class="text-[#000000] font-semibold opacity-[100%] pb-4">Name of Partner</li>   
                <li class="pb-2 font-semibold text-lg">Haneef Khan</li>   
                <li class="pb-2 font-semibold text-lg">Azam Shah</li>   
                <li class="pb-2 font-semibold text-lg">Muhammad Ali</li>   
                <li class="pb-2 font-semibold text-lg">Hamza</li>   
                <li class="pb-2 font-semibold text-lg">Wajahat Mufti</li>   
                <li class="pb-2 font-semibold text-lg">Maxar Khan</li>
                <li class="pb-2 font-semibold text-lg">Management 1</li>
                <li class="pb-2 font-semibold text-lg">Management 2</li>  
                <li class="pb-2 font-semibold text-lg">Management 3</li>   
                <li class="pb-2 font-semibold text-lg">Management 4</li>   
            </ul>
        </div>
        <div class="Role">
            <ul class="text-center">
                <li class="text-[#000000] font-semibold opacity-[100%] pb-4">Role Assigned</li>   
                <li class="pb-2 font-semibold text-lg">FSP</li>   
                <li class="pb-2 font-semibold text-lg">FCP</li>   
                <li class="pb-2 font-semibold text-lg">FCP</li>   
                <li class="pb-2 font-semibold text-lg">Feed Rider</li>   
                <li class="pb-2 font-semibold text-lg">Vender Dealer</li>   
                <li class="pb-2 font-semibold text-lg">Marketing</li>   
                <li class="pb-2 font-semibold text-lg">Software</li>
                <li class="pb-2 font-semibold text-lg">Managment</li>
                <li class="pb-2 font-semibold text-lg">Management</li>  
                <li class="pb-2 font-semibold text-lg">Management</li>      
            </ul>
        </div>
        <div class="Share">
            <ul class="text-center">
                <li class="text-[#000000] font-semibold opacity-[100%] pb-4">% Share</li>   
                <li class="pb-2 font-semibold text-lg">5%</li>   
                <li class="pb-2 font-semibold text-lg">10%</li>   
                <li class="pb-2 font-semibold text-lg">3%</li>   
                <li class="pb-2 font-semibold text-lg">2%</li>   
                <li class="pb-2 font-semibold text-lg">2%</li>   
                <li class="pb-2 font-semibold text-lg">2%</li>
                <li class="pb-2 font-semibold text-lg">2%</li>
                <li class="pb-2 font-semibold text-lg">2%</li>  
                <li class="pb-2 font-semibold text-lg">2%</li>   
                <li class="pb-2 font-semibold text-lg">2%</li>   
            </ul>
        </div>
        <div class="amount">
            <ul class="text-center">
                <li class="text-[#000000] font-semibold opacity-[100%] pb-4">Amount Per Percent</li>   
                <li class="pb-2 font-semibold text-lg">05 FC</li>   
                <li class="pb-2 font-semibold text-lg">05 FC</li>   
                <li class="pb-2 font-semibold text-lg">10 FC</li>   
                <li class="pb-2 font-semibold text-lg">03 FC</li>   
                <li class="pb-2 font-semibold text-lg">02 FC</li>   
                <li class="pb-2 font-semibold text-lg">02 FC</li>
                <li class="pb-2 font-semibold text-lg">02 FC</li>
                <li class="pb-2 font-semibold text-lg">02 FC</li>  
                <li class="pb-2 font-semibold text-lg">02 FC</li>   
                <li class="pb-2 font-semibold text-lg">02 FC</li>   
            </ul>
        </div>
    </div>

    <div class="box-alst mt-8 bg-[#FFFFFF] h-[120px] w-[85%] flex flex-row justify-between mx-auto shadow-xl">
        <div class="box1-1 flex flex-row justify-around items-center w-[40%]">
            <div class="box1-1-1">
                <ul class="font-semibold">
                    <li class="pb-2">Net Margin</li>
                    <li class="pb-2">Partners Expenses</li>
                </ul>
            </div>
            <div class="box1-1-2">
                <ul>
                    <li class="pb-2">100</li>
                    <li class="pb-2">35</li>
                </ul>
            </div>
        </div>
        <div class="box1-2 flex flex-row justify-around items-center w-[40%]">
            <div class="box1-2-1">
                <ul class="font-semibold">
                    <li class="pb-2">Net Feed Profit</li>
                </ul>
            </div>
            <div class="box1-2-2">
                <ul>
                    <li class="pb-2 text-[#2DA157]">65</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default CustomerAffiliateOrderDetails