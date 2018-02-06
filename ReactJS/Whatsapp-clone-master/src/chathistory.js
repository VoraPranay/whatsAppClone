import React from 'react';
import ReactDOM from 'react-dom';
import ContentSend from 'material-ui/svg-icons/content/send'
import IconButton from 'material-ui/IconButton';

const style={
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
				  backgroundImage:'url("http://i.imgur.com/TnNwdvV.png")'
			   },
			   logo:{
		             width:'40px',
		             height:'40px',
					 marginLeft:'10px',
					 marginTop:'10px',
					 float:'left',
					 borderRadius:'50%'
	                },
				p:{
					fontFamily:'Arial',
					fontSize:'medium',
					letterSpacing:'2px',
					fontWeight:'500',
					marginTop:'20px',
					marginLeft:'60px'
				},
				button:{
					 color:'black',
					  backgroundColor:'Transparent',
					  border:'none',
					  cursor:'pointer',
					  outline:'none'
				},
				div3:{
					width:'100%',
					height:'90%',
				},
				div4:{
					width:'100%',
					height:'10%',
					backgroundColor:'#F2F3F4'
				},
				input:{
					width:'750px',
					height:'30px',
					boxShadow:'none',
					marginTop:'12px',
					marginLeft:'10px',
					paddingLeft:'10px',
					border:'grey',
					borderRadius:'10px',
					outline:'none',
					float:'left'
				},
		       icon:{
				     paddingLeft:'15px',
					 paddingTop:'15px'
			   },
			   p1:{
				   margin:'0px',
				   fontFamily:'Arial',
					fontSize:'medium',
					letterSpacing:'1px',
					fontWeight:'500',
					marginLeft:'30px',
					paddingTop:'10px',
					paddingBottom:'5px'
			   }

};

class ChatHistory extends React.Component{

state={
	message:'Hello!!!'
};

render(){
	return(
	<div >
         <div style={style.div1}>
		        <button style={style.button}><img style={style.logo} src="http://i.imgur.com/TnNwdvV.png" alt='not found'/>
				<p style={style.p}>HPDF</p></button>
         </div>
        <div style={style.div2}>
		        <div style={style.div3}>
                        <p style={style.p1}>
						     {this.state.message}
						</p>
				</div>
				<div style={style.div4}>
				<form>
				    <input type="text" placeholder="Type Your Message here .... " style={style.input} />
				    <IconButton style={style.icon}>
                                 <ContentSend/>
                    </IconButton>
				</form>
				</div>
         </div>		 
	</div>
   );
 }
}

export default ChatHistory;