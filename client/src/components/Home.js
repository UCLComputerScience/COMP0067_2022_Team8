import * as React from 'react';
import Image from '../images/stock1.jpeg';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    backgroundImage: `url(${Image})`,
    height: '100vh',
    backgroundSize: `cover`
  },
  card: {
    width: '300px',
  }
};

function Home() {
  return (
    <Container maxWidth="xlg" style={styles.container} >
      <Grid
        container
        spacing={10}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
      <Grid item xs={12} md={6} lg={1}
      style={{
        position: 'absolute', 
        left: '65%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      >
        <Card style={styles.card}>

          <CardContent>
            <Typography sx={{ fontSize: 28, color: '#28ABB9'}} color="text.secondary" gutterBottom>
              IXN For Good
            </Typography>
            
            <Typography sx={{ fontSize: 38, color: '#2D6187'}} variant="body1">
              Enpowering Charities with the Art of Possible.
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Read more in our brochure</Button>
          </CardActions>
        </Card>
      </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

