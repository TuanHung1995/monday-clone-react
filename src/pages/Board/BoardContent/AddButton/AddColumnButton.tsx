const AddColumnButton: React.FC<{ groupId: number }> = ({ groupId }) => {
  return (
    <button className="p-2 bg-blue-500 text-white rounded" onClick={() => console.log(`Add column in group ${groupId}`)}>
      Add Column
    </button>
  );
};

export default AddColumnButton;
