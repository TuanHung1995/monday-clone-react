interface HomeHeaderProps {
  username: string;
}

const HomeHeader= ({ username }: HomeHeaderProps) => {
  return (
    <div className="h-[75px] flex justify-between items-center px-6 border-b-2 border-[#4b4e69]">
      <div>
        <div className="text-lg font-semibold">Good night, {username}</div>
        <div className="text-sm text-gray-400">
          Quickly access your recent boards, Inbox and workspaces
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-[0.25rem] text-white font-medium transition">
        Quick Search
      </button>
    </div>
  );
};

export default HomeHeader;
