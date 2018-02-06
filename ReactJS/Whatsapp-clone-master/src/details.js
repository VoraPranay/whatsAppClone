import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Otp from './otp'

const style={
	        paper:{
				    width:'30%',
					height:'wrap-content',
					backgroundColor:'white',
					marginLeft:'35%'
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
				  marginTop:'5px',
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

class Details extends React.Component{
	
state={
	message : '',
	message1 : ''
};

handleSubmit=(e)=>{
	e.preventDefault();
	const p1=e.target.psw.value;
	const p2=e.target.cpsw.value;
	const mob=e.target.mob.value;
	if(p1===p2)
	{
		this.setState({
		       message1:''	
		});
		     if(mob.length===10){
		                ReactDOM.render(<Otp/>,document.getElementById('mid'));
		                        }
		    else{
			           this.setState({
				       message:' mobile number should be 10 digits long. '
			                       });
		        }
	}
	else
	{
		this.setState({
			message1:'Both passwords should be same'
		});
	}
	};
	
handleChange=(e)=>{
	e.preventDefault();
	const num = e.target.value;
	if(num.length === 10)
	{
		this.setState({
			message:' '
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
				<div>
				  <p style={{textAlign:'center',color:'grey',fontFamily:'Arial',fontWeight:'100',fontSize:'medium'}}>Fill the Following Details - </p>
		        <Paper style={style.paper} zDepth={3}>
				  <form style={style.form1} onSubmit={this.handleSubmit} >
				   <div style={style.div}>
				   <p style={style.p}>Details</p><hr/><br/>
				   
				          <label style={style.label}>Name</label><br/>
                          <input type="text" placeholder="Enter your Name" name="name" style={style.input} required/><br/><br/>
				  				   
				          <label style={style.label}>Mobile Number</label><br/>
                          <input type="number" placeholder="Enter Mobile Number" name="mob" style={style.input} onChange={this.handleChange} required />
						  <p style={style.p1}><i>{this.state.message}</i></p>

                          <label style={style.label}>Password</label><br/>
                          <input type="password" placeholder="Enter Password" name="psw" style={style.input} required /><br/><br/>
						  
						  <label style={style.label}>Confirm Password</label><br/>
                          <input type="password" placeholder="Enter Password again" name="cpsw" style={style.input} required />
						   <p style={style.p1}><i>{this.state.message1}</i></p>

	                      <RaisedButton label="Next" type="submit" labelColor='white'  fullWidth='true' 
						                        buttonStyle={style.button1} style={style.but} />
                         	   
				   </div>
				</form>
			 </Paper>
			 </div>
		    </MuiThemeProvider>
		);
	}
}
export default Details;