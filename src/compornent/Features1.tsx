import React from "react";
import { Grid, Typography } from "@mui/material";
import { Feature } from "./Feature";
import work from "../image/work.jpg";
import free from "../image/free.jpg";
import student from "../image/student.jpg";

type Props = {
  id: string;
};

export const Features1: React.FC<Props> = ({ id }) => {
  return (
    <div id={id}>
      <Grid direction="column" paddingTop={8}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", my: 2 }}
        >
          活用シーン
        </Typography>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="center"
        >
          <Grid item>
            <Feature
              title="退勤後"
              description="Description of Feature 1"
              image={work}
            />
          </Grid>
          <Grid item>
            <Feature
              title="Feature 2"
              description="Description of Feature 2"
              image={free}
            />
          </Grid>
          <Grid item>
            <Feature
              title="Feature 3"
              description="Description of Feature 3"
              image={student}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
