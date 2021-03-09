// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// export default function LandingPage() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main>
//         {/* Hero unit */}
//         <div className={classes.heroContent}>
//           <Container maxWidth="sm">
//             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//            DevMeet.
//             </Typography>
//             <Typography variant="h5" align="center" color="textSecondary" paragraph>
//               Social networking made for Developers that allows users to swipe to like or dislike other profiles based on their photos, posts, and favorite coding language.
//             </Typography>
//             <div className={classes.heroButtons}>
//               <Grid container spacing={2} justify="center">
//                 <Grid item>
//                   <Button variant="contained" color="primary" href='/register'>
//                    Register
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="outlined" color="primary" href="/login">
//                     Login
//                   </Button>
//                 </Grid>
//               </Grid>
//             </div>
//           </Container>
//         </div>
       
//       </main>
//       {/* Footer */}
//       <footer className={classes.footer}>
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </footer>
//       {/* End footer */}
//     </React.Fragment>
//   );
// }
import React from 'react';
import {Grid,Paper, Typography} from '@material-ui/core';

const LandingPage=()=>{
  return(
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Typography variant='h4'>
              practice makes progress, as well as adds perspective
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default LandingPage;