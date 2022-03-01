import { Paper, Grid, Typography, Box } from '@mui/material'

const TourCard = () => {
  return (
    // <Paper elevation={3} square variant='outlined' > Hello World </Paper>
    <Grid item xs={3}>
    <Paper elevation={3}>
        <img src="https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg" alt="" className='img'/>
        <Box paddingX={1}>
        <Typography variant='subtitle1' component='h2'>
            Immerse into the fall
        </Typography>
        <Box sx={{display:'flex', alignItems:'center'}}>
        <Typography variant='body2' component='p'>
            5 Hours
        </Typography>
        </Box>
        </Box>
    </Paper>
    </Grid>
  )
}

export default TourCard