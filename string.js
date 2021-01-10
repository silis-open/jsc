(function(win){

	//去掉字符串的开始和结尾的空格符、回车符和制表符
	win.String.prototype.trim = function(){
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}

})(window);