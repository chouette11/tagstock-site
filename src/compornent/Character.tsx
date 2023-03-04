import { Box, Typography } from "@mui/material";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Character = ({ icon, title, description }: FeatureProps) => {
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

export default Character;