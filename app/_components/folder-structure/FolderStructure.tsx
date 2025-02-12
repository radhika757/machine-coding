import { useState } from "react";
import { Folder, FileText, ChevronDown, ChevronRight } from "lucide-react";
import { folderStructures } from "./folderData";

const FolderItem = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pl-4">
      {item.type === "folder" ? (
        <div
          className="flex items-center cursor-pointer text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <Folder className="ml-2 mr-2 text-yellow-500" size={16} />
          {item.name}
        </div>
      ) : (
        <div className="flex items-center text-gray-400 ml-6">
          <FileText className="mr-2" size={16} />
          {item.name}
        </div>
      )}

      {isOpen &&
        item.children?.map((child: any, index: number) => (
          <FolderItem key={index} item={child} />
        ))}
    </div>
  );
};

const FolderStructure = ({ componentName }: { componentName: string }) => {
  const folderData = folderStructures[componentName] || [];

  return (
    <div className="bg-gray-900 p-4 w-80 h-screen overflow-auto text-sm font-mono">
      {folderData.length > 0 ? (
        folderData.map((item, index) => <FolderItem key={index} item={item} />)
      ) : (
        <p className="text-gray-400">No folder structure found for "{componentName}"</p>
      )}
    </div>
  );
};

export default FolderStructure;
