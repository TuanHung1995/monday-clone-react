import React from "react";

interface AddTaskRowProps {
  groupId: number;
}

const AddTaskRow: React.FC<AddTaskRowProps> = ({ groupId }) => {
  return (
    <tr className="border-t border-gray-700">
      <td className="p-1 text-center">
        <input type="checkbox" />
      </td>
      <td>
        <input
          type="text"
          placeholder="+ Add item"
          className="bg-[#33354b] text-white border-none w-full p-2 focus:outline-none"
        />
      </td>
    </tr>
  );
};

export default AddTaskRow;
