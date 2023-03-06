import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
  image: string;
};

export const Feature: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div style={{
        padding: "1rem",
      }}>
    <Card>
      <CardMedia component="img" image={image} alt={title} height={240} width={400}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};