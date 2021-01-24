# 使高版本的js常用方法，兼容低版本浏览器的使用支持
jsc的c表示common(常用)、compatible(兼容)、controller(用于控制层)三层意思

## Array
数组的常用方法

#### Array.forEach
forEach在日常编码经常需要使用，用作for循环，ES6内置已经实现，兼容ES6以下版本，则可用此代码

#### Array.clone
clone在日常编码中比较常用到，用于浅复制数据

#### Array.clear
清空数组内所有元素

#### Array.distinct
将数组内元素去重复

#### Array.indexOf
查找指定元素所在位置，如果没有找到则返回-1

## String
字符串常用方法

#### String.trim
去掉字符串的开始和结尾的空格符、回车符和制表符

## Object
对象常用方法

#### Object.assign
浅复制对象所有成员到第一个参数的对象中