import { IconButton, SxProps, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type HeaderMenuItemProps = {
  label: string;
  pathTo: string;
  darkModeEnabled?: boolean;
  isSelected?: boolean;
  sx?: SxProps;
};

export default function HeaderMenuItem(props: HeaderMenuItemProps) {
  const { label, pathTo, darkModeEnabled, isSelected, sx } = props;
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(pathTo)}
      sx={
        !isSelected
          ? {
              textDecoration: "none",
              position: "relative",
              "&:hover": {
                textDecoration: "none",
                "&:after": {
                  transformOrigin: "bottom left",
                  transform: "scaleX(1)",
                },
              },
              "&:after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "4px",
                left: 0,
                transform: "scaleX(0)",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out, opacity 0.25s ease-out",
                backgroundColor: "red",
              },
              ...sx,
            }
          : {
              textDecoration: "underline",
              textDecorationColor: "red",
              textUnderlineOffset: 7,
              textDecorationThickness: 3,
              ...sx,
            }
      }
    >
      <Typography
        component="div"
        variant="h3"
        color={darkModeEnabled === true ? "text.secondary" : "text.primary"}
      >
        {label}
      </Typography>
    </IconButton>
  );
}
