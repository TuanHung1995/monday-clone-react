import React from "react";
import { Plus } from "lucide-react";

const AddGroupButton: React.FC = () => {
  return (
    <button className="ml-3 px-2 py-2 rounded text-sm flex items-center border border-gray-600 hover:bg-gray-700 mt-3">
      <Plus className="w-5 h-5 mr-1 text-gray-300" />
      <p className="text-gray-300">Add new group</p>
    </button>
  );
};

export default AddGroupButton;
