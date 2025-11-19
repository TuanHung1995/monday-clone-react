import Tooltip from '@mui/material/Tooltip';

const CustomTooltip = ({ title, children }: { title: string, children: React.ReactNode }) => {

    return (
        <Tooltip
            arrow
            title={title}
            slotProps={{
                tooltip: {
                    sx: {
                        backgroundColor: "#FFFFFF",
                        color: "#1b1f29",
                        fontSize: "14px",
                        fontWeight: 500,
                        padding: "8px 10px",
                        borderRadius: '5px',
                        boxShadow:
                            "0px 6px 16px rgba(0,0,0,0.18), 0px 3px 6px rgba(0,0,0,0.12)",
                        letterSpacing: "0.2px",
                    }
                },
                arrow: {
                    sx: {
                        color: "#FFFFFF",
                    }
                },
                // [data-popper-placement*=\"top\"] .${tooltipClasses.tooltip
                popper: {
                    sx: {
                        "&[data-popper-placement*='bottom'] .MuiTooltip-popper": {
                            marginTop: '10px',
                        },
                        "&[data-popper-placement*='top'] .MuiTooltip-popper": {
                            marginTop: '10px',
                        },
                        "&[data-popper-placement*='right'] .MuiTooltip-popper": {
                            marginTop: '10px',
                        },
                        "&[data-popper-placement*='left'] .MuiTooltip-popper": {
                            marginTop: '10px',
                        }
                    }
                },
            }}
        >
            <span>{children}</span>
        </Tooltip>
    )

}

export default CustomTooltip;
