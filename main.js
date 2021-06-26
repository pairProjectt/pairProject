


var users1 = [
{username1:'sahar', password : 123456,
username2:'med amine' , password : 111111
}
]






var users = []
var retrieve = localStorage.getItem("users")
users1=JSON.parse (retrieve)
function signUp (username,password,email){
	var obj = {}
	obj.username = username
	obj.password = password
	obj.email = email
	users.push(obj)
	localStorage.setItem("users",JSON.stringify(users))
	window.location.replace("file:///C:/Users/sahar/OneDrive/Bureau/pairProject-1/page2.html")
	alert ('welcome')
	return obj
}



 
var userss = [
{user1:'sahar', password1 : 123456,
user2:'med amine' , password2 : 111111
}
]

 function login ( username,password){


 	for (var i = 0; i<userss.length; i++){
 		// debugger

 		console.log(userss[i].name)
 		if (username === userss[i].users1 && password === userss[i].password1){
 			alert ('congrats')

 			
 	}else {
 		return location.reload()
 	
 	}
 }
}







