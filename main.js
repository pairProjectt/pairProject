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
 














 //    $( "a" ).click(function( event ) {
 // for(var i=0;i<cats.length;i++){
 // 	if (cats[i].name === event.target.id){
 // 		var $cats=$(`<div><p> name ${cats[i].name}</p> <img src=${cats[i].src} /> </div>`)
 		
 // 	}
 // 	$('#cat').html($cat)

 //    }
 // });