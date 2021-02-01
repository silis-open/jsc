# jsc
使高版本的js常用方法，兼容低版本浏览器的使用支持。
jsc的c表示common(常用)、compatible(兼容)、controller(用于控制层)三层意思。

## Array
数组的常用方法

#### Array.forEach
forEach在日常编码经常需要使用，用作for循环，ES6内置已经实现，兼容ES6以下版本，则可用此代码

#### Array.map
方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值

#### Array.indexOf
查找指定元素所在位置，如果没有找到则返回-1

#### Array.distinct
将数组内元素去重复

## String
字符串常用方法

#### String.trim
去掉字符串的开始和结尾的空格符、回车符和制表符

## Object
对象常用方法

#### Object.assign
浅复制对象所有成员到第一个参数的对象中

#### Object.defineProperty
定义一个对象的属性，低版本浏览器只支持使置属性的value

## HTMLDocument

#### document.addEventListener(""DOMContentLoaded"", function(){})
使低版本浏览器支持document.addEventListener(""DOMContentLoaded"", function(){})

#### document.getElementsByClassName
兼容低版本浏览器的document.getElementsByClassName

## sessionStorage
会话数据

#### sessionStorage.setItem(key,value)
设置一个key的会话数据

#### sessionStorage.getItem(key)
获取一个key的会话数据

#### sessionStorage.removeItem(key)
删除一个key的会话数据

#### sessionStorage.clear()
清除所有会话数据

## localStorage
本地持久数据

#### localStorage.setItem(key,value)
设置一个key的本地持久数据

#### localStorage.getItem(key)
获取一个key的本地持久数据

#### localStorage.removeItem(key)
删除一个key的本地持久数据

#### localStorage.clear()
清除所有本地持久数据