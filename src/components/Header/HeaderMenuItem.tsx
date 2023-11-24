import { MenuItem } from "@mui/material";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type HeaderMenuItemProps = {
  label: string;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
  pathTo: string;
};

export default function HeaderMenuItem(props: HeaderMenuItemProps) {
  const { label, onClick, pathTo } = props;
  const navigate = useNavigate();

  const handleItemClick = (e: MouseEvent<HTMLLIElement>) => {
    onClick(e);
    navigate(pathTo);
    return e;
  };

  return <MenuItem onClick={handleItemClick}>{label}</MenuItem>;
}
