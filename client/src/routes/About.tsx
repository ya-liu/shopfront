import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        About
      </Typography>
      <Typography component="p" variant="body1" align="center" gutterBottom>
        I am a software engineer, and I can't live without espresso. So I created this website to make sure espresso aficionados like me always have great beans.
      </Typography>
      <Typography component="p" variant="body1" align="center" gutterBottom>
        Only the best espresso coffee beans here! You know you need them! 🤓
      </Typography>
    </Container>
  );
}