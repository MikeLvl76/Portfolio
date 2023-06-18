import { Box } from "@mui/material";

export default function App() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <h1>Welcome to my Portfolio! </h1>
      <p>You're on the homepage, take a look on other pages!</p>

      <footer>
        <a href="https://github.com/MikeLvl76">
          <img
            src="github_logo.png"
            width={50}
            height={50}
            alt="Github user"
            title="Visit my Github page!"
          />
        </a>
      </footer>
    </Box>
  );
}
