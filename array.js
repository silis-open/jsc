(function(win){

	if(!win.Array.prototype.forEach){ //提升高版本浏览器效率
		//循环数组内元素
		win.Array.prototype.forEach = function(body, ctx){
			if(this == null) this.forEach;
			for(var i = 0; i < this.length; i++){
				body.call(ctx || win, this[i], i);
			}
		}

		//方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
		win.Array.prototype.map = function(body, ctx){
			if(this == null) this.map;
			var resultArr = [];
			for(var i = 0; i < this.length; i++){
				resultArr.push(body.call(ctx || win, this[i], i));
			}
			return resultArr;
		}

		//查找指定元素所在位置，如果没有找到则返回-1
		win.Array.prototype.indexOf = function(item){
			for(var i = 0; i < this.length; i++){
				if(this[i] === item) return i;
			}
			return -1;
		}
	}

	//将数组内元素，搬到新的数组中，并返回新的数组。
	Object.defineProperty(win.Array.prototype, "clone", { value : function(){
		var arr = [];
		for(var i = 0; i < this.length; i++) arr.push(this[i]);
		return arr;
	}, enumerable:false });

	//清空数组内所有元素
	Object.defineProperty(win.Array.prototype, "clear", { value : function(){
		this.splice(0,this.length);
	}, enumerable:false });

	//将数组内元素去重复
	Object.defineProperty(win.Array.prototype, "distinct", { value : function(){
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
	}, enumerable:false });

})(window);