import AddTaskRow from "../../AddButton/AddTaskRow";
import TaskRow from "../TaskRow/TaskRow";
import ColCheckbox from "../TaskColumn/ColCheckbox/ColCheckbox";
import TaskColumn from "../TaskColumn/TaskColumn";

import { Box, Checkbox, Typography, Stack } from "@mui/material";

export type ColValue = {
  id: number;
  columnId: Column;
  value: string;
  color: string;
}

export type Column = {
  id: number;
  name: string;
  type: string;
  groupId: number;
  colValues: ColValue[];
}

interface TaskTableProps {
  groupId: number;
  columns: Column[];
  rows: number;
}

const TaskTable = ({ groupId, columns, rows }: TaskTableProps) => {

  // Giả lập dữ liệu hàng dựa trên số lượng hàng được truyền vào
  const renderCheckBoxColumns = () => {
    const checkBoxes = [];
    for (let i = 0; i < rows; i++) {
      checkBoxes.push(<ColCheckbox key={i} />);
    }
    return checkBoxes;
  };

  const renderColumnValues = (cols: Column[]) => {
    return cols.map((col) => {
      return <Box key={col.id} sx={{ display: "flex", flexDirection: "column", "&:hover": { backgroundColor: "grey.900" }, height: 48 * rows }}>
              <Box key={col.id} sx={{ width: "auto", overflowX: "auto", textAlign: "center", height: 48}}>
                <Typography variant="h6">{col.name}</Typography>
              </Box>
              {renderColValuesForColumn(col.colValues)}
            </Box>;
    });
  }
  const renderColValuesForColumn = (col: ColValue[]) => {
    return col.map((colValue) => {
      // return Array.from({ length: rows }).map((_, rowIndex) => {
        return <TaskColumn key={colValue.id} col={colValue} />;
      // });
    });
  }

  return (
// import AddColumnButton from "./AddColumnButton";
// import ColumnHeader from "./ColumnHeader";
// import TaskRow from "./TaskRow";
// import AddTaskRow from "./AddTaskRow";
    <Box sx={{ width: "auto", overflowX: "auto" }}>
      {/* Header */}
      {/* <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          borderBottom: "1px solid",
          borderColor: "grey.700",
          color: "grey.300",
          fontWeight: 500,
          px: 1,
          py: 0.5,
        }}
      >
        <Box sx={{ width: 48, textAlign: "center" }}>
          <Checkbox size="small" />
        </Box>

        <Box sx={{ width: 300, textAlign: "center" }}>
          <Typography variant="body2">Task</Typography>
        </Box> */}

        {/* Dynamic columns */}
        {/* {columns.map((col) => (
          <Box key={col.id} sx={{ flex: 1, minWidth: 100, textAlign: "center" }}> */}
            {/* <ColumnHeader column={col} /> */}
            {/* <Typography variant="body2">{col.name}</Typography>
          </Box>
        ))} */}

        {/* Add column button */}
        {/* <Box sx={{ width: 40, textAlign: "center" }}> */}
          {/* <AddColumnButton groupId={groupId} /> */}+
        {/* </Box>
      </Stack> */}

      {/* Rows */}
      <Box sx={{ display: 'flex' }}>
        {/* Vertical Checkbox */}
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          {renderCheckBoxColumns()}
        </Box>
        {/* Render Columns */}
        <Box sx={{ display: 'flex'}}>
          {renderColumnValues(columns)}
        </Box>
      </Box>
        {/* Add new row */}
        <Box
          sx={{
            px: 1,
            py: 1,
            color: "grey.400",
            cursor: "pointer",
            "&:hover": { color: "primary.main" },
          }}
        >
          <AddTaskRow groupId={groupId} />
          {/* + Add Task */}
        </Box>
    </Box>
  );
};

export default TaskTable;
