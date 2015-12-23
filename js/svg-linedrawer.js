/**
* Custom Simple SVG Line Drawer
* @author Samip Shrestha <samipshrestha@lftechnology.com>
 */
;
(function($){
	'use-strict';
	$.fn.svgLineDrawer = function(options){
		var _this = this,
		path = document.querySelector($(_this).selector),
		length = path.getTotalLength(),
		pathFillColor = $(_this).attr('fill'),
		strokeColor = $(_this).attr('stroke'),
		strokeWidth = $(_this).attr('stroke-width'),
		defaultOptions = {
			animationDuration: 3000
		};

		options = $.extend(defaultOptions, options);

		strokeColor = typeof strokeColor !== 'undefined' ? strokeColor : pathFillColor;
		strokeWidth = typeof strokeWidth !== 'undefined' ? strokeWidth : 2;

		// Set path
		$(this).css({
			fill: 'transparent',
			stroke: strokeColor,
			strokeWidth: strokeWidth
		});

		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition = 'none';
		console.log(length);
		// Set up the starting positions
		path.style.strokeDasharray = length;
		path.style.strokeDashoffset = length; 
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define transition

		$(this).animate({
  			strokeDashoffset: 0
		},defaultOptions.animationDuration,function(){
			if(pathFillColor === 'none'){
				$(this).css({
					fill: pathFillColor,
		  			strokeWidth: strokeWidth,
		  			transition: 'all 0.8s ease-in-out'
				});
			}
			else{
				$(this).css({
					fill: pathFillColor,
		  			strokeWidth: 0,
		  			transition: 'all 0.8s ease-in-out'
				});
			}
		});
	};
	
}( jQuery ));