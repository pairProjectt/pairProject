// randomImage = newArray ()
// randomImage [0] =" ";
// randomImage [1] = " ";
// randomImage [2] = " ";
// randomImage [3]= " "
// function swapeImage ()
// document.getElementById(" id").setAttribute("src", randomImage[Math.round(Math.random() *3)])


var users1 = [
{username1:'sahar', password : 123456,
username2:'med amine' , password : 111111
}
]






var users = []
var retrieve = localStorage.getItem("users")
users=JSON.parse (retrieve)
function signUp (username,password,email){
	var obj = {}
	obj.username = username
	obj.password = password
	obj.email = email
	users.push(obj)
	localStorage.setItem("users",JSON.stringify(users))
	return obj
}
 function login ( username,password){
 	for (var i = 0; i<users.length; i++){
 		if (username === users[i].name && password === users[i].password){
 			alert ('welcome')
 		
 	}else {
 		return location.reload()
 	}
 }
}






















var obj = {username:'sahar', password : 123456}


