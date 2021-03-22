import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreIcon from '@material-ui/icons/MoreVert';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import { withStyles } from "@material-ui/core/styles";
import { PermIdentityOutlined } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import {pink,teal} from "@material-ui/core/colors"
// import { Image } from 'semantic-ui-react'
import Grid from "@material-ui/core/Grid"
import {createMuiTheme} from "@material-ui/core/styles"
import {ThemeProvider} from "@material-ui/core"
import {grey} from "@material-ui/core/colors" 
import MenuItems from "./MenuItems"
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button"
import { useHistory } from 'react-router-dom';
import {Search} from "../requests"
import { Divider, Header, Image, Segment } from 'semantic-ui-react'

const muiTheme = createMuiTheme({
    palette: {
      primary:{
        // light: grey[300],
        main: grey[50],
      },
      secondary:{
        light: grey[500],
        main: grey[50],
      },

    },
  });

  const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 2
    },

  });
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  customBadge: {
    backgroundColor: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    fontSize:"large",
    color: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    border: "3px solid white",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(muiTheme.palette.secondary.light, 0.15),
    '&:hover': {
      backgroundColor: fade(muiTheme.palette.primary.main, 0.25),
      border: "1px solid #bdbdbd",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    color: "#757575",
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searched, setSearched] = React.useState([])
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  let history=useHistory()

  // console.log(searchTerm)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const handleSubmit = (event)=>{
    event.preventDefault();
    const formData= new FormData(event.currentTarget);
    const params={
        searchTerm: formData.get('searchTerm'),
        // body: formData.get('body')
    }
    history.push({
      pathname: "/search",
      search: "black jeans",
      state:{
        searched: searched
      }
    })

    // console.log(params)

}

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{
        margin:0,
        padding: 0
      }}
      // className="p-4"
    >
      {props.currentUser?
      <>
      <div className="ml-2 mr-2 mt-4 mb-0">
      <MenuItem onClick={handleMenuClose} className="text-cenetr">
        <h4>Hello, 
      {`${props.currentUser.first_name} ${props.currentUser.last_name}`}
      </h4></MenuItem>
      <Divider section />
      </div>
     
       <div className="text-center ml-2 mr-2">
    
       <Link href="/orders" underline="none" color="inherit" ><h5>Orders</h5></Link>
      
       <Link href="/wishlists" underline="none" color="inherit" className="mt-4"><h5>Wishlist</h5></Link>
   
       <Link href="/" underline="none" color="inherit"><h5>Gift Cards</h5></Link>
   
       <Link href="/contact_us" underline="none" color="inherit"><h5>Contact Us</h5></Link>
          <Divider section />
          </div>
          <Button onClick={props.destroySession} style={{
            marginLeft:"24%"
          }}>Sign Out</Button>
         
     
      {/* <p>Orders</p> */}
      </>
      :
      <>
      <h6>Welcome</h6>
      <p>To access account and manage orders </p>
      <Link href="/sign_in">LOGIN</Link>
      <Link href="/sign_up"> /SIGNUP</Link>
      <MenuItem onClick={handleMenuClose}>Welcome</MenuItem>
      </>
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            size="medium"
            >
            <PermIdentityOutlined color="inherit"/>
            </IconButton>
            <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show wishlist" color="inherit">
        {props.wishlist?
         
         <Badge badgeContent={props.wishlist.length} color="secondary"></Badge>
         :
           <Badge color="secondary"></Badge>
         }
            <FavoriteBorderIcon />
          
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem>
      <IconButton aria-label="show cart" color="inherit">
          {props.cart?
         
          <Badge badgeContent={props.cart.length} color="secondary"></Badge>
          :
            <Badge color="secondary"></Badge>
          }
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <p>Cart</p>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow} >
    <ThemeProvider theme={muiTheme} >
      <AppBar position="static" style={{
      backgroundColor:"#eeeeee"
    }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="/">  <Image src='/logo2.png' size='tiny' className="mt-2 mb-2"/></Link>
          </Typography>
          <Grid container justify="space-between">
            <Grid item style={{
              marginLeft:"15%"
            }}>
              <MenuItems/>
            </Grid>
            <Grid item style={{
              marginTop:"0.3%",
              marginRight:"14%",
             
            }}>
            
              <div className={classes.search}>

                <form onSubmit={handleSubmit}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  name="searchTerm"
                  value={searchTerm}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleChange}
          
                />
                                {/* <div className={classes.searchIcon}> */}
                                <Link href="/search" color="inherit">
                 <Button type=""> <SearchIcon /></Button>
                   </Link>
                {/* </div> */}
                
                </form>
              </div>
            
            </Grid>
          </Grid>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              
            >
                <Grid container direction="column">
                    <Grid item style={
                      {
                        marginLeft:"10%"
                      }
                    }><PersonIcon fontSize="large" style={{
                      backgroundColor: '#ccc',
                      zIndex: 1,
                      color: '#eeeeee',
                      width: 35,
                      height: 31,
                      display: 'flex',
                      borderRadius: '50%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundImage:
     'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
   boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
                      
                     }} /></Grid>
                    <Grid item >
                        <Typography variant="h6" color="inherit" className={classes.text} style={{
                          color:"black",
                          fontSize:"tiny"
                         
                        }}>
                        Profile
                        </Typography>
                    </Grid>
              
                </Grid>
            </IconButton>
            <Link href="/wishlists" props={props.cart} underline="none" color="inherit">
            <IconButton aria-label="show 17 wishlist" >
                <Grid container direction="column">
                    <Grid item>
                    {props.wishlist?
         
                    <Badge badgeContent={props.wishlist.length} classes={{ badge: classes.customBadge }}
                    >
                      <FavoriteIcon style={{
                       backgroundColor: '#ccc',
                       zIndex: 1,
                       color: '#eeeeee',
                       width: 35,
                       height: 31,
                       display: 'flex',
                       borderRadius: '50%',
                       justifyContent: 'center',
                       alignItems: 'center',
                       backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
                       
                      }} />
                    </Badge>
                    :
                      <Badge color="secondary">
                        <FavoriteIcon fontSize="large"   style={{
                       backgroundColor: '#ccc',
                       zIndex: 1,
                       color: '#eeeeee',
                       width: 35,
                       height: 31,
                       display: 'flex',
                       borderRadius: '50%',
                       justifyContent: 'center',
                       alignItems: 'center',
                       backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
                       
                      }} />
                      </Badge>
                    }
                        
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{
                          color:"black",
                          fontSize:"tiny"
                        }} className={classes.text}>
                            Wishlist
                        </Typography>
                    </Grid>
              </Grid>
            </IconButton>
            </Link>

            <Link href="/cart" props={props.cart} underline="none" color="black">
            <IconButton aria-label="show 17 cart" >
                <Grid container direction="column">
                    <Grid item>
                    {props.cart?
         
                    <Badge badgeContent={props.cart.length} classes={{ badge: classes.customBadge }}
                    >
                      <ShoppingCartIcon style={{
                       backgroundColor: '#ccc',
                       zIndex: 1,
                       color: '#eeeeee',
                       width: 35,
                       height: 31,
                       display: 'flex',
                       borderRadius: '50%',
                       justifyContent: 'center',
                       alignItems: 'center',
                       backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
                       
                      }} />
                    </Badge>
                    :
                      <Badge color="secondary">
                        <ShoppingCartIcon fontSize="large"   style={{
                       backgroundColor: '#ccc',
                       zIndex: 1,
                       color: '#eeeeee',
                       width: 35,
                       height: 31,
                       display: 'flex',
                       borderRadius: '50%',
                       justifyContent: 'center',
                       alignItems: 'center',
                       backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
                       
                      }}/>
                      </Badge>
                    }
                        
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{
                          color:"black"
                        }} className={classes.text}>
                            Cart
                        </Typography>
                    </Grid>
              </Grid>
            </IconButton>
            </Link>
 

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
