import Button from '@mui/material/Button';

const UpgradePlan = () => {

    return (
        <Button
            variant="contained"
            fullWidth
            sx={{
                backgroundColor: "#28a745",
                marginTop: "16px",
                paddingY: "6px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#23963d" },
            }}
        >
            Upgrade
        </Button>
    )

}

export default UpgradePlan;
