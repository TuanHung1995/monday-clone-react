import React from 'react';
import { Palette, ChevronRight, Sun, Moon, Settings, SunMoon } from "lucide-react";
import MenuItem from '@components/common/Button/MenuItem';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';

const ChangeTheme = ({ handleClick, open, anchorEl, handleClose }: {
    handleClick: (event: React.MouseEvent<HTMLElement>) => void,
    open: boolean,
    anchorEl: HTMLElement | null,
    handleClose: () => void,
}) => {

    return (
        <Box>
            <MenuItem
                onClick={handleClick}
                icon={<Palette size={18} />}
                label="Change theme"
                right={<ChevronRight size={16} />}
                aria-controls={open ? 'change-theme-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />

            {/* <AvatarMenu handleClick={handleClick} open={open} /> */}
            <Menu
                id="change-theme-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        sx: {
                            width: 'fit-content',
                            backgroundColor: "#1e2238",
                            color: "white",
                            borderRadius: "0.5rem",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            border: "1px solid #3a3e55",
                            px: "0.5rem",
                        }
                    },
                }}
            >
                <MenuItem 
                    styled={{ 
                        width: '200px', 
                        height: 'auto', 
                        padding: '0.5rem 0.5rem', 
                        borderRadius: '0.375rem' 
                    }} 
                    icon={<Sun size={18} />} 
                    label="Light" 
                />
                <MenuItem 
                    styled={{ 
                        width: '200px', 
                        height: 'auto', 
                        padding: '0.5rem 0.5rem', 
                        borderRadius: '0.375rem' 
                    }} 
                    icon={<Moon size={18} />} 
                    label="Dark" 
                />
                <MenuItem 
                    styled={{ 
                        width: '200px', 
                        height: 'auto', 
                        padding: '0.5rem 0.5rem', 
                        borderRadius: '0.375rem' 
                    }} 
                    icon={<SunMoon size={18} />} 
                    label="Night" 
                />
                <MenuItem 
                    styled={{ 
                        width: '200px', 
                        height: 'auto', 
                        padding: '0.5rem 0.5rem', 
                        borderRadius: '0.375rem' 
                    }} 
                    icon={<Settings size={18} />} 
                    label="System" 
                />
            </Menu>
        </Box>
    )

}

export default ChangeTheme;
