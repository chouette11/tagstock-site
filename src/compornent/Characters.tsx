import { Box } from "@mui/material";
import { Character } from "./Character";
import { FaCheckSquare, FaCalendarAlt } from "react-icons/fa";

export const Characters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 4 },
        padding: { xs: "1rem 0", md: "3rem 0" },
        bgcolor: "purple",
        color: "white",
      }}
    >
      <Character
        icon={<FaCalendarAlt />}
        title="Feature 1"
        description="This is a description of feature 1."
      />
      <Character
        icon={<FaCheckSquare />}
        title="Feature 2"
        description="This is a description of feature 2."
      />
      <Character
        icon={<FaCalendarAlt />}
        title="Feature 3"
        description="This is a description of feature 3."
      />
    </Box>
  );
};
