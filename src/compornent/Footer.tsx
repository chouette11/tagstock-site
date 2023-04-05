import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

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
        <TextButton variant='text' href='https://pocket-schedule-de.firebaseapp.com/'>プライバシーポリシー</TextButton>
        </Grid>
    </Grid>
  );
}
const TextButton = styled(Button)({
  color: '#FFFFFF',
});