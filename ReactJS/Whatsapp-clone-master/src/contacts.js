import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const style = {
	           div1:{
				   width:'100%',
				   height:'60px',
				   backgroundColor:'#F2F3F4',
				   display:'inline-block',
				   border:'1px solid #D7DBDD',
			   },
			   div2:{
				   width:'100%',
				   height:'581px',
				   display:'inline-block',
				   border:'1px solid #D7DBDD',
				   overflowY:'scroll',
				   marginTop:'0px'
			   },
			    logo:{
		             width:'40px',
		             height:'40px',
					  float:'left',
					  backgroundColor:'Transparent',
					  border:'none',
					  cursor:'pointer',
					  outline:'none',
					  marginTop:'5px',
					  marginLeft:'10px',
					  borderRadius:'50%'
	                },
			    button:{
				      color:'black',
					  backgroundColor:'Transparent',
					  border:'none',
					  cursor:'pointer',
					  fontFamily:'Arial',
					  fontSize:'small',
					  letterSpacing:'2px',
					  outline:'none',
					  marginTop:'22px',
					  marginLeft:'200px'
					  
			       }
			  
};


class Contacts extends React.Component{

state={
	contacts:['HPDF','Rahul','Garima','Himanshi','Rishav'],
	img:['','','','','']
};


	
handleClick=()=>{
		ReactDOM.render(<App/>,document.getElementById('root'));
	    };

render(){
	return(
	<div>
         <div style={style.div1}>
		       <button style={style.logo} ><img style={style.logo} src="http://i.imgur.com/TnNwdvV.png" alt='not found'/></button>
			  <button style={style.button} onClick={this.handleClick}>LOGOUT</button>
         </div>
        <div style={style.div2}>
			
		    <List>
                  <ListItem primaryText={this.state.contacts[0]}  leftAvatar={<Avatar src={this.state.img[0]} />} />
                  <ListItem primaryText={this.state.contacts[1]}  leftAvatar={<Avatar src={this.state.img[1]} />} />
                  <ListItem primaryText={this.state.contacts[2]}  leftAvatar={<Avatar src={this.state.img[2]} />} />
                  <ListItem primaryText={this.state.contacts[3]}  leftAvatar={<Avatar src={this.state.img[3]} />} />
				  <ListItem primaryText={this.state.contacts[4]}  leftAvatar={<Avatar src={this.state.img[4]} />} />
				  
            </List>
		   
         </div>		 
	</div>
   );
 }
}

export default Contacts;