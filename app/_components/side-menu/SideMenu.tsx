import React, { useState } from "react";
import FolderStructure from "../folder-structure/FolderStructure";

const SideMenu = () => {
  const [selectedComponent, setSelectedComponent] = useState("tabs");
  return (
    <div className="w-40">
      <h2>EXPLORER</h2>
      <div className="flex">
        <div className="p-4 w-80">
          <FolderStructure componentName={selectedComponent} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
