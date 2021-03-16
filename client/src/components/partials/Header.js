import React from 'react';
import particle from '../../logo.svg';
import {Button,Grid,Paper,Typography} from '@material-ui/core';
import {ThreeDRotation} from '@material-ui/icons';
import 
import {Link} from 'react-router-dom';
import 'fontsource-roboto';

const Header=()=>{
    return(
        <div className='Header'>           
            <ThreeDRotation/>
            <Button href='#text-buttons'color='primary'size='large'>
                <Link to='/login'>
                    <Typography variant='button'color='secondary'>
                        Login
                    </Typography>
                </Link>
            </Button>                            
        </div>
    )
}
export default Header;
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