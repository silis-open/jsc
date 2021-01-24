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
	win.Array.prototype.indexOf = function(item){
		for(var i = 0; i < this.length; i++){
			if(this[i] === item) return i;
		}
		return -1;
	}

	//去掉字符串的开始和结尾的空格符、回车符和制表符
	win.String.prototype.trim = function(){
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}

	//浅复制对象所有成员到第一个参数的对象中
	win.Object.assign = function(){
		var args = arguments, arg0 = args[0];
		for(var i = 1; i < args.length; i++){
			var argI = args[i];
			if(typeof(argI) == "object"){
				for(var key in argI){
					arg0[key] = argI[key];
				}
			}
		}
		return arg0;
	}

	//document.addEventListener("DOMContentLoaded", function(){})
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