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

randomImage = function(array){
var randomImage = Math.floor(Math.random()*array.length)
return array[randomImage]
}
var fixImage=null;
function addpets(){
     fixImage=randomImage(pets)
$("#pets").attr("src",fixImage.image)+$("#name").text(fixImage.catName)+$( "#para" ).text(fixImage.age)
holder = fixImage;
}


 




var userss = [
{user1:'sahar', password1 : 123456,
user2:'med amine' , password2 : 111111
}
]

 function login ( username,password){


 	for (var i = 0; i<users1.length; i++){
 		// debugger

 		console.log(userss[i].name)
 		if (username === userss[i].users1 && password === userss[i].password1){
 			alert ('welcome')

 			
 	}else {
 		return location.reload()
 	
 	}
 }
}







