(function($) {
	var navTemplate="<span class=\"nav-left\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i></span>|<span class=\"nav-right\"><i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i></span>";
	var container=null;
	var slides=null;
	var navContainer=null;
	var nextNav=null;
	var prevNav=null;
	var slideNumbers=null;
	var currentSlide=null;
	var slideWidth=null;
	var animationSpeed=null;
    $.fn.contentslider = function(options) {
    	var settings = $.extend({
            container         : null,
            slides        : null,
            navContainer    : null,
            slideWidth 		: null,
            animationSpeed 	: null
        }, options);
    	var slideStyle="width: "+settings.slideWidth+"px;";
    	slideStyle+="float:left;margin-right:30px";

       $(this).css("overflow","hidden");
       container=$(this).find(''+settings.container+'');
       slides=container.find(''+settings.slides+'');
   		slides.each(function(){
   			$(this).attr("style", $(this).attr("style") + "; " + slideStyle);
   		});
       navContainer=$(this).find(''+settings.navContainer+'');
       slideWidth=settings.slideWidth;
       slideNumbers=slides.length;
       container.css( "width",(slideWidth*slideNumbers)+(slideNumbers*30));
       currentSlide=1;
       animationSpeed=settings.animationSpeed;
       navContainer.append(navTemplate);
       nextNav=navContainer.find('.nav-right');
       prevNav=navContainer.find('.nav-left');

       nextNav.on("click", nextSlide);
       prevNav.on("click", prevSlide);

       function nextSlide(){
       	if(currentSlide<slideNumbers){
       		var leftMargin=(currentSlide*slideWidth)+(currentSlide*30);
       		container.animate({
       			'margin-left':-leftMargin
       		},animationSpeed);
       		currentSlide++;       		
       	}else{
       		return;
       	}
       }
       function prevSlide(){
       	if(currentSlide==2){
       		currentSlide--;
           	var leftMargin=0;
       		container.animate({
       			'margin-left': leftMargin
       		},animationSpeed);
       	}
       	if(currentSlide>2){
           	var previousMargin=parseInt(container.css("margin-left"));
           	var leftMargin=parseInt(previousMargin)+parseInt((parseInt(slideWidth)+30));
       		container.animate({
    			'margin-left': leftMargin
			}, animationSpeed);
       		currentSlide--;
       	}else{
       		return;
       	}
       }

    }

}(jQuery));