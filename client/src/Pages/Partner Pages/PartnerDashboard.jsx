import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHomeSmileLine } from "react-icons/ri";
import { IoListOutline } from "react-icons/io5";
import {
  MdArrowDropDown,
  MdOutlineChat,
} from "react-icons/md";
import { FaRegBell, FaUserCheck } from "react-icons/fa6";
import { RiCoupon3Line } from "react-icons/ri";
import { BiErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import QuickStatistics from "../../components/quick-stats-section/QuickStatistics";
import TheTabs from "../../components/tabs-section/TheTabs";

export default function PartnerDashboard() {
    const [isMenusOpen, setIsMenusOpen] = useState(false);
    const [liveStatusOpen, setliveStatusOpen] = useState(false);
    const [isPartnerOpen, setIsPartnerOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isFAQOpen, setIsFAQOpen] = useState(false);
  
    const handleMenuOpenBtn = () => {
      setIsMenusOpen(!isMenusOpen);
    };
  
    const handleliveStatusToggle = () => {
      setliveStatusOpen(!liveStatusOpen);
    };
  
    const handlePartnerToggle = () => {
      setIsPartnerOpen(!isPartnerOpen);
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
          Partner's Dashboard
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
                onClick={handleliveStatusToggle}
              >
                <span>
                  <RiHomeSmileLine />
                </span>
                <span>Live Status</span>
                <span className="ms-8">
                  <MdArrowDropDown />
                </span>
              </div>
              {liveStatusOpen && (
                <div className="pl-8 mt-2 text-base">
                  <div className="flex flex-col gap-3 mt-3">
                    {/* <span>🏠</span> */}
                    <Link
                    to="custompartner"
                    >C.P ( Customer Partner )</Link>
                    <Link
                    to="salepartner"
                    >S.P ( Sale Partner )</Link>
                    <Link
                    to="primesalepartner"
                    >S.P' ( Prime Sale Partner )</Link>

                  </div>
                </div>
              )}
              <div
                className="flex gap-3 items-center mt-3 text-lg"
                onClick={handlePartnerToggle}
              >
                <span>
                  <IoListOutline />
                </span>
                <span>Partners</span>
                <span className="ms-8">
                  <MdArrowDropDown />
                </span>
              </div>
              {isPartnerOpen && (
                <div className="pl-8 mt-2 text-base">
                  <div className="flex flex-col gap-3 mt-3">
                    <Link
                    to="register"
                    >Registered Partner's</Link>
                    <Link
                    to="newapplication"
                    >New Applications</Link>
                  </div>
                </div>
              )}
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <FaUserCheck />
                </span>
                <Link
                to="partnerleaderboard"
                >Partner Leaderboard</Link>
              </div>
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <FaUserCheck />
                </span>
                <Link
                to="partneraffiliate"
                >Partner's Affiliate</Link>
              </div>
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <FaUserCheck />
                </span>
                <Link
                to="partnerwallet"
                >Partner Wallets</Link>
              </div>

              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <RiCoupon3Line />
                </span>
                <Link
                to="transactionrequest"
                >Transaction Request's</Link>
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
                    to="notification"
                    >All Notification</Link>
                    <Link
                    to="newnotification"
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
                    to="allfaqs"
                    >All FAQ's</Link>
                    <Link
                    to="addpartnerfaq"
                    >Add New FAQ</Link>
                  </div>
                </div>
              )}
              <div className="flex gap-3 items-center mt-3 text-lg">
                <span>
                  <MdOutlineChat />
                </span>
                <Link
                to="partnersupport"
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
