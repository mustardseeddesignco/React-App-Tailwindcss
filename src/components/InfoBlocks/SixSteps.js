import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import HouseIcon from "@material-ui/icons/House";
import BeenhereIcon from "@material-ui/icons/Beenhere";

export default function SixSteps() {
  return (
    <>
      {/* Or use lg:container to stop div from full-width */}
      <div className="mx-auto bg-gray-800 my-8 py-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl text-gray-200 font-bold px-4 lg:text-6xl lg:my-4">
            6 Easy Steps To New Countertops
          </h3>
          <hr className="border-8 w-10/12 mb-4 mt-4 border-yellow-300 lg:hidden" />
        </div>
        <div className="mx-2 text-center md:grid md:grid-cols-3 md:gap-4">
          <div className="py-8 px-8 col-span-1 mx-auto">
            <PhoneIcon
              className="mb-8 text-teal-400"
              style={{ fontSize: 80 }}
            />
            <h4 className="uppercase text-2xl text-gray-300 font-bold pb-2">
              1. Tell Us About Your Project
            </h4>
            <p className="text-md text-gray-100 px-4">
              Call or use our free estimate form to describe your dream room.
            </p>
          </div>
          <div className="py-8 px-8 col-span-1 mx-auto">
            <DescriptionIcon
              className="mb-8 text-teal-400"
              style={{ fontSize: 80 }}
            />
            <h4 className="uppercase text-2xl text-gray-300 font-bold pb-2">
              2. Choose Your Material
            </h4>
            <p className="text-md text-gray-100 px-4">
              One of our design specialists will guide you through countertop
              surface options, color choices, tile, backsplash, sinks, cabinets
              and flooring options.
            </p>
          </div>
          <div className="py-8 px-8 col-span-1 mx-auto">
            <DateRangeIcon
              className="mb-8 text-teal-400"
              style={{ fontSize: 80 }}
            />
            <h4 className="uppercase text-2xl text-gray-300 font-bold pb-2">
              Schedule Your Template
            </h4>
            <p className="text-md text-gray-100 px-4">
              Our professional templaters will come to your site to measure all
              surfaces. The exact material needs are determined and any
              potential problems identified.
            </p>
          </div>
          <div className="py-8 px-8 col-span-1 mx-auto">
            <ZoomOutMapIcon
              className="mb-8 text-teal-400"
              style={{ fontSize: 80 }}
            />
            <h4 className="uppercase text-2xl text-gray-300 font-bold pb-2">
              Create A Custom Layout
            </h4>
            <p className="text-md text-gray-100 px-4">
              We offer an option to choose the area your counter will be cut
              from. This allows you to see the exact color, pattern, and seam
              placement for your new counters.
            </p>
          </div>
          <div className="py-8 px-8 col-span-1 mx-auto">
            <HouseIcon
              className="mb-8 text-teal-400"
              style={{ fontSize: 80 }}
            />
            <h4 className="uppercase text-2xl text-gray-300 font-bold pb-2">
              Installation
            </h4>
            <p className="text-md text-gray-100 px-4">
              Most installs are completed in a day and we will schedule your
              installation in 3 to 5 business days from the time your template
              or layout is completed.
            </p>
          </div>
          <div className="py-8 px-8 col-span-1 mx-auto">
            <BeenhereIcon
              className="mb-8 text-teal-400"
              style={{ fontSize: 80 }}
            />
            <h4 className="uppercase text-2xl text-gray-300 font-bold pb-2">
              Check - Complete - Enjoy
            </h4>
            <p className="text-md text-gray-100 px-4">
              Once our installers have finished you will get a check list to
              make sure everything is done to your satisfaction. Kick back and
              enjoy your new room!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
