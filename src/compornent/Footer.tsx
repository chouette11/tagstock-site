import { Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        mt: '2rem',
        py: '1rem',
        backgroundColor: '#6a0dad',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <Grid item sx={{ml: 4}}>
        <Typography variant="body2">
          &copy; 2023 My Awesome App. All rights reserved.
        </Typography>
        </Grid>
    </Grid>
  );
}