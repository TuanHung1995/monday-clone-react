import AddTaskRow from "../../AddButton/AddTaskRow";
import ColCheckbox from "../TaskColumn/ColCheckbox/ColCheckbox";
import TaskColumn from "../TaskColumn/TaskColumn";
import GroupTitle from "../GroupTitle/GroupTitle";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { TOP_BOTTOM_COLUMN_COLOR, TASK_ELEMENT_BG_COLOR_DARK } from "@utils/constants";

import {
  Plus
} from "lucide-react";

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
  groupId: Group;
}

export interface Group {
    id: number;
    name: string;
}

interface TaskTableProps {
  group: Group;
  columns: Column[];
  rows: number;
  colValues: ColValue[];
}

const TaskTable = ({ group, columns, colValues, rows }: TaskTableProps) => {

  const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ 
        id: group.id,
        data: { ...group }
     });

    const dndKitColumnStyles = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

  // Giả lập dữ liệu hàng dựa trên số lượng hàng được truyền vào
  const renderCheckBoxColumns = () => {
    const checkBoxes = [];
    for (let i = 0; i < rows; i++) {
      checkBoxes.push(<ColCheckbox key={i} />);
    }
    return checkBoxes;
  };

  const columnValuesPerColumn = (columnId: number) => {
    return colValues.filter(colValue => colValue.columnId.id === columnId);
  }

  const renderColumnValues = (cols: Column[]) => {
    return cols.map((col) => {
      return <Box key={col.id} sx={{ display: "flex", flexDirection: "column", "&:hover": { backgroundColor: "grey.900" }, height: 48 * rows }}>
              <Box key={col.id} sx={{ width: "auto", overflowX: "auto", textAlign: "center", height: 48, bgcolor: TOP_BOTTOM_COLUMN_COLOR}}>
                <Typography variant="h6">{col.name}</Typography>
              </Box>
              {renderColValuesForColumn(columnValuesPerColumn(col.id))}
            </Box>;
    });
  }
  const renderColValuesForColumn = (col: ColValue[]) => {
    return col.map((colValue) => {
        return <TaskColumn key={colValue.id} col={colValue} />;
    });
  }

  return (
    <SortableContext items={columns.map(col => col.id)} strategy={horizontalListSortingStrategy}>
      <Box 
        ref={setNodeRef}
            style={dndKitColumnStyles}
            {...attributes}
            {...listeners}
        sx={{ 
          width: "fit-content", 
          overflowX: "auto", 
          mb: 4, 
          borderRadius: 2, 
          p: 2, 
          pb: 0 
        }}
      >
        <GroupTitle groupName={group.name} />
        <Box sx={{ display: 'flex' }}>
          {/* Vertical Checkbox */}
          <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: TASK_ELEMENT_BG_COLOR_DARK}}>
            {renderCheckBoxColumns()}
          </Box>
          {/* Render Columns */}
          <Box sx={{ display: 'flex', bgcolor: TASK_ELEMENT_BG_COLOR_DARK }}>
            {renderColumnValues(columns)}
          </Box>
          <Box>
            <Plus />
          </Box>
        </Box>
          {/* Add new row */}
          <Box
            sx={{
              px: 0,
              py: 0,
              color: "grey.400",
              cursor: "pointer",
              "&:hover": { color: "primary.main" },
            }}
          >
            <AddTaskRow groupId={group.id} />
          </Box>
      </Box>
    </SortableContext>
  );
};

export default TaskTable;
