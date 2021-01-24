(function(win){

	if(!win.document.addEventListener){
		win.document.addEventListener = function(event, completed){
			switch(event){
				case "DOMContentLoaded":
					win.document.attachEvent( "onreadystatechange", completed );
					break;
			}
		}

		win.document.removeEventListener = function(event, completed){
			switch(event){
				case "DOMContentLoaded":
					win.document.detachEvent( "onreadystatechange", completed );
					break;
			}
		}
	}

})(window);