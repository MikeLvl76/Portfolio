import { Menu } from "@mui/material";

type HeaderMenuProps = {
  isOpen: boolean;
  anchorEl: Element | (() => Element) | null;
  id: string;
  onClose: () => void;
  children?: JSX.Element[];
};

export default function HeaderMenu(props: HeaderMenuProps) {
  const { anchorEl, id, isOpen, onClose, children } = props;

  return (
    <Menu
      id={id}
      anchorEl={anchorEl}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isOpen}
      onClose={onClose}
      MenuListProps={{ onMouseLeave: onClose }}
      sx={{
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      }}
    >
      {children}
    </Menu>
  );
}
