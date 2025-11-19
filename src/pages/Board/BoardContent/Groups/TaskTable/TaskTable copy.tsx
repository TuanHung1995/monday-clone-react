import AddTaskRow from "../../AddButton/AddTaskRow";
import ColCheckbox from "../TaskColumn/ColCheckbox/ColCheckbox";
import TaskColumn from "../TaskColumn/TaskColumn";
import GroupTitle from "../GroupTitle/GroupTitle";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { 
  TOP_BOTTOM_COLUMN_COLOR, 
  TASK_ELEMENT_BG_COLOR_DARK, 
  BOARD_BG_COLOR_DARK, 
  TASK_BORDER_COLOR_DARK,
  GROUP_ELEMENT_HOVER_COLOR
} from "@utils/constants";
import { BRIGHT_BLUE } from "@utils/constants/colors/picker";

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

  const changeBgColorForColVaClass = () => {
    // Lấy tất cả các phần tử có class name là "col-va"
    const colVaElements = document.getElementsByClassName("col-va");
    console.log("check");
    // Thay đổi màu nền cho từng phần tử
    for (let i = 0; i < colVaElements.length; i++) {
      const element = colVaElements[i] as HTMLElement;
      //important to cast to HTMLElement
      element.style.backgroundColor = `${GROUP_ELEMENT_HOVER_COLOR} !important`;
      console.log(element);
    }
  }
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
      return <Box key={col.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 36 * rows
        }}
      >
        <Box key={col.id}
          onMouseEnter={() => { changeBgColorForColVaClass() }}
          sx={{
            width: "auto",
            overflowX: "auto",
            textAlign: "center",
            height: '36px',
            bgcolor: TOP_BOTTOM_COLUMN_COLOR,
            "&:hover": { backgroundColor: GROUP_ELEMENT_HOVER_COLOR },
            borderTop: `0.5px solid ${TASK_BORDER_COLOR_DARK}`,
            borderRight: `0.5px solid ${TASK_BORDER_COLOR_DARK}`
          }}
        >
          <Box
            sx={{
              padding: '6px',
              alignItems: 'center',
            }}
          >
            <TextField
              variant="standard"
              // placeholder="+ Add task"
              value={col.name}
              InputProps={{
                disableUnderline: true,
                sx: {
                  p: '0 0 0 0',
                  width: '100px', // 100% - 16px padding
                  height: '16px',
                  textAlign: 'center',
                  alignItems: 'center',
                  color: TOP_BOTTOM_COLUMN_COLOR,
                  '& .MuiInputBase-input': {
                    p: '0 0 0 0',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '14px',
                  },
                  "&:focus-within": {
                    borderRadius: "4px",
                    border: "0.5px solid transparent",
                    boxShadow: "0 0 0 2px #3b82f6",
                  },
                  "&:hover": {
                    borderRadius: "4px",
                    border: "0.5px solid transparent",
                    boxShadow: "0 0 0 2px #3b82f6",
                  },
                }
              }}
            />
          </Box>
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
          mb: 4,
          p: 2,
          pb: 0
        }}
      >

        {/* MOCK GROUP TITLE COLOR */}
        <GroupTitle groupName={group.name} GroupTitleColor={"blue"} />
        <Box
          sx={{
            // apply radius to all corners and hide overflow so inner colored children
            // don't paint square corners over the rounded container
            borderRadius: '10px',
            overflow: 'hidden',
          }}>
          <Box sx={{ display: 'flex', }}>
            {/* Vertical Checkbox */}
            <Box sx={{ bgcolor: TASK_ELEMENT_BG_COLOR_DARK, borderLeft: `5px solid ${BRIGHT_BLUE}` }}>
              {renderCheckBoxColumns()}
            </Box>
            {/* Render Columns */}
            <Box sx={{ display: 'flex', bgcolor: TASK_ELEMENT_BG_COLOR_DARK }}>

              {renderColumnValues(columns)}
            </Box>
            <Box sx={{
              color: "grey.400",
              cursor: "pointer",
              bgcolor: TASK_ELEMENT_BG_COLOR_DARK,
            }}>
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

      </Box>
    </SortableContext>
  );
};

export default TaskTable;
