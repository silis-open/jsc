(function(win){

	//循环数组内元素
	win.Array.prototype.forEach = win.HTMLCollection.prototype.forEach = function(body, ctx){
		if(this == null) return;
		for(var i = 0; i < this.length; i++){
			body.call(ctx || win, this[i], i);
		}
	}

	//将数组内元素，搬到新的数组中，并返回新的数组。
	win.Array.prototype.clone = win.HTMLCollection.clone = function(){
		var arr = [];
		for(var i = 0; i < this.length; i++) arr.push(this[i]);
		return arr;
	}

	//清空数组内所有元素
	win.Array.prototype.clear = function(){
		this.splice(0,this.length);
	}

	//将数组内元素去重复
	win.Array.prototype.distinct = win.HTMLCollection.distinct = function(){
		var that = this, arr = that.clone();
		that.clear();
		if(win.Set){ //es6以上
			var map = new win.Set();
			for(var i = 0; i < arr.length; i++){
				var item = arr[i];
				if(!map.has(item)){
					map.add(item);
					that.push(item);
				}
			}
		} else { //es5兼容
			for(var i = 0; i < arr.length; i++){
				var item = arr[i];
				if(that.indexOf(item) == -1){
					that.push(item);
				}
			}
		}
	}

	//查找指定元素所在位置，如果没有找到则返回-1
	win.Array.prototype.indexOf = win.HTMLCollection.indexOf = function(item){
		for(var i = 0; i < this.length; i++){
			if(this[i] === item) return i;
		}
		return -1;
	}

})(window);