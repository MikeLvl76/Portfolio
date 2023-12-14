import { Box, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import School from "./School";
import HighSchool from "./HighSchool";
import University from "./University";

export default function Career() {
  return (
    <Box>
      <Header itemName="Career" />
      <Typography
        component="div"
        variant="h1"
        textAlign="center"
        sx={{ flexGrow: 1, padding: 1 }}
      >
        My career
      </Typography>
      <Box>
        <School />
        <HighSchool />
        <University />
      </Box>
    </Box>
  );
}
