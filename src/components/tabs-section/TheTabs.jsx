import React, { useState } from "react";
import "./TheTabs.css";
import TheTable from "../tables/TheTable";

export default function TheTabs() {
  const [selectedTab, setSelectedTab] = useState("daily");

  return (
    <>
      <div className="ml-[105px] mt-16">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl font-bold"
            aria-label="Daily Leader Board"
            checked={selectedTab === "daily"}
            onChange={() => setSelectedTab("daily")}
          />
          <div
            role="tabpanel"
            className={`tab-content ${selectedTab === "daily" ? "" : "hidden"}`}
          >
            <TheTable />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl font-bold"
            aria-label="Monthly Leader Board"
            checked={selectedTab === "monthly"}
            onChange={() => setSelectedTab("monthly")}
          />
          <div
            role="tabpanel"
            className={`tab-content p-10 ${
              selectedTab === "monthly" ? "" : "hidden"
            }`}
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl font-bold"
            aria-label="Yearly Leader Board"
            checked={selectedTab === "yearly"}
            onChange={() => setSelectedTab("yearly")}
          />
          <div
            role="tabpanel"
            className={`tab-content p-10 ${
              selectedTab === "yearly" ? "" : "hidden"
            }`}
          >
            Tab content 3
          </div>
        </div>
      </div>
    </>
  );
}
