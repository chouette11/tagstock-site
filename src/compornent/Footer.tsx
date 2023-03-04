import { Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{
        mt: '2rem',
        py: '1rem',
        backgroundColor: '#6a0dad',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="body2">
          &copy; 2023 My Awesome App. All rights reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Link href="#" sx={{ mx: 1, color: '#fff' }}>
          Terms of Use
        </Link>
        <Link href="#" sx={{ mx: 1, color: '#fff' }}>
          Privacy Policy
        </Link>
      </Grid>
    </Grid>
  );
}

export default Footer;