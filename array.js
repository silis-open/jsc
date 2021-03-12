(function(win){

	if(!win.Array.prototype.forEach){ //提升高版本浏览器效率
		//循环数组内元素
		win.Array.prototype.forEach = function(body, ctx){
			if(this == null) this.forEach;
			var arr = this.slice(); //复制数组，避免循环中添加，造成无限循环
			for(var i = 0; i < arr.length; i++){
				body.call(ctx || win, arr[i], i);
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

	//将数组内元素去重复
	Object.defineProperty(win.Array.prototype, "distinct", { value : function(){
		var that = this, arr = that.slice();
		that.splice(0);
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