(function($) {

    $.fn.contentslider = function(options) {
    var navTemplate="<span class=\"nav-left\"><i class=\"fa fa-arrow-circle-o-left\""; 
    navTemplate+=" aria-hidden=\"true\"></i></span>|<span class=\"nav-right\">";
    navTemplate+=" <i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i></span>";

    var container=null;
    var slides=null;
    var navContainer=null;
    var nextNav=null;
    var prevNav=null;
    var slideNumbers=null;
    var currentSlide=null;
    var slideWidth=null;
    var animationSpeed=null;

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
       		},animationSpeed,'easeInOutBack');
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
       		},animationSpeed,'easeInOutBack');
       	}
       	if(currentSlide>2){
           	var previousMargin=parseInt(container.css("margin-left"));
           	var leftMargin=parseInt(previousMargin)+parseInt((parseInt(slideWidth)+30));
       		container.animate({
    			'margin-left': leftMargin
			}, animationSpeed,'easeInOutBack');
       		currentSlide--;
       	}else{
       		return;
       	}
       }

    }





      $.fn.memberslider = function(options) {
      var msettings = $.extend({
            mslidecontainer         : null,
            mnavContainer    : null,
            msingleSlide     : null,
            manimationSpeed  : null
        }, options);
      var mslidedLeft=null;
      var mslidedRight=null;
      var mtotalSlideWidth=null;
      var mdisplayWidth=null;
      var mslidecontainer=$(this).find(msettings.mslidecontainer);
      console.log("Widht is: ",mslidecontainer.outerWidth());
      var mnavContainer=$(this).find(''+msettings.mnavContainer+'');
      var manimationSpeed=msettings.manimationSpeed;
      var msingleSlide=mslidecontainer.find(msettings.msingleSlide);      
      console.log("IS it "+msettings.mnavContainer);
      console.log(mnavContainer);
      var mnextNav=mnavContainer.find('span.nav-right');
      var mprevNav=mnavContainer.find('span.nav-left');
      var mdisplay=mslidecontainer.find('.slideWrapper');

      mtotalSlideWidth=0;
      mdisplayWidth=mslidecontainer.outerWidth();

      msingleSlide.each(function(){
        mtotalSlideWidth+=$(this).outerWidth(true);
      });

      $(mslidecontainer).css("overflow","hidden");
      mdisplay.css("margin-left",0);
      mdisplay.css("margin-right",0);
      mdisplay.css("width",mtotalSlideWidth);
      console.log("Total width is: ",mtotalSlideWidth);

      mslidedLeft=0;

      mnextNav.on("click",slideRight);
      mprevNav.on("click",slideLeft);



      function slideRight(){
        console.log("right button clicked");
        var mpreviousLeft=Math.abs(parseInt(mdisplay.css("margin-left")));
        //         console.log("Previous margin left"+mpreviousRight);
        
        // var mdifference=mtotalSlideWidth-mdisplayWidth;
        // mslidedRight+=mpreviousRight;
        console.log(mslidedLeft);
        mslidedLeft-=mdisplayWidth;
        if(mpreviousLeft>0){
            mdisplay.animate({
            'margin-left':-(mpreviousLeft-mdisplayWidth)
          },manimationSpeed);
        }else{
          return;
        }
      }

      function slideLeft(){

        var mpreviousLeft=Math.abs(parseInt(mdisplay.css("margin-left")));
                console.log("Previous margin left"+mpreviousLeft);
      
        var mdifference=mtotalSlideWidth-mdisplayWidth;
        console.log(mslidedLeft);
        if(mslidedLeft<(mtotalSlideWidth-mdisplayWidth)){
          mslidedLeft+=mpreviousLeft;
        }

        if(mslidedLeft<(mtotalSlideWidth-mdisplayWidth)){
            
            mdisplay.animate({
            'margin-left':-(mpreviousLeft+mdisplayWidth)
          },manimationSpeed);
        }else{
          return;
        }
      }
    }

}(jQuery));