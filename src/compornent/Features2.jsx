import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import ReactFreezeframe from "react-freezeframe";
import questionnaire from "../image/questionnaire.gif";
import login from "../image/login.gif";
import task from "../image/task.gif";
import schedule from "../image/schedule.gif";

export const Features2 = ({ id }) => {
  return (
    <div id={id}>
      <Grid direction="column" paddingTop={8}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", my: 2 }}
        >
          使い方（動画）
        </Typography>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="center"
        >
          <Grid item lg={2} xs={8} marginTop={2}>
            <Card>
              <ReactFreezeframe src={questionnaire} />
            </Card>
          </Grid>
          <Grid item lg={2} xs={8} marginTop={2}>
            <Card>
              <ReactFreezeframe src={login} />
            </Card>
          </Grid>
          <Grid item lg={2} xs={8} marginTop={2}>
            <Card>
              <ReactFreezeframe src={task} />
            </Card>
          </Grid>
          <Grid item lg={2} xs={8} marginTop={2}>
            <Card>
              <ReactFreezeframe src={schedule} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
