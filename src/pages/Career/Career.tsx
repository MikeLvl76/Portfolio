import { Box, Typography } from "@mui/material";
import Header from "../../components/Header/Header";

export default function Career() {
  return (
    <Box>
      <Header currentPage="Career" />
      <Typography
        component="div"
        variant="h1"
        textAlign="center"
        sx={{ flexGrow: 1, padding: 1 }}
      >
        My career
      </Typography>
    </Box>
  );
}
