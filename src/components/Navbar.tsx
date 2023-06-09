import { useContext, useEffect } from "react";
import { Home } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import { OptionsContext } from "./context/OptionsContext";

export default function Navbar() {
  const { list, setList } = useContext(OptionsContext);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Box
      sx={{
        backgroundColor: "#dddddd",
        width: "max-width",
        padding: 1,
        display: "flex",
        flexDirection: "flex-row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#dddddd",
          display: "flex",
          flexDirection: "flex-row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Link className="home_link" to={"/"}>
          <Home
            sx={{
              fontSize: "45px",
              color: "#111111",
              padding: 1,
              transitionDuration: "1s",
            }}
          />
        </Link>
        <Link className="career_link" to={"/career"}>
          Career
        </Link>
        <Link className="about_link" to={"/about"}>
          About
        </Link>
      </Box>

      <div className="theme_wrapper">
        <div className="wrapper">
          <input type="checkbox" id="theme" onChange={() => setList({ darkMode: !list.darkMode })}/>
          <label htmlFor="theme"></label>
        </div>
      </div>
    </Box>
  );
}
