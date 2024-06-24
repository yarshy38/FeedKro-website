import React, { useState } from "react";
import QuickStatistics from "../components/quick-stats-section/QuickStatistics";
import TheTabs from "../components/tabs-section/TheTabs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHomeSmileLine } from "react-icons/ri";
import { IoListOutline } from "react-icons/io5";
import {
  MdArrowDropDown,
  MdOutlineAccessTime,
  MdOutlineChat,
  MdOutlineDiscount,
  MdOutlineReviews,
} from "react-icons/md";
import { FaRegBell, FaUserCheck } from "react-icons/fa6";
import { RiCoupon3Line } from "react-icons/ri";
import { BiErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CustomerDashboard() {
  const [isMenusOpen, setIsMenusOpen] = useState(false);
  const [isHomeSettingOpen, setIsHomeSettingOpen] = useState(false);
  const [isShelfControlOpen, setIsShelfControlOpen] = useState(false);
  const [isProductSalesOpen, setIsProductSalesOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  const handleMenuOpenBtn = () => {
    setIsMenusOpen(!isMenusOpen);
  };

  const handleHomeSettingToggle = () => {
    setIsHomeSettingOpen(!isHomeSettingOpen);
  };

  const handleShelfControlToggle = () => {
    setIsShelfControlOpen(!isShelfControlOpen);
  };

  const handleProductSalesToggle = () => {
    setIsProductSalesOpen(!isProductSalesOpen);
  };
  const handleNotificationToggle = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const handleFAQToggle = () => {
    setIsFAQOpen(!isFAQOpen);
  };

  return (
    <>
      <div className="mt-16 ml-[105px] relative">
        <div className="text-theme-green text-2xl font-bold">
          Customers Dashboard
        </div>
        <div
          onClick={handleMenuOpenBtn}
          className="absolute -top-16 right-0 text-black text-3xl px-3 py-3 bg-white z-20"
        >
          <RxHamburgerMenu />
        </div>
        {isMenusOpen ? (
          <>
            <div className="bg-white ps-4 pe-10 pt-20 pb-10 absolute -right-12 -top-16 text-black z-10 shadow-lg">
              {/* profile info */}
              <div className="flex justify-between gap-3">
                <div>
                  <img
                    className="h-12 w-12 rounded-lg"
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-lg">Muhammad Khan</h2>
                  <p>Manager</p>
                </div>
              </div>

              {/* menus */}
              <div
                className="flex gap-3 items-center mt-6 text-lg cursor-pointer"
                onClick={handleHomeSettingToggle}
              >
                <span>
                  <RiHomeSmileLine />
                </span>
                <span>Home Setting</span>
                <span className="ms-8">
                  <MdArrowDropDown />
                </span>
              </div>
              {isHomeSettingOpen && (
                <div className="pl-8 mt-2 text-base">
                  <div className="flex flex-col gap-3 mt-3">
                    {/* <span>🏠</span> */}
                    <Link
                    to="/all-categories"
                    >All Categories</Link>
                    <Link
                    to="/new-cate"
                    >Add New Categories</Link>
                    <Link
                    to="/home-banner"
                    >Home Screen Banner</Link>
                  </div>
                </div>
              )}
              <div
                className="flex gap-3 items-center mt-3 text-lg"
                onClick={handleShelfControlToggle}
              >
                <span>
                  <IoListOutline />
                </span>
                <span>Shelf Control</span>
                <span className="ms-8">
                  <MdArrowDropDown />
                </span>
              </div>
              {isShelfControlOpen && (
                <div className="pl-8 mt-2 text-base">
                  <div className="flex flex-col gap-3 mt-3">
                    <Link
                    to="/all-products"
                    >All Products</Link>
                    <Link
                    to="/add-new"
                    >Add New Products</Link>
                  </div>
                </div>
              )}
              <div
                className="flex gap-3 items-center mt-3 text-lg"
                onClick={handleProductSalesToggle}
              >
                <span>
                  <MdOutlineDiscount />
                </span>
                <span>Product Sales</span>
                <span className="ms-8">
                  <MdArrowDropDown />
                </span>
              </div>
              {isProductSalesOpen && (
                <div className="pl-8 mt-2 text-base">
                  <div className="flex flex-col gap-3 mt-3">
                    <Link
                    to=""
                    >Recent Product Sales</Link>
                    <Link
                    to="/sale"
                    >Archived Product Sales</Link>
                  </div>
                </div>
              )}
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <FaUserCheck />
                </span>
                <Link
                to="/allRegisteredCoustomers"
                >Registered Customers</Link>
              </div>
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <RiCoupon3Line />
                </span>
                <Link
                to="/coustomerAffiliateList"
                >Customer's Affiliate Tickets</Link>
              </div>
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <MdOutlineAccessTime />
                </span>
                <Link
                to="/delivery"
                >Delivery Schedule</Link>
              </div>
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <MdOutlineReviews />
                </span>
                <Link
                to="/productswithreviewlist"
                >Product Reviews</Link>
              </div>
              <div
                className="flex gap-3 items-center mt-3 text-lg"
                onClick={handleNotificationToggle}
              >
                <span>
                  <FaRegBell />
                </span>
                <span>Notification Control</span>
                <span className="ms-8">
                  <MdArrowDropDown />
                </span>
              </div>
              {isNotificationOpen && (
                <div className="pl-8 mt-2 text-base">
                  <div className="flex flex-col gap-3 mt-3">
                    <Link
                    to="/newnotification"
                    >New Notification</Link>
                  </div>
                </div>
              )}
              <div
                className="flex gap-3 items-center mt-3 text-lg"
                onClick={handleFAQToggle}
              >
                <span>
                  <BiErrorAlt />
                </span>
                <span>FAQ's Control</span>
                <span className="ms-8">
                  <MdArrowDropDown />
                </span>
              </div>
              {isFAQOpen && (
                <div className="pl-8 mt-2 text-base">
                  <div className="flex flex-col gap-3 mt-3">
                    <Link
                    to="/allfaqs"
                    >All FAQ's</Link>
                    <Link
                    // to="/addnewfaq"
                    >Add New FAQ</Link>
                  </div>
                </div>
              )}
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <MdOutlineChat />
                </span>
                <Link
                to="/customer"
                >Support</Link>
              </div>
            </div>
          </>
        ) : null}
      </div>

      <QuickStatistics />
      <TheTabs />
    </>
  );
}
