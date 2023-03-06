import { Box, Typography } from "@mui/material";

type CharacterProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Character = ({ icon, title, description }: CharacterProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
      <Box mb={2}>{icon}</Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};