import React from "react";

export default function Footer() {
  return (
    <div className="relative bottom-0 bg-gray-800">
      <div className="md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 md:gap-4"></div>
      <div className="mx-auto">
        <h4 className="text-xl text-white mb-4 mx-auto">
          East Coast Granite & Tile
        </h4>
        <p className="text-sm text-gray-400">
          2536 Boiling Springs Road
          <br />
          Boiling Springs, South Carolina 29316
          <br />
          864.392.5869
          <br />
          <a href="mailto:info@eastcoast-granite.com">
            info@eastcoast-granite.com
          </a>
        </p>
      </div>
    </div>
  );
}
