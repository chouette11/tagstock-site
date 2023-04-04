import React from "react";
import { Grid, Typography } from "@mui/material";
import { Feature } from "./Feature";
import work from "../image/work.jpg";
import study from "../image/study.jpg";
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
              title="気になるツイートを見つけた時"
              description="共有機能"
              image={work}
            />
          </Grid>
          <Grid item>
            <Feature
              title="作業開始時"
              description="自動スケジュール作成機能"
              image={study}
            />
          </Grid>
          <Grid item>
            <Feature
              title="イベントポスターを見つけた時"
              description="カメラでの追加機能"
              image={student}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
