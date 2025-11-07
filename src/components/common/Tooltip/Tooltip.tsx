import * as React from "react";
import { styled, Tooltip, tooltipClasses } from "@mui/material";
import type { TooltipProps } from "@mui/material";

interface CustomTooltipProps extends TooltipProps {
  color?: "dark" | "light" | "primary" | "secondary";
}

const CustomTooltipRoot = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.grey[900],
    color: "#fff",
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 8,
    padding: "8px 12px",
    boxShadow: theme.shadows[3],
    transition: "opacity 0.2s ease, transform 0.2s ease",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.grey[900],
  },
}));

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  color = "dark",
  arrow = true,
  placement = "top",
  slotProps,
  ...props
}) => {
  // 🧠 Logic chọn màu tooltip theo prop
  const colorMap = {
    dark: {
      bg: "#1e293b",
      text: "#f8fafc",
    },
    light: {
      bg: "#ffffff",
      text: "#4d4d52",
    },
    primary: {
      bg: "#3b82f6",
      text: "#ffffff",
    },
    secondary: {
      bg: "#9333ea",
      text: "#ffffff",
    },
  };

  const { bg, text } = colorMap[color];

  return (
    <CustomTooltipRoot
      arrow={arrow}
      placement={placement}
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: bg,
            color: text,
            fontWeight: 500,
            borderRadius: 2,
            px: 1.5,
            py: 1,
            boxShadow: 3,
          },
        },
        arrow: { sx: { color: bg } },
        ...slotProps,
      }}
      {...props}
    />
  );
};
