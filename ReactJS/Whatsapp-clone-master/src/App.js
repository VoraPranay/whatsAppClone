import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import logo from './logo.png';
import Middle from './middle';
import FlatButton from 'material-ui/FlatButton';
import Details from './details'


const style={
	paper:{
		   width:'99.3%',
		   height:'wrap-content',
		   backgroundColor:'#37C69E',
		   margin:'5px',
		   display:'inline-block'
	      },
     div:{
		   width:'1536px',
		   height:'758px',
		   display:'inline-block',
		   backgroundImage:'url("https://api.androidhive.info/res/bg_messages.png")',
		   
	     },
	 logo:{
		  width:'60px',
		  height:'60px',
		  paddingTop:'20px',
		  paddingBottom:'20px',
		  paddingLeft:'15%',
		  float:'left'
	      },
	 name:{
		   paddingTop:'25px',
		   marginLeft:'10px',
		   fontFamily:'Arial',
	       fontWeight:'500',
		   fontSize:'large',
		   letterSpacing:'3px',
		   color:'white',
		   float:'left'
	      },
	middle:{
			 width:'80%',
			 height:'wrap-content',
			 marginLeft:'10%',
             marginTop:'40px',
			 },
	 button1:{
		        float:'right',
				marginTop:'-115px',
		        marginRight:'140px',
		        color:'#17202A',
                backgroundColor:'#ABEBC6',
	          },
	 label:{
		      letterSpacing:'2px',
			  fontFamily:'Arial',
			  textTransform:'capitalize'
	        }
}

class App extends React.Component {
	
	handleClick=()=>{
		ReactDOM.render(<Details/>,document.getElementById('mid'));
	};
	
  render() {
    return (
       <MuiThemeProvider>
	     <div style={style.div}>
		  <Paper style={style.paper} zDepth={2} >
		  <img style={style.logo} src={logo} alt='not found'/>
		  <p style={style.name}>WhatsApp</p>
		 </Paper>
		 <div id="mid" style={style.middle}>
		    <FlatButton label="Sign Up" style={style.button1} labelStyle={style.label} onClick={this.handleClick} />
          <Middle/>
		 </div>
		 </div>
	   </MuiThemeProvider>
    );
  }
}

export default App;
