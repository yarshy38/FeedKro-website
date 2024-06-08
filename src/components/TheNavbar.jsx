import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function TheNavbar() {
  const location = useLocation();
  
  let bgColor = "#2DA157"; // Default color for customer dashboard
  if (location.pathname.startsWith("/rider")) {
    bgColor = "#555DC5";
  } else if (location.pathname.startsWith("/partner")) {
    bgColor = "#308E9C";
  } else if (location.pathname.startsWith("/vendor")) {
    bgColor = "#995DD5";
  }

  return (
    <>
      <div className="h-[140px]" style={{ backgroundColor: bgColor }}>
        <div className="flex justify-between items-center px-[88px] pt-[40px] pb-[41px]  text-white">
          <div className="cursor-pointer mt-4">
            <span className="font-bold text-4xl">Feed</span>
            <span className="text-4xl">kro</span>
          </div>
          <div className="flex justify-between items-center gap-20 cursor-pointer mt-4">
            <div className="text-lg">Order</div>
            <Link to="/" className="text-lg">
              Customer Dashboard
            </Link>
            <Link to="/rider/online" className="text-lg">
              Rider
            </Link>
            <Link to="/partner" className="text-lg">
              Partner
            </Link>
            <Link to="/vendor" className="text-lg">
              Vendor
            </Link>
            <div className="text-lg">Management</div>
            <div className="text-lg">
              <img
                className="h-8 w-8"
                src="./assets/images/navbar/navbar-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
