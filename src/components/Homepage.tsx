import { Box } from "@mui/material";
import "../style/homepage.css";
import { GitHub } from "@mui/icons-material";

export default function Homepage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ minHeight: "80vh", placeSelf: "center" }}>
        <h1>Welcome to my Portfolio! </h1>
        <p>You're on the homepage, take a look on other pages!</p>
      </Box>

      <footer>
        <a href="https://github.com/MikeLvl76">
          <GitHub
            sx={{
              width: 50,
              height: 50,
              color: '#000000',
            }}
            titleAccess="Visit my Github page!"
          />
        </a>
      </footer>
    </Box>
  );
}
