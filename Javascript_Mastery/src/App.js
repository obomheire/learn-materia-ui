import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme();

const useStyle = makeStyles({
  container: {
    backgroundColor: 'red',
    // padding: theme.spacing(8, 0, 6)
  }
});

function App() {

  const classes = useStyle();
  return (
    // <ThemeProvider theme={theme}>
    <>
    <CssBaseline />
     <AppBar position='relative'>
     <Toolbar>
     <PhotoCameraIcon />
        <Typography variant='h6'>Photo Album</Typography> 
     </Toolbar>
     </AppBar>
     <main>
       <div className={classes.container}>
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
    // </ThemeProvider>
  );
}

export default App;
