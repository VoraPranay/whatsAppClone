import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Contacts from './contacts'
import Paper from 'material-ui/Paper'
import ChatHistory from './chathistory'

const style={
	        paper:{
				    width:'80%',
					height:'85%',
					backgroundColor:'white',
					marginLeft:'10%',
					marginTop:'-80px',
					display:'inline-block',
			      },
			div0:{
				   backgroundColor:'#F8F9F9',
				   width:'1536px',
		           height:'758px',
		           display:'inline-block',
			     },
			div1:{
				   backgroundColor:'#37C69E',
				   display:'inline-block',
				   width:'100%',
				   height:'120px'
			    },
			div2:{
				   display:'inline-block',
				   width:'30%',
				   height:'100%'
			    },
			div3:{
				   width:'70%',
				   display:'inline-block',
				   height:'100%'
			    },
};

class Chat extends React.Component{

render(){
	return(
	<MuiThemeProvider>
	   <div style={style.div0}>
	   <div style={style.div1}></div>
	     <Paper style={style.paper} zDepth={3}>
	         <div style={style.div2}>
	           <Contacts/>
	         </div>
	         <div style={style.div3}>
	           <ChatHistory/>
	        </div>
	     </Paper>
	   </div>
	</MuiThemeProvider>
   );
 }
}

export default Chat;