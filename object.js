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

})(window);