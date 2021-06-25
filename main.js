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
	window.location.replace("file:///C:/Users/sahar/OneDrive/Bureau/pairProject-1/page2.html")
	alert ('welcome')
	return obj
}

window.onload = randomPic;
var myImage=newArray ("C:\Users\sahar\OneDrive\Bureau\pairProject-1\images\gettyimages-172050389_global-usage_0046.jpg","C:\Users\sahar\OneDrive\Bureau\pairProject-1\images\animal-sitting-animals-inside.jpg","C:\Users\sahar\OneDrive\Bureau\pairProject-1\images\10-Best-Names-For-Black-Cats.jpg")
function randomPic(){
	var randomNum = (Math.floor(Math.random)*myImage.length)
	document.getElementByClassName("column").src = myImage[randomNum]
	src = 

}
 





 function login ( username,password){
 	for (var i = 0; i<users.length; i++){
 		debugger
 		console.log(users[i].name)
 		if (username === users[i].name && password === users[i].password){
 			alert ('welcome')

 			// window.location.replace("file:///C:/Users/sahar/OneDrive/Bureau/pairProject-1/page2.html")
 	}else {
 		return location.reload()
 		function.hide ()
 	}
 }
}







