import React from "react";
import { Grid, Typography } from "@mui/material";
import { Feature } from "./Feature";

type Props = {
    id: string;
  };

export const Features3: React.FC<Props>  = ({id}) => {
  return (
    <div id={id}>
      <Grid direction="column" paddingTop={8}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", my: 2 }}
        >
          こだわり
        </Typography>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="center"
        >
          <Grid item>
            <Feature
              title="Feature 1"
              description="Description of Feature 1"
              image="https://via.placeholder.com/150"
            />
          </Grid>
          <Grid item>
            <Feature
              title="Feature 2"
              description="Description of Feature 2"
              image="https://via.placeholder.com/150"
            />
          </Grid>
          <Grid item>
            <Feature
              title="Feature 3"
              description="Description of Feature 3"
              image="https://via.placeholder.com/150"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
