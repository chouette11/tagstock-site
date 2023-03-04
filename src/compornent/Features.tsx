import React from "react";
import { Grid, Typography } from "@mui/material";
import {Feature} from "./Feature";

type Props = {
  id: string;
};

export const Features: React.FC<Props> = ({id}) => {
  return (
    <div id={id}>
    <Grid direction="column">
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 2 }}>
        Features
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Feature
            title="Feature 1"
            description="Description of Feature 1"
            imageUrl="https://via.placeholder.com/150"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feature
            title="Feature 2"
            description="Description of Feature 2"
            imageUrl="https://via.placeholder.com/150"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feature
            title="Feature 3"
            description="Description of Feature 3"
            imageUrl="https://via.placeholder.com/150"
          />
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
};