import Box from "@mui/material/Box";
import NavbarHome from "@pages/Board/BoardNav";
import TaskGroups from "@pages/Board/BoardContent/Groups";


import { useParams } from "react-router-dom";
import { useBoardDetails } from "@hooks/useBoardDetails";
import CircularProgress from "@mui/material/CircularProgress";

const BoardPage = () => {
  // TODO: Update route to include /:boardId and use useParams, or get from context
  const { boardId } = useParams<{ boardId: string }>(); 
  // For testing while route is just '/board', you might need to hardcode a real board ID here:
  // const testBoardId = "your-real-uuid-here";
  
  const { groups, columns, setGroups, setColumns, loading, error } = useBoardDetails(boardId /* || testBoardId */);

  return (
    <Box>
      <NavbarHome />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ p: 4, color: 'red' }}>Error loading board: {error.message}</Box>
      ) : (
        <TaskGroups 
          groups={groups} 
          columns={columns} 
          setGroups={setGroups} 
          setColumns={setColumns} 
        />
      )}
    </Box>
  );
}

export default BoardPage;
