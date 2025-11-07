import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { View } from "./ViewTab/ViewTab";
import ViewTab from "./ViewTab/ViewTab";

const BoardViews = () => {

    const views: View[] = [
        { id: 1, name: "Main Table" },
        { id: 2, name: "Kanban View" },
        { id: 3, name: "Calendar View" },
    ];

    return (
        <Box
            sx={{
                height: '42px',
                borderBottom: '1px solid #2c2f36',
                display: 'flex',
                alignItems: 'center',
                
            }}
        >
            {views.map((view) => (
                <ViewTab viewName={view.name} key={view.id} />
            ))}
        </Box>
    );
};

export default BoardViews;
