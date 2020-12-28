(function(win){

	win.Array.prototype.forEach = function(body, ctx){
		if(this == null) return;
		for(var i = 0; i < this.length; i++){
			body.call(ctx || win, this[i], i);
		}
	}

	win.Array.prototype.clone = function(){
		var arr = [];
		for(var i = 0; i < this.length; i++) arr.push(this[i]);
		return arr;
	}

})(window);