import React from "react";
import { Typography, Grid } from "@mui/material";

interface AppScreenshotProps {
  title: string;
  image: string;
}

export const AppScreenshot: React.FC<AppScreenshotProps> = ({
  title,
  image,
}) => {
  return (
    <Grid
      container
      marginTop={4}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      paddingTop={4}
    >
      <Grid item>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: 56, }}>
          タスク管理を
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: 56, }}>
          シンプルに
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          タップのみのタスク追加
        </Typography>
      </Grid>
      <Grid item>
        <img src={image} alt={title} style={{ width: 200, }} />
      </Grid>
    </Grid>
  );
};