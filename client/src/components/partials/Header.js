// import React from 'react';
// import PersonIcon from '@material-ui/icons/Person';
// import ForumIcon from '@material-ui/icons/Forum';
// import './header.css'
// import IconButton from '@material-ui/core/IconButton';
// import { Link } from "react-router-dom";
// //api calls to material-ui library

// function Header({ backButton}){
//     return(
//         <div className="header">
//           <Link to="/homepage">
//           <IconButton>
//           <PersonIcon fontSize="large" className="header__icon" />
//           </IconButton>
//           </Link>
//         <Link to="/homepage">
//           <img className="header__logo" src="https://www.seekpng.com/png/full/478-4782814_logo-people-in-circle-png.png" alt="devmeet logo"/>
//         </Link>
//       <Link to="/chat">
//         <IconButton>      
//           <ForumIcon fontSize="large" className="header__icon" />     
//         </IconButton>
//       </Link>
//     </div>
//     )
// }

// export default Header;
import React from 'react';
import particle from '../../logo.svg';
import {Button,Grid,Paper,Typography} from '@material-ui/core';
import {ThreeDRotation} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const Header=()=>{
    return(
        <div>{/**address position on outermost element*/}       
            <Paper elevation={1} className='Header'>
                <ThreeDRotation/>
                <Button variant='contained'color='secondary'>
                    <Link to='/login'>
                        Login
                    </Link>
                </Button>
            </Paper>                
        </div>
    )
}
export default Header;