import Box from '@mui/material/Box';

const StatusOption = ({ label, active }: { label: string; active: boolean }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer",
                transition: "color 0.3s",
                color: active ? "#3b82f6" : "#9ca3af"
            }}
        >
            <Box
                sx={{
                    width: "0.75rem",
                    height: "0.75rem",
                    borderRadius: "50%",
                    border: `1px solid ${active ? "#3b82f6" : "#9ca3af"}`,
                    backgroundColor: active ? "#3b82f6" : "transparent"
                }}
            ></Box>
            <Box sx={{ fontSize: "0.875rem" }}>{label}</Box>
        </Box>
    );
};

const WorkStatus = () => {

    return (
        <Box
            sx={{
                borderTop: "1px solid #3b3f55",
                marginTop: "1rem",
                paddingTop: "1rem"
            }}
        >
            <Box sx={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>Working status</Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <StatusOption label="Do not disturb" active={false} />
                <StatusOption label="On" active={false} />
                <StatusOption label="Off" active={true} />
            </Box>
        </Box>
    )

}

export default WorkStatus;
