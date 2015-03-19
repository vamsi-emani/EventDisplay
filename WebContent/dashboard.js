/** variable declarations **/
	var dir = "events/";
	var currentThumbnail;
	var eventDetailCollpased = true;	
		
	function addThumbnailClickActions(){
		$('.thumbnail').on("click", function(){			
			currentThumbnail = this;
			showImage(currentThumbnail);
			displayEventDetails(currentThumbnail);				
		});			
	}

	/** Invoked upon thumbnail click. Sets the thumbnail image as the photoframe **/
	function showImage(thumbnail){				
		$('.main-container img').attr('src', $(thumbnail).attr('src'))		
	}	
	
	function getIndex(thumbnail){
		var src = $(thumbnail).attr('src');
		var key = src.substring(src.lastIndexOf("/")+1, src.lastIndexOf("."));
		return parseInt(key);
	}
	/** To display event info **/
	function displayEventDetails(thumbnail){
		var key = getIndex(thumbnail) - 1;
		$('.detail').eq(key).show().siblings().hide();
		$('.event-detail h2').show();
		if(!eventDetailCollpased){
			$('.quotation').eq(key).show().siblings().hide();						
		}
	}
		
	function addEventDetailAnimations(){				
		/** adds expand/collpase animation for the event detail section **/
		$('.event-detail').click(function(){
			if(eventDetailCollpased){				
				$(this).animate({ top : '57px',  height : '90%', width: '100%' }, 300);
			    eventDetailCollpased = false;
			    $('.photoframe').css('border-radius', '50%');				      
			}else{				
				 $(this).animate({ height: '250px', top: '150px', width: '270px' }, 300);	
				eventDetailCollpased = true;
				$('.photoframe').css('border-radius', '0%')				
			}			
			$('.extended-content').toggle();
		})		
	};

	/** Initializes the page with first event detail **/
	function initPageWithFirstEvent(){
		$('.extended-content').hide();  		
  		$('.quotation').first().show();
  		$('.detail').first().show()
	}

	/** Entry point **/
	$( document ).ready(function() {				
		addEventDetailAnimations(); 						
		initPageWithFirstEvent();  
  		addThumbnailClickActions();    				 		 		  	
	})	