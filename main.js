var dogs =[
 {	breed:'German Shepherd',
	name:'Cesar',
	age:'2years',
	 src:"./images/german shepherd.jpg"
     },
     {
    breed:'malinois',
	name:'Crowdy',
	age:'2years',
	src:"./images/malinois.jpg"

     },
     {
    breed:'French buldog',
	name:'Blaki',
	age:'3years',
	src:"./images/french buldog.jpg" 	
     },
     {
      breed:'Yorkshire',
	name:'Starski',
	age:'3years',
	src:"./images/yorkshire.jpg" 	
     },
    {
    breed:'Akita',
	name:'Rigen',
	age:'5 months',
	src:"./images/akita.jpg"	
    } 
    ]



var cats =[
     {
	name:'Blondi',
	age:'2years',
	src:"./images/cat1.jpg"
     },
     {
	name:'Jaki',
	age:'2years',
	src:"./images/cat2.jpg"

     },
     {
	name:'Star',
	age:'3years',
	src:"./images/cat3.jpg"	
     },
    {
	name:'Moon',
	age:'5 months',
	src:"./images/cat4.jpg"	
    },
    {
    name:'Tom',
	age:'5 months',
	src:"./images/cat5.jpg"	
    }
    ]

   $( ".btn" ).click(function( event ) {
   	        console.log(event.target.id)
	 for(var i=0;i<dogs.length;i++){
	 	if (dogs[i].name== event.target.id){
	 	var str = "Congrats for adopting " +dogs[i].name+" "+dogs[i].age + " "+" we will contact you via mail"
	 		alert( str )
	 	}

	    }
 });


$( ".btn" ).click(function( event ) {
   	        console.log(event.target.id)
	 for(var i=0;i<cats.length;i++){
	 	if (cats[i].name== event.target.id){	 	
	 	var str = "Congrats for adopting " +cats[i].name+" "+cats[i].age + " "+" we will contact you via mail"
	 		alert( str )
	 	}
	 	

	    }
 });
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






 //    $( "a" ).click(function( event ) {
 // for(var i=0;i<cats.length;i++){
 // 	if (cats[i].name === event.target.id){
 // 		var $cats=$(`<div><p> name ${cats[i].name}</p> <img src=${cats[i].src} /> </div>`)
 		
 // 	}
 // 	$('#cat').html($cat)

 //    }
 // });

