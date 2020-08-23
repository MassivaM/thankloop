import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const styleSheet = {
  root: {

    padding:0,
    margin:0
  },

  list : {
    width : 100,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },
  logo:{
    padding:0,
    margin: 0

  },
  list:{


  },buttons:{
    marginLeft:'auto',
    color: 'black', 
    
   
  
  
  },
  button:{
    margin:11,
    fontSize: 15,
    
  
  
  },
  links:{
     
    color: 'white', 
    padding:0,
    textDecoration : 'none',
    '&:hover': {
      color: "#6c5ce7",
   }
  },
  links2:{
     
    color: 'black', 
    padding:0,
    textDecoration : 'none',
    '&:hover': {
      color: '#70a1ff',
   }
  },
   register:{
    color: 'white',
    backgroundColor : "#aa4a40",
    
    '&:hover': {
      backgroundColor: "white",
   }
  }

  
}


//array with nav bar parts
const navLinks = [
  {
      title : 'Home', 
      path: '/'
  },
  {
      title: "Submit someone",
      path: '/submit'
  }, 
  {
      title: 'Benefits of thanking',
      path :'/benefits'

  },
  {
    title: 'Login',
    path:'/login'
  },
  
  

]


class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 880){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 880){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    const {classes} = this.props
    return (
      <div className={styleSheet.root}>
        <AppBar position="fixed"  style={{ margin: 0, padding: 0, background: '#70a1ff', boxShadow: 'none',height:60}} >
          <Toolbar style={{background:'#70a1ff'}}>
          
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

            
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>
              

         
            <List className = {this.props.classes.list}>
            {navLinks.map((link,index) =>(
               <ListItem key = {1} button divider  className={classes.links2}><Link to={link.path} className={classes.links2}>{link.title}</Link> </ListItem>
               ))}
                
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar position="fixed"  style={{flexGrow:0, margin: 0, padding: 0, background: '#70a1ff', boxShadow: 'none', height:60}}>
        <Toolbar  style={{background: '#70a1ff'}}>
       
            <div className={classes.buttons}>
            
            {navLinks.map((link,index) =>(
                <Button className={classes.button}>
                  

                  <Link to={link.path} className={classes.links}>{link.title}</Link>
                              
             
                        
            </Button>))}
          
              </div>

        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);




/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import title from '../assets/thankloop-title.svg'

const useStyles = makeStyles((theme) => ({
  root: {
  
    flexGrow: 1,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#dfe6e9"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed"  style={{ background: '#70a1ff', boxShadow: 'none'}}>
            <Toolbar>
            <img src={title} alt="logo" className={classes.logo} />
          <IconButton edge="start" className={classes.menuButton} color="#dfe6e9" aria-label="menu">
          
          </IconButton>
          <Typography variant="h6" className={classes.title}>
         
          </Typography>
          <Button color="inherit">Submit someone</Button>
          <Button color="inherit">Benefits of thanking</Button>
          <Button color="inherit">Login</Button>
     
        </Toolbar>
      </AppBar>
    </div>
  );
}*/