import './App.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      Handcrafted with <FavoriteIcon> </FavoriteIcon> 
      <Link color="#ffffff" href="https://kito.ai/">
        kito.ai
      </Link>
      {' © '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          kito.ai
        </Typography>
        <Copyright />
      </Box>
    </Container>
    </>
  )
}

export default App
