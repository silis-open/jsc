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

	if(!win.document.getElementsByClassName){
		win.document.getElementsByClassName = function(className){
			var elements = [],
				regexp = new RegExp('(\\s|^)(?:'+className.trim()+')(?=\\s|$)');

			Array.prototype.forEach.call(win.document.getElementsByTagName('*'), function(element){
				if(regexp.test(element.className)){
					elements.push(element)
				}
			});

			return elements;
		}
	}

})(window);