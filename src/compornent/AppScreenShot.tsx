import React from "react";
import { Typography, Grid } from "@mui/material";

interface AppScreenshotProps {
  title: string;
  image: string;
}

const AppScreenshot: React.FC<AppScreenshotProps> = ({ title, image }) => {
  return (
    <Grid container spacing={8} >
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          My Awesome App
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
          faucibus justo, ac volutpat sapien dictum non. Sed nec justo eu nibh
          dignissim aliquet.
        </Typography>
    
      </Grid>
      <Grid item xs={12} md={6} justifyContent="end">
        <img src={image} alt={title} style={{ maxWidth: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default AppScreenshot;
