import { KeyboardArrowRight, KeyboardArrowDown } from "@mui/icons-material";
import { Box, Divider, Chip } from "@mui/material";

export default function University() {
  return (
    <Box>
      <Divider>
        <Chip
          label="University"
          icon={<KeyboardArrowRight /> ?? <KeyboardArrowDown />}
          sx={{ fontSize: 20 }}
        />
      </Divider>
      <Box>
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
