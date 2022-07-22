import { bottomNavigationClasses, Button, cardClasses, fabClasses, ListItem, ListItemIcon, ListItemText, menuItemClasses, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ButtonGroup from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ThemeProvider } from '@emotion/react';
import RadioGroup from '@mui/material/RadioGroup'
import {FormControlLabel} from '@mui/material';
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

// import {makeStyles}from '@mui/Styles';
// import { styled } from '@mui/styles';
// import {useState}from 'react-router-dom';
//custom theme 
// import { CreateMuiStyled, ThemeProvider } from '@mui/material';
//  const theme= createMuiTheme({
//    palette:{
//     primary:{
//         main:'#fefefe'
//     },
        // secondary:purple   
//    },
// typography:{
    //import from google fonts and put it in 
    //index.css
//     fontfamily:'Quicksand',
//     fontWeightLight:400
// }
//  })
// const useStyles=makeStyles({
//     btn:{
//         backgroundColor:'violet',
//         fontSize:60,
//         '&:hover':{
//             backgroundColor:'blue', 
//         }
//     },
//     title:{
//         textDecoration:'underline',
//         marginBottom:20
//     }
// field:{
    // marginTop:30,
    // marginBottom:30,
//     display:block,
// }
// })

// const MyButton = styled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });


// {/* export default function StyledComponents(){
//       <MyButton>Styled Components</MyButton>} */}

const NavBar = () => {
 //{/* const classes=useStyles() */}
    //   for the form
    // const history=usehistory()
//  const [title,setTitle]=useState(false)
//  const [details,setDetails]=useState(false)
//  const [titleError,setTitleError]=useState(false)
//  const [detailsError,setDetailsError]=useState(false)
//const [radioCategory,setRadioCategory]=useState('todos')
//  const handleSubmit(e)=>{(
    //e.preventDefault();
    // setTitleError(false)
    // setDetailsError(false)
    // if(title===''){
    //     setTitleError(true)
    // }
    // if(details===''){
    //     setDetailsError(true)
    // }
    //if(title && details){
      //axios.postand redirectby using navigate or history.push('/)
//     console.log(details,title,category)
//}
//  )}

  return (
    // <ThemeProvider theme={theme}>
    <nav className='nav'>
       
     
      <ButtonGroup color='secondary' variant='outlined'>
        <Button>One</Button>
        <Button>One</Button>
        <Button>One</Button>
      </ButtonGroup>
      <AcUnitIcon color='string' fontSize='large' />
      {/* <h2> */}
      {/* <Link to='/logs'>Budgeting App</Link> */}
      {/* </h2> */}
      {/* <button> */}
      {/* <Link to='/logs/new'>New Transaction</Link> */}
      {/* </button> */}
      {/* // <Button 
     // //    className={classes.btn}
    //     onClick={() => console.log('clicked me')}
    //     type='submit'
    //     color='secondary'
    //     variant='contained'
    //     startIcon={<SendIcon />}
    //     endIcon={<KeyboardArrowRightIcon />}
    //   >
    //     Submit
    //   </Button> */}
    </nav>
    // {/* </ThemeProvider> */}
    //<form noValidate autoComplete="off">
    // <TextField
    // className={classes.field}
    // label="Note Filled"
    //variant="outlined"
    //fullWidth
    //onChange={(e)=>setTitle(e.target.value)}
    //multiline
     //error={titleError}
    //rows=4
    //required
    //color="Secondary"
    // />

    // <TextField
    // className={classes.field}
    //variant="outlined"
    //fullWidth
    //onChange={(e)=>setDetails(e.target.value)}
    //multiline
    // label="Details"
    //rows=4
    //error={detailsError}
    //required
    //color="Secondary"
    // />

    //<FormControl className={classes.field}>
    //<FormLabel>Note Category</FormLabel>
    //RadioGroup value={radioCategory} onChange={(e)=>setRadioCategory(e.target.value)}>
    //<FormControLabel value="money" control={<Radio/>} label="Money"/>
//<FormControLabel value="todos" control={<Radio/>} label="todos"/>
//<FormControLabel value="reminders" control={<Radio/>} label="reminder"/>
//<FormControLabel value="work" control={<Radio/>} label="work"/>
    //</RadioGroup>
    //<?FormControl>
    // <Button
    // //    className={classes.btn}
    //     type='submit'
    //     color='secondary'
    //     variant='contained'
    //     startIcon={<SendIcon />}
    //     endIcon={<KeyboardArrowRightIcon />}
    //   >
    //     Submit
    //   </Button>
    // </form>
   
  );
};
export default NavBar;

//How to use grid in material ui
// import Paper from  '@mui/material/Paper';
// import Grid from  '@mui/material/Grid';
// import Container from  '@mui/material/Container';
//import NoteCard
//function Notes(){
//   const [notes,setnotes]=useState([])
// }
//useeffect(()=>{
//   fetch()
//   .then(res=>res.json())
//   .then(data=>setNotes(data))
// },[])


//const handleDelete = async(id)=>{
  //await fetch('https://localhost/notes/'+id,{
//     method:'DELETE'}')
// const newNotes= notes.filter(note=>note.id !=id)
//setNotes(newNotes)
// }

// return(
//   <Container>
 // <Grid container>
//  <Grid item xs={12} sm={6}md={3}>
//   <Paper>1</Paper>
//  </Grid>
// <Grid item xs={12} sm={6}md={3}>
//   <Paper>2</Paper>
//  </Grid>
//   <Grid item xs={12} sm={6} md={3}>
//   <Paper>3</Paper>
//  </Grid>
// <Grid item xs={12} sm={6} md={3}>
//   <Paper>4</Paper>
//  </Grid> 
//</Grid
// <Grid container spacing={3}>
//     {notes.map(note=>{
//       <Grid item key={note.id} xs={12} sm={6} md={3}>
//  <Paper>{note.title}</Paper>
//     })}
//to use card
//{notes.map(note=>{
  //       <Grid item key={note.id} xs={12} sm={6} md={3}>
  //  <NoteCard note={note} handleDelete={handleDelete}/>
  //     })}
//</Grid>
//   </Container>
// )
// }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// const useStyles=makeStyles({
//test:{
//   border:(note)=>{
  //if {note.category==='work'}{
    return '1px solid black'
//   }
// }
// }
// })
//function NoteCard({note,handleDelete}){
  // return(
  //  <div>
  //<Card className={classes.test} elevation{1}>
  // <CardHeader
  // action={
   // <IconButton onClick={()=>handleDelete(note.id)}>
   //<DeleteOutlined/>
   //</IconButton>
// }
// title={note.title}
//subheader={note.category}/>
//<CardContent>
//<Typography variant="body2" color="textsecondary">
//{note.details}
//<?Typography>
//<?CardContent>
  //</Card>
  //</div>
  // )}


  //NAVBAR
  // import drawer and typogrphy
  //import appbar and toolbar
  //import List, listITem,ListITemIcon,ListITemTExt
  //const drawerWidth=240
  //const useStyles=makeStyle((theme)=>{
    //return(
    page:{
      //     background:"#f9f9f9",
      //     width:100%,
      //padding:theme.spacing(3)
      //   },
      //drawerPaper:{
// width:drawerWidth
     // },
     //root:{
    //   display:flex
    //  },
    //active:{
      //background:'#c4c4c4'
    //},
    //title:{
      //padding:theme.spacing(2)
   // },
   //appbar:{
    width:'calc(100%-${drawerwidth}px)'
  //  },
  //toolbar:theme.mixins.toolbar ,
  // date:  flex-grow:1,
  // 
    // )
      // })
  //in app.js put all the routes inside the layout
  
  //function NAVBAR({children}){
    // const classes=makeStyles()
    // const history=useHistory()
    //const location=useLocation()
    //const menuItems=[{
//text:'Mynote',
//icon:<SubjectOutlined color='secondary"/>
//path:'/'
//     },
//{
  //text:' create note',
//icon:<AddCircleOutlineOutlined color='secondary"/>
//path:'/create'
//}]
// //
  //  
  //  return (
    //<div className={classes.root}>
    //<AppBar 
    //elevation={0}
    //className={classes.appbar}
    //>
    //  <Toolbar>
    //  <Typography className={classes.date}
    //>Today is the {format(new Date(), 'do MMMM Y')}</Typography>
    //npm install date-fns and import format from date-fns
    //<Typography>
    //MArios
    //</Typography>
    //   </Toolbar>
    // </AppBar>
    //<Drawer className={classes.drawer}
    //variant="permanent"
    //anchor='left'
    //classes={{paper:classes.drawerPaper}}>
    //<div>
    // <Typography variant="h5" className={classes.title}>
    //   Ninja notes
    // </Typography>
    // </div>
    //<List>
//     {menuItemClasses.map(item=>{
//       <ListItem 
// button
//key={item.text}
// onClick={()=>history.push(item.path)}
// className={location.pathname===item.path?classes.active:null}>
// <ListItemIcon >{item.icon}</ListItemIcon>
//   <ListItemText primary={item.text}/>
//          </ListItem>
//     })}
    //</List>
    //</Drawer>
   // <div className={classes.page}>
  //  <div className={classes.toolbar}</div>
  // {children}</div>
  //   </div>
  //  )
  // }