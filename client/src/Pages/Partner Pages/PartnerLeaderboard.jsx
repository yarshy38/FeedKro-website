import React from "react";
import TheTabs from "../../components/tabs-section/TheTabs";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";


export default function PartnerLeaderboard() {
 
  return (
    <>
      <div className="mt-16 ml-[105px] relative">
      <div className='flex space-x-9 items-center'>
                    <Link to='/partner' className="text-xl font-bold opacity-50 text-[#43A0AF]">Partner Dashboard</Link>
                    <Link className={`${location.pathname === '/partnerleaderboard' ? 'text-black' : 'text-[#43A0AF]'} text-xl font-bold gap-2 flex items-center`}><FaGreaterThan size={17} /> Partner LeaderBoard</Link>

                </div>

      </div>

      <TheTabs />
    </>
  );
}
