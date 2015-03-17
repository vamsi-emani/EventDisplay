/** variable declarations **/
	var dir = "events/";
	var currentThumbnail;
	var eventDetailCollpased = true;
	var title = "<h2>Upcoming Events</h2>"
	var thumbnailCSS = { "width" : "120px", "height" : "100px", 
					     "padding" : "10px",
						     /*"border":"1px solid #00ACED"	*/					     
					    }
    /** Event name, date and venue info **/
	var eventDetails = {
		1 : "+ Women's day celebrations<br/><br/>+ 13th Feb 2015<br/><br/>+ Parade grounds",
		2 : "+ Strings and guitars<br/><br/>+ 18th Feb 2015<br/><br/>+ Parade grounds",
		3 : "+ Dance competition<br/><br/>+ 3rd March 2015<br/><br/>+ Exhibition ground", 
		4 : "+ Stage performance<br/><br/>+ 18th March 2015<br/><br/>+ Parade grounds",
		5 : "+ Photography competition<br/><br/>+ 28th March 2015<br/><br/>+ Parade grounds", 
		6 : "+ Solo acting<br/><br/>+ 3rd Apr 2015<br/><br/>+ Parade grounds", 
		7 : "+ Rock show concert<br/><br/>+ 13th Apr 2015<br/><br/>+ Parade grounds", 
		8 : "+ Chess with wizards<br/><br/>+ 18th Apr 2015<br/><br/>+ Parade grounds", 
		9 : "+ Comic buzz<br/><br/>+ 23th Apr 2015<br/><br/>+ Parade grounds"
	}	

	/** for extended content - quotes/more info.. **/
	var eventQuotes = {
		"1" : "Whatever glory belongs to the race for a development unprecedented in history for the given length of time, a full share belongs to the womanhood of the race.<br/> <br/>~ Mary Mcleod Bethune",
		"2" : "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.<br/><br/>~ Plato",
		"3" : "Life is like dancing. If we have a big floor, many people will dance. Some will get angry when the rhythm changes. But life is changing all the time.<br/><br/>~ Miguel Angel Ruiz",
		"4" : "All the world's a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages.<br/><br/>~ W. Shakespeare",
		"5" : "My dream concept is that I have a camera and I am trying to photograph what is essentially invisible. And every once in a while I get a glimpse of her and I grab that picture.<br/><br/>~ Leonard Nimoy",
		"6" : "Acting is not about being someone different. It's finding the similarity in what is apparently different, then finding myself in there.<br/><br/>~ Meryl Streep", 
		"7" : "Rock and Roll has no beginning and no end for it is the very pulse of life itself.<br/><br/>~ Larry Williams",
		"8" : "Chess is like a language, the top players are very fluent at it. Talent can be developed scientifically but you have to find first what you are good at.<br/><br/>~ Vishwanath Anand",
		"9" : "A day without laughter is a day wasted.<br/><br/>~ Charlie Chaplin"

	}
	
	/** Creates a row of thumbnail images displayed at the bottom **/
	function createThumbnails(){
		for(i=1; i<=9;i++){
		  	var source = dir+i.toString()+".jpg";
		  	var thumbnail = $('<img>',{id:i.toString(), src:source});
		  	thumbnail.css(thumbnailCSS);			
			$('#thumbnail-container').append(thumbnail);
			thumbnail.on("click", function(){
				currentThumbnail = this;
				showImage(this);
				displayEventDetails(this);				
			});			
		}  
	}

	/** Invoked upon thumbnail click. Sets the thumbnail image as the photoframe **/
	function showImage(thumbnail){				
		$('#main-container img').attr('src', $(thumbnail).attr('src'))		
	}	
	
	/** To display event info **/
	function displayEventDetails(thumbnail){
		var key = $(thumbnail).attr('id');
		var expandCollpase = "<br/><br/><br/><b>Click to expand/collapse</b>"						
		$('#event-detail').html(title+"<p> "+eventDetails[key]+expandCollpase+"</p>")	
		if(!eventDetailCollpased)
			$('#quotation').html(eventQuotes[key])
	}
	
	/** Expand/Collpase animation for the event detail section **/
	function addEventDetailAnimations(){				
		$('#event-detail').click(function(){
			if(eventDetailCollpased){				
				$(this).animate({ top : '57px',  height : '90%', width: '100%' }, 300);
			    eventDetailCollpased = false;
			    $('#photoframe').css('border-radius', '50%');				      
			}else{				
				 $(this).animate({ height: '250px', top: '150px', width: '270px' }, 300);	
				eventDetailCollpased = true;
				$('#photoframe').css('border-radius', '0%')				
			}			
			$('#extended-content').toggle();
		})		
	};

	/** Entry point **/
	$( document ).ready(function() {				
  		createThumbnails(); 	
  		addEventDetailAnimations();   		  		
  		$('#extended-content').hide();  		
	})	