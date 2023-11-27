import { KeyboardArrowRight, KeyboardArrowDown } from "@mui/icons-material";
import { Box, Divider, Chip } from "@mui/material";
import { useState } from "react";

export default function School() {
  const [isDisplayed, setIsDiplayed] = useState<boolean>(false);

  return (
    <Box padding={5}>
      <Divider>
        <Chip
          label="School"
          onClick={() => setIsDiplayed(!isDisplayed)}
          icon={isDisplayed ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          sx={{ fontSize: 20, transition: "all 0.5s ease-out" }}
        />
      </Divider>
      <Box
        maxWidth="full-screen"
        maxHeight="320pt"
        display={isDisplayed ? "display" : "none"}
        sx={{
          transition: "all 0.5s ease-out",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Box>
    </Box>
  );
}
