import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export const Feature: React.FC<Props> = ({ title, description, imageUrl }) => {
  return (
    <div style={{
        padding: "1rem",
      }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
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