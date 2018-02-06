import React from 'react';
import ReactDOM from 'react-dom';
import Details from './details';
import Login from './login';


const style={
		    div1:{
				     float:'left',
					 width:'55%',
					 height:'wrap-content',
			    },
		   div2:{
			        float:'right',
				    backgroundColor:'',
					width:'30%',
					height:'wrap-content',
				    fontFamily:'Arial',
					marginTop:'40px'
			    },
			h:{
				    fontFamily:'arial',
					fontWeight:'100',
					fontSize:'30px',
					letterSpacing:'3px',
					color:'#626567',
					marginLeft:'40px',
					marginTop:'-5px'
			   },
			sh:{
				    fontFamily:'Arial',
				    fontWeight:'100',
					fontSize:'25px',
					letterSpacing:'2px',
					color:'#37C69E',
			   },
			content:{
                     fontFamily:'Arial',
					 fontWeight:'100',
					fontsize:'20px',
                     color:'#626567',
                     textAlign:'left',
                     letterSpacing:'1px',	
                     marginLeft:'20px'					  
			    },
			button:{
				      color:'#FA6607',
					  backgroundColor:'Transparent',
					  border:'none',
					  cursor:'pointer',
					  fontFamily:'Arial',
					  fontSize:'medium',
					  letterSpacing:'2px',
					  outline:'none'
			       }
		    
}

class Middle extends React.Component{
	
		handleClick=()=>{
		ReactDOM.render(<Details/>,document.getElementById('mid'));
	    };
	
	render(){
		return(
		   
		     <div>
			      <div style={style.div1}>
				      <p style={style.h}>Welcome to WhatsApp</p>
					    <p style={style.sh}>About</p>
					          <p style={style.content}>Hello, This is a Clone of Chatting App <span style={{color:'#37C69E'}}>Whatsapp</span> through which you can chat
					                            with your Friends, Relatives who have signed up this App. </p>
					    <p style={style.sh}>Sign Up</p>
							  <p style={style.content}>To chat with already registered 
							    User, You must need to<button style={style.button} onClick={this.handleClick}><i>Sign Up</i></button>first.<br/><br/>
                           							 Signing Up is a 3 step Process -  <br/><br/>
													 1. Filling Details and Choosing Password. <br/>
													 2. Verification of Mobile Number through OTP(One time password).<br/>
													 3. Login Through the Mobile number and The password choosen in 1st step.</p>
					    <p style={style.sh}>Login</p>
							   <p style={style.content}>Start Chatting with Friends by login through the right Box.</p>
				  </div>
				  <div style={style.div2}>
				       <Login/>
				  </div>
			 </div>
		   
		);
	}
}
export default Middle;