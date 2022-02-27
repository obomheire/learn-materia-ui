import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { makeStyles } from '@mui/styles';

function App() {
  return (
    <>
    <CssBaseline />
     <AppBar position='relative'>
     <Toolbar>
     <PhotoCameraIcon />
        <Typography variant='h6'>Photo Album</Typography>
     </Toolbar>
     </AppBar>
     <main>
       <div>
         <Container maxWidth='sm'>
           <Typography variant='h2' align='center' color='text.primary' gutterBottom >Photo Album</Typography>
              <Typography variant='h5' align='center' color='text.secondary' paragraph >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur </Typography>
              <div>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                      <Button variant='contained' color='primary'>See Photos</Button>
                  </Grid>
                  <Grid item>
                      <Button variant='outlined' color='primary'>Secondary Action</Button>
                  </Grid>
                </Grid>
              </div>
         </Container>
       </div>
     </main>
    </>
  );
}

export default App;
