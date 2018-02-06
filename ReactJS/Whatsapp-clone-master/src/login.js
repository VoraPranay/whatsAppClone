import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chat from './chat'

const style={
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
			 p1:{
				  fontSize:'small',
                  marginTop:'-1px',
				  color:'red',
				  letterSpacing:'1px'
			    }
}

class Login extends React.Component{
	
state={
	message: " "
};
	
handleSubmit=(e)=>{
	e.preventDefault();
const mob = e.target.mob.value;
const pass = e.target.psw.value;
if(mob.length===10)
{
	ReactDOM.render(<Chat/>,document.getElementById('root'))
}
else
{
	return false;
}
};

handleChange=(e)=>{
	e.preventDefault();
	const num = e.target.value;
	if(num.length === 10)
	{
		this.setState({
			message:''
	    });
	}
    else{
		this.setState({
			message:' mobile number should be 10 digits long. '
	    });
	}
};

	
	render(){
		return(
		        <MuiThemeProvider>
		        <Paper style={style.paper} zDepth={3}>
			     <form style={style.form1} onSubmit={this.handleSubmit}>
				   <div style={style.div}>
				   <p style={style.p}>LOGIN</p><hr/><br/>
				  				   
				          <label style={style.label}>Mobile Number</label><br/>
                          <input type="number" placeholder="Enter Mobile Number" name="mob" style={style.input} onChange={this.handleChange} required/>
	                          <p style={style.p1}><i>{this.state.message}</i></p>

                          <label style={style.label}>Password</label><br/>
                          <input type="password" placeholder="Enter Password" name="psw" style={style.input} required /><br/><br/>
                           
	                      <RaisedButton type="submit" label="Submit" labelColor='white'  fullWidth='true' 
						                        buttonStyle={style.button1} style={style.but}  />
                         	   
				   </div>
				</form>
			 </Paper>
		    </MuiThemeProvider>
		);
	}
}
export default Login;