(function(win){

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

})(window);