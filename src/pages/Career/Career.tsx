import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import School from "./School";
import HighSchool from "./HighSchool";
import University from "./University";

export default function Career() {
  return (
    <Box>
      <Header itemName="Career" />
      <Box>
        <School />
        <HighSchool />
        <University />
      </Box>
    </Box>
  );
}
