const dataUrl = 'https://data.alluvial22.hasura-app.io/v1/query';
const loginUrl = 'https://auth.alluvial22.hasura-app.io/v1/login';
const signupUrl = 'https://auth.alluvial22.hasura-app.io/v1/signup';
const networkErrorObj = {
    status: 503
  }
  const dp1 = './assets/backgroundimage.jpg';
  const defaultimg = '61316c53-6640-4d9a-a586-3a9c1892716d';
  const bearerToken = "Bearer 6e3bfbf5f7b27daa2812541585886b06215c48c30883031e";

  export async function trySignupAndInsert(emailaddress,password) {

    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        }
    };
    var body = {
        "provider": "email",
        "data": {
            "email":emailid ,
            "password":password,
            
        }
    };

    requestOptions.body = JSON.stringify(body);
    try {
      await fetch(signupUrl, requestOptions)
      .then(function(response) {
          console.log(response);
          if (response.status !== 200) {
            if (response.status === 504) {
              Alert.alert('Network Error', 'Check your internet connection');
            } else {
              Alert.alert('Error', `Signup Unsuccessful, Pl.Try Again!  ${response.status}`);      
            }
            throw new Error(response.statusText);
          } 
          return response.json();
        })
        .then(async (result) => {
          console.log('after signup');
          console.log(result);
          // To save the auth token received to offline storage
          var authToken = result.auth_token;
          var user_id = result.hasura_id;
          console.log('auth token', authToken);
          console.log('userid after signup', user_id);
          try {
          await AsyncStorage.setItem('HASURA_AUTH_TOKEN', authToken);
          await AsyncStorage.setItem('user_id', user_id.toString());
          await AsyncStorage.setItem('emailid', emailid.toString());
          } catch (error) {
            console.log('Error saving data');
          }
          
          var now = new Date();
        
          var insertBody = {
              "type": "insert",
              "args": {
                  "table": "users",
                  "objects": [
                      {
                          "emailid": emailid,
                          "displayname": emailid,
                          "displaypic": defaultimg,
                          "status": '',
                          "lastseen": now,
                          "user_id": user_id
                      }
                  ]
              }
          };

          requestOptions.body = JSON.stringify(insertBody);
          // make a 2nd request and return a promise
          return fetch(dataUrl, requestOptions)
        })
        .then(function(response) {
            console.log('after insert');
            console.log(response);
            if (response.status !== 200) {
                if (response.status === 504) {
                  Alert.alert('Network Error', 'Check your internet connection');
                } else {
                  Alert.alert('Error', `Signup Unsuccessful, Pl.Try Again!  ${response.status}`);      
                }
                throw new Error(response.statusText);
            }
            return response.json(); 
        })
      }      
  catch(e) {
  console.log("Request Failed: " + e);
  return networkErrorObj;
  }
}


export async function sendEmailUser(phone) {
    // try {
       console.log('Making sendEmailUser query');
    
    var url = "https://auth.alluvial22.hasura-app.io/v1/providers/email/send-email";
  
  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json",
          "Authorization": bearerToken
      }
  };
  
  var body = {
      "email": emailid,
     
  };
  
  requestOptions.body = JSON.stringify(body);
  try {
    let resp = await fetch(url, requestOptions);
    return resp; 
  }
  catch(e) {
    console.log("Request Failed: " + e);
    return networkErrorObj;
  }
  };


  
export async function updateUser(emailid, displayname, displaypic, status) {
    console.log('updating User query');
  
    // If you have the auth token saved in offline storage, obtain it in async componentDidMount
     var authToken = await AsyncStorage.getItem('HASURA_AUTH_TOKEN');
    // And use it in your headers
    var userToken  = "Bearer " + authToken
    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            //for defective95 "Authorization": "Bearer bd69be047e89fb3ac98e788222ee2a56547be1b35ef14fd3"
            "Authorization": userToken
        }
    };
    
    var body = {
        "type": "update",
        "args": {
            "table": "users",
            "where": {
                "emailid": {
                    "$eq": emailid
                }
            },
            "$set": {
                "displayname": displayname,
                "status": status,
                "displaypic": displaypic
            }
        }
    };
    
    requestOptions.body = JSON.stringify(body);
    
    try {
        let resp = await fetch(dataUrl, requestOptions);
        return resp; 
      }
      catch(e) {
        console.log("Request Failed: " + e);
        return networkErrorObj;
      }
}



export async function getContacts(user_id) {
	console.log('Making data query (get contacts)');
    // If you have the auth token saved in offline storage, obtain it in async componentDidMount
    var authToken = await AsyncStorage.getItem('HASURA_AUTH_TOKEN');
    // And use it in your headers
    var userToken  = "Bearer " + authToken 
    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": userToken
        }
    };
    
    var body = {
        "type": "select",
        "args": {
            "table": "users",
            "columns": [
                "*"
            ],
            "where": {
                "user_id": {
                    "$ne": user_id
                }
            }
        }
    };
    
    requestOptions.body = JSON.stringify(body);
    console.log(requestOptions);

    try {
        let resp = await fetch(dataUrl, requestOptions);
        console.log(resp);
        return resp.json(); 
      }
      catch(e) {
        console.log("Request Failed: " + e);
        return networkErrorObj;
      }
};

export async function getUser(emailid) {
    console.log('Making data query (get user)');
     // If you have the auth token saved in offline storage, obtain it in async componentDidMount
     var authToken = await AsyncStorage.getItem('HASURA_AUTH_TOKEN');
     // And use it in your headers
     var userToken = "Bearer " + authToken 
    var requestOptions = {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          //  "Authorization": "Bearer bd69be047e89fb3ac98e788222ee2a56547be1b35ef14fd3"
          "Authorization": userToken
     
      }
    }; 
    var body = {
        "type": "select",
        "args": {
            "table": "users",
            "columns": [
                "*"
            ],
            "where": {
                "emailid": {
                    "$eq": emailid
                }
            }
        }
    }; 
    requestOptions.body = JSON.stringify(body); 
    try {
      let resp = await fetch(dataUrl, requestOptions);
      console.log(resp);
      return resp.json(); 
    }
    catch(e) {
      console.log("Request Failed: " + e);
      return networkErrorObj;
    }
  };
  
  export async function getUserFromId(user_id) {
    console.log('Making data query (get user)');
   // If you have the auth token saved in offline storage, obtain it in async componentDidMount
   var authToken = await AsyncStorage.getItem('HASURA_AUTH_TOKEN');
   // And use it in your headers
   var userToken = "Bearer " + authToken
    var requestOptions = {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": userToken
     
      }
    }; 
    var body = {
        "type": "select",
        "args": {
            "table": "users",
            "columns": [
                "*"
            ],
            "where": {
                "user_id": {
                    "$eq": user_id
                }
            }
        }
    }; 
    requestOptions.body = JSON.stringify(body); 
    try {
        let resp = await fetch(dataUrl, requestOptions);
        console.log(resp);
        return resp.json(); 
      }
      catch(e) {
        console.log("Request Failed: " + e);
        return networkErrorObj;
      }
};


