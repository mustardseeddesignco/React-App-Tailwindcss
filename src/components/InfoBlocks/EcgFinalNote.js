import React from "react";

export default function FinalNote() {
  return (
    <>
      <div className="pb-8 lg:mx-auto">
        <div className="z-10 absolute text-center p-6">
          <h1 className="text-3xl font-bold text-yellow-300 mb-4">
            One Final Note About ECG
          </h1>
          <p className="z-40 text-gray-700 font-semibold md:px-64">
            At East Coast Granite & Tile, we are completely confident in our
            stone countertop installations. The workmanship on all of them is
            guaranteed for one year. So if you are looking for the smoothest and
            most seamless buying and installation experience, contact us online
            or visit us in person at any of our 20 locations for a free
            estimate.
          </p>
        </div>
        <div className="z-0 opacity-25 static bg-yellow-200 rounded-r-full w-2/3 h-64 md:opacity-0"></div>
      </div>
    </>
  );
}
