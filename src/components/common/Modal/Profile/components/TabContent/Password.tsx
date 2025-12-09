import React from "react";
import { Button, TextField } from "@mui/material";

export const PasswordTab = () => {
  return (
    <div className="p-4 text-gray-300">
      <h2 className="text-2xl font-semibold text-white mb-6">Change Password</h2>
      <div className="max-w-md space-y-4">
        <TextField 
            label="Current Password" 
            type="password" 
            fullWidth 
            variant="outlined"
            sx={{ 
                '& .MuiInputBase-input': { color: 'white' },
                '& .MuiInputLabel-root': { color: 'gray' },
                '& .MuiOutlinedInput-root': { 
                    '& fieldset': { borderColor: '#2f324e' },
                    '&:hover fieldset': { borderColor: 'gray' },
                }
            }}
        />
        <TextField label="New Password" type="password" fullWidth /* style tương tự */ />
        <Button variant="contained" color="primary">Update Password</Button>
      </div>
    </div>
  );
};