import { ChevronDown } from "lucide-react";

const mockBoards = [
  { title: "Demo", desc: "work management > Main workspace" },
  { title: "Test1", desc: "work management > Main workspace" },
  { title: "Dashboard and reporting", desc: "work management > Main workspace" },
  { title: "New Dashboard", desc: "work management > Main workspace" },
];

const RecentViewed = () => {
  return (
    <div className="bg-[#30324e] rounded-[0.5rem] p-[30px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronDown className="text-gray-300" size={20} />
        <span className="font-medium text-gray-200">Recently Visited</span>
      </div>

      {/* Boards */}
      <div className="grid grid-cols-4 gap-4 px-6">
        {mockBoards.map((board, idx) => (
          <div key={idx} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition">
            <div className="h-32 bg-gray-500 rounded-lg mb-2" />
            <h4 className="text-sm font-medium">{board.title}</h4>
            <p className="text-xs text-gray-400">{board.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer sections */}
      <div className="bg-black mt-4 h-10 flex items-center justify-center text-white rounded-md cursor-pointer hover:bg-gray-900">
        Show All
      </div>

      <div className="bg-black mt-4 h-10 flex items-center justify-center text-white rounded-md cursor-pointer hover:bg-gray-900">
        Workspace
      </div>

      {/* Workspace cards */}
      <div className="p-3">
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full h-[6rem] bg-black rounded-md" />
          <div className="w-full h-[6rem] bg-black rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default RecentViewed;
