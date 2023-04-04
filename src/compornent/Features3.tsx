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
          実装予定
        </Typography>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="center"
        >
          <Grid item>
            <Feature
              title="Googleカレンダーとの連携"
              description="カレンダー画面"
              image="https://via.placeholder.com/150"
            />
          </Grid>
          <Grid item>
            <Feature
              title="タスク共有機能"
              description="一緒に作業する時"
              image="https://via.placeholder.com/150"
            />
          </Grid>
          <Grid item>
            <Feature
              title="音声アシスタントとの連携"
              description="Googleアシスタント、アレクサ"
              image="https://via.placeholder.com/150"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
