import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './login';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SocialSentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';

const style={
	          div:{
				 width:'30%',
				 marginLeft:'35%'
			     },
	        
	        paper:{
				    width:'wrap-content',
					height:'wrap-content',
					backgroundColor:'white',
			      },
		    form1:{
				  border:'1px solid grey',
				  padding:'15px',
				  height:'wrap-content',
				  paddingBottom:'25px'
			     },
		     p:{
				  textAlign:'center',
				  fontFamily:'arial',
				  fontWeight:'100',
				  letterSpacing:'3px',
				  color:'#37C69E',
			    },
			 button1:{
				      backgroundColor:'#37C69E',
			        },
			 but:{
				   marginTop:'5px'
			     },
			 input:{
				    padding:'5px',
					marginTop:'5px',
					width:'95%',
					boxShadow:'none'
			       },
			 label:{
				    color:'#37C69E',
					letterSpacing:'2px'
			       },
}

class Otp extends React.Component{
	
	 constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   };

		 state = {
                 open: false,
                 };

        handleSubmit=(event)=>{
			  this.setState({open: true});
			  ReactDOM.render(<Login/>,document.getElementById('log'));
		};
		handleChange=(event)=>{
			this.setState({value:event.target.value});
		};
        handleClose = () => {
                   this.setState({open: false});
                  };
	
	
   render(){
	   
	   	const actions = [
        <FlatButton
        label="Login"
        primary={true}
        onClick={this.handleClose}
      />,
    ]
		
	   
		return(
		        <MuiThemeProvider>
				<div id="log" style={style.div}>
				  <p style={{textAlign:'center',color:'grey',fontFamily:'Arial',fontWeight:'100',fontSize:'medium'}}>
				         Enter the One Time Password sent to Your Mobile Number - </p>
		        <Paper style={style.paper} zDepth={3}>
			     <form style={style.form1} onSubmit={this.handleSubmit}>
				   <div>
				   <p style={style.p}>Authentication</p><hr/><br/>
				  				   
				   
                          <label style={style.label}>One Time Password(OTP)</label><br/>
                          <input type="text" placeholder="Enter One Time Password" name="otp" style={style.input} 
						  onChange={this.handleChange} value={this.state.value} required /><br/><br/>

	                      <RaisedButton type="submit" label="Confirm" labelColor='white'  fullWidth='true' 
						                        buttonStyle={style.button1} style={style.but} />
                         	   
				   </div>
				</form>
			 </Paper>
			 
			  <Dialog
                             title="Congratulations"
                             actions={actions}
                             modal={true}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                  You are Now Registered. You can Login now. HAPPY CHATTING !!! <SocialSentimentVerySatisfied color="#37C69E" />
             </Dialog>
			 
			 </div>
		    </MuiThemeProvider>
		);
	}
}
export default Otp;