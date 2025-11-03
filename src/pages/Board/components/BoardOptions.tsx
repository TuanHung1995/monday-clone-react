const BoardOptions = () => {
    return (
      <div className="hidden absolute mt-2 w-56 bg-gray-700 text-white shadow-xl border border-gray-700 rounded-lg z-30">
        <p className="ml-3 mt-3 font-semibold text-gray-300">Board option</p>
        <ul className="p-2">
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Power-Ups</li>
          <hr className="border-gray-500" />
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Activity log</li>
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Discussion</li>
          <hr className="border-gray-500" />
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Notifications</li>
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Permissions</li>
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Settings</li>
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">More Action</li>
          <hr className="border-gray-500" />
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Archive board</li>
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Delete board</li>
          <hr className="border-gray-500" />
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">View archive/trash</li>
          <hr className="border-gray-500" />
          <li className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded cursor-pointer">Give feedback</li>
        </ul>
      </div>
    )
}

export default BoardOptions;
