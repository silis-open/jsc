(function(win){

	//循环数组内元素
	win.Array.prototype.forEach = function(body, ctx){
		if(this == null) return;
		for(var i = 0; i < this.length; i++){
			body.call(ctx || win, this[i], i);
		}
	}

	//将数组内元素，搬到新的数组中，并返回新的数组。
	win.Array.prototype.clone = function(){
		var arr = [];
		for(var i = 0; i < this.length; i++) arr.push(this[i]);
		return arr;
	}

	//清空数组内所有元素
	win.Array.prototype.clear = function(){
		this.splice(0,this.length);
	}

	//将数组内元素去重复
	win.Array.prototype.distinct = function(){
		var that = this, arr = that.clone(), map = {};
		that.clear();

		for(var i = 0; i < arr.length; i++){
			var item = arr[i];
			if(!map[item]){
				map[item] = true;
				that.push(item);
			}
		}
	}

})(window);