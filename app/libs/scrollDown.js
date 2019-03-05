!(function(){
	var href = document.querySelector('#down');
	href.onclick = function(e){
		e.preventDefault();
		var speed = 1,
			startScroll = window.pageYOffset,
			elem = document.querySelector('.simple-h'),
			finishScroll = elem.getBoundingClientRect().top,
			start = null;

		function step(time) {
     
			if (start === null) {
				start = time;
			}
     		var progress = time - start,    
				nowScroll = null;          

			if (finishScroll < 0) {
				nowScroll = Math.max(startScroll - progress / speed, startScroll + finishScroll);
			} else {
				nowScroll = Math.min(startScroll + progress / speed, startScroll + finishScroll);
			}
    
    		window.scrollTo(0, nowScroll);
     
			if (nowScroll != startScroll + finishScroll) {
				requestAnimationFrame(step);     
			}
		}


		requestAnimationFrame(step);
									
	} 

							
})();