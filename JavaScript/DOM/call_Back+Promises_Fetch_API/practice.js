function processUserInput(user_name,callback){
    console.log('Processing user Input...');
    setTimeout(() => {
        console.log("Hello",user_name)
        callback()
    }, 1000);
}
function success(){
    console.log('Callback executed');
}

processUserInput("sam",success)


// function loginUser(user_name,callback){
//     console.log('Verifiying User...');
//     setTimeout(() => {
//         callback(user_name)
//     }, 2000);
// }

// loginUser("Sam", (user) => {
//   console.log("Welcome back, " + user + "!");
// });

//Callback hell 
function loginUser(user_name,password,callback){
    console.log('Verifiying User...');
    setTimeout(() => {
        callback(user_name)
    }, 2000);
}

function getUserData(username, callback){
    console.log('getting data from',username);
    setTimeout(() => {
        callback({ age: 25, email: username + "@example.com" })
    }, 1500);
}

loginUser("Sam", "12345", (user) => {
  getUserData(user, (data) => {
    console.log("User Data:", data);
  });
});

function login(user,password,callback){
    console.log('Verifying user...');
    setTimeout(() => {
        if (password==='12345') {
            callback(null,user)
        }
        else{
            callback("invalid password",null)
        }
    }, 2000);
}

login("Sam", "1235", (error, user) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Welcome,", user + "!");
  }
});

