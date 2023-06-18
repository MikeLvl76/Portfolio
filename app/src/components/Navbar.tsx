import { Home } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "teal",
        width: "max-width",
        padding: 1,
        display: "flex",
        flexDirection: "flex-row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Link to={"/"}>
        <Home
          sx={{
            fontSize: "50px",
            color: "#e6f2f2",
            border: "solid",
            borderColor: "#e6f2f2",
            borderRadius: 20,
            padding: 2,
          }}
        />
      </Link>
      <Link className="career_link" to={"/career"}>
        <p className="nav_text">Career</p>
      </Link>
      <Link className="about_link" to={"/about"}>
        <p className="nav_text">About</p>
      </Link>
    </Box>
  );
}
