var dogs =[
 {
	breed:'German Shepherd',
	name:'Cesar',
	age:'2years'
	 src:"./images/german shepherd.jpg"
     },
     {
    breed:'malinois',
	name:'Cesar',
	age:'2years'
	src:"./images/malinois.jpg"

     },
     {
    breed:'French buldog',
	name:'Blaki',
	age:'3years'
	src:"./images/french buldog.jpg" 	
     },
     {
      breed:'Yorkshire',
	name:'Blaki',
	age:'3years'
	src:"./images/yorkshire.jpg" 	
     },
    {
    breed:'Akita',
	name:'Rigen',
	age:'5 months'
	src:"./images/akita.jpg"	
    } 
    ]



var cats =[
     {
	name:'Blondi',
	age:'2years'
	src:"./images/cat1.jpg"
     },
     {
	name:'Jaki',
	age:'2years'
	src:"./images/cat2.jpg"

     },
     {
	name:'star',
	age:'3years'
	src:"./images/cat3.jpg"	
     },
    {
	name:'Moon',
	age:'5 months'
	src:"./images/cat4.jpg"	
    },
    {
    name:'Tom',
	age:'5 months'
	src:"./images/cat5.jpg"	
    }
    ]


   $( "a" ).click(function( event ) {
 for(var i=0;i<dogs.length;i++){
 	if (dogs[i].model === event.target.id){
 		var $dog=$(`<div><p> model ${dogs[i].model}</p> <img src=${dogs[i].src} /> </div>`)
 		
 	}
 	$('#dog').html($dog)

    }
 });



    $( "a" ).click(function( event ) {
 for(var i=0;i<cats.length;i++){
 	if (cats[i].model === event.target.id){
 		var $cats=$(`<div><p> model ${cats[i].model}</p> <img src=${cats[i].src} /> </div>`)
 		
 	}
 	$('#cat').html($cat)

    }
 });