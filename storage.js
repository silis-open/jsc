(function(win){

	if(!win.localStorage){
		win.localStorage = {
			setItem:function(key,value){
				win.document.cookie = "l_" + key + "=" + encodeURIComponent(value) + ";expires=" + new Date(new Date().getTime() + 31536000000).toGMTString();
			},
			getItem:function(key){
				var matchs = document.cookie.match("l_" + key + "=([^;]*)");
				if(matchs) return decodeURIComponent(matchs[1]); else return null;
			},
			removeItem:function(key){
				win.document.cookie = "l_" + key + "=;expires=" + new Date(new Date().getTime() - 31536000000).toGMTString();
			},
			clear:function(){
				var matchs = win.document.cookie.match(/l_[^=]+=/g);
				if(matchs){
					for(var i = 0; i < matchs.length; i++){
						var key = matchs[i];
						key = key.substring(2, key.length-1);
						win.localStorage.removeItem(key);
					}
				};
			}
		};
	};

	if(!win.sessionStorage){
		win.sessionStorage = {
			setItem:function(key,value){
				win.document.cookie = "s_" + key + "=" + encodeURIComponent(value);
			},
			getItem:function(key){
				var matchs = document.cookie.match("s_" + key + "=([^;]*)");
				if(matchs) return decodeURIComponent(matchs[1]); else return null;
			},
			removeItem:function(key){
				win.document.cookie = "s_" + key + "=;expires=" + new Date(new Date().getTime() - 31536000000).toGMTString();
			},
			clear:function(){
				var matchs = win.document.cookie.match(/s_[^=]+=/g);
				if(matchs){
					for(var i = 0; i < matchs.length; i++){
						var key = matchs[i];
						key = key.substring(2, key.length-1);
						win.sessionStorage.removeItem(key);
					}
				};
			}
		}
	}

})(window);