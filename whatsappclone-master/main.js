$(document).ready(function(){
var token;
var userID;
var l;
var onetime = undefined;	

var dataUrl = 'http://data.contrast67.hasura-app.io/';
var auhUrl = 'http://auth.contrast67.hasura-app.io/';

var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
			   + (currentdate.getMonth()+1) + "/"
			   + currentdate.getFullYear() +" @ "
			   + currentdate.getHours() + ":"
			   + currentdate.getMinutes() + ":"
			   + currentdate.getSeconds();
	//on click sign up
	
	//on click login

	//message wala portion
	   
	$(send).click(function(){
       if($('#textarea1').val()==""){
            Materialize.toast('Enter Message', 2000,'rounded')
	   }
	   else{
		   $.ajax({
				url:dataUrl + 'v1/query',
				contentType: 'application/json',
				method: 'post',
				data: JSON.stringify({
					"type": "insert",
					"args": {
						"table":"chat",
						"objects": [
							{
							  "name":$('#first_name').val(),
							  "message": $('#textarea1').val(),
							  "date": "datetime"
							}
						    ]
					   }
				})
		   }).done(function(){
			   alert("Message send successfully");
			   //also display new chats

			   $("#tabl").load(location.href + " #tabl");
			   //refresh table
               //add headers too
			   //load data
			   $.ajax({
				   url: dataUrl+'v1/query',
				   method: 'post',
				   contentType: 'application/json',
				   data: JSON.stringify({
					   "type": "select",
					   "args":{
						   "table": "chat",
						   "columns": ["id","name","message","date"]
					   }
				   })
			   }).done(function(data){
				   //display data inside table

				   var tr;
				   for(var i =0 ; i<data.length; i++){
					  
					tr = $('<tr/>');
					tr.append(" <td> "+ data[i].name + "<td>");
					tr.append(" <td> "+ data[i].text + "<td>");
					tr.append(" <td> "+ data[i].date + "<td>");
					
					$('table').append(tr);
				   }
			   })

		   }).fail(function(k){
               alert('error' + k);
		   });
	   }
});

//function to display data every x seconds

function displaydata(){
//error space on args
	$.ajax({
		url: dataUrl+'v1/query',
		method: 'post',
		contentType: 'application/json',
		data: JSON.stringify({
			"type": "select",
			"args":{
				"table": "chat",
				"columns": ["id","name","message","date"]
			}
		})
	}).done(function(data){
		
		if(Objects.keys(data).length>1) {
			//data inserted
			$('#tabl').html('');
			//update table
			var tr;
			for(var i =0 ; i<data.length; i++){
			   
			 tr = $('<tr/>');
			 tr.append(" <td> "+ data[i].name + "<td>");
			 tr.append(" <td> "+ data[i].message + "<td>");
			 tr.append(" <td> "+ data[i].date + "<td>");
			 
			 $('table').append(tr);
			}
		}
		else if(Objects.keys(data).length<1){
			//data deleted
			$('#tabl').html('');
			var tr;
			for(var i =0 ; i<data.length; i++){
			   
			 tr = $('<tr/>');
			 tr.append(" <td> "+ data[i].name + "<td>");
			 tr.append(" <td> "+ data[i].message + "<td>");
			 tr.append(" <td> "+ data[i].date + "<td>");
			 
			 $('table').append(tr);
			}//for ending
		}
            else{
				//no data added
				//exe only once
				if(!onetime){
					onetime = true;
					var tr;
					for(var i =0 ; i<data.length; i++){
					   
					 tr = $('<tr/>');
					 tr.append(" <td> "+ data[i].name + "<td>");
					 tr.append(" <td> "+ data[i].message + "<td>");
					 tr.append(" <td> "+ data[i].date + "<td>");
					 
					 $('table').append(tr);
					}
				}
			}
		//save l as data length
		l = Objects.keys(data).length;
	});
}//function ending

//call function

displaydata();

setInterval(function(){
	//call function
	displaydata()

}, 5000);
//time refresh 5 sec
});




