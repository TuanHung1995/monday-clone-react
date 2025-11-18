const StatusOption = ({ label, active }: { label: string; active: boolean }) => {
  return (
    <div
      className={`flex items-center gap-2 cursor-pointer transition ${active ? "text-blue-400" : "text-gray-400"
        }`}
    >
      <div
        className={`w-3 h-3 rounded-full border ${active ? "border-blue-400 bg-blue-400" : "border-gray-400"
          }`}
      ></div>
      <span className="text-sm">{label}</span>
    </div>
  );
}; 

const WorkStatus = () => {

    return (
        <div className="border-t border-[#3b3f55] mt-4 pt-4">
                <div className="text-sm mb-2">Working status</div>

                <div className="flex items-center gap-4">
                  <StatusOption label="Do not disturb" active={false} />
                  <StatusOption label="On" active={false} />
                  <StatusOption label="Off" active={true} />
                </div>
              </div>
    )

}

export default WorkStatus;
