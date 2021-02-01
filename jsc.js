(function(win){

	if(!win.Object.assign){
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

		var defineProperty = win.Object.defineProperty || function(obj, prop, descriptor){
			obj[prop] = descriptor.value;
		};
		win.Object.defineProperty = function(obj, prop, descriptor){
			try{
				defineProperty(obj, prop, descriptor);
			} catch(e){ //IE8会报错误
				obj[prop] = descriptor.value;
			}
		}
	}

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

	//去掉字符串的开始和结尾的空格符、回车符和制表符
	win.String.prototype.trim = function(){
		return this.replace(/(^\s*)|(\s*$)/g, "");
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

	//document.getElementsByClassName
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