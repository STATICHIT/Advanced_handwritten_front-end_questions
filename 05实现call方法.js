//实现call方法
//context相当于obj
Function.prototype.myCall = function(context = window, ...args){
  if(typeof context !== 'object')context = new Object(context)// 如果传入的context是值类型，将其转换为对象
  //在context上加一个唯一值，不会出现属性名称的覆盖
  let fnKey = Symbol()// 创建一个唯一的Symbol作为属性名，避免属性名冲突
  context[fnKey] = this;// 将当前函数赋值给context的fnKey属性
  let result = context[fnKey](...args);// 在context上调用这个函数，并传入参数
  delete context[fnKey];// 删除添加的属性，避免污染对象
  return result;// 返回函数调用的结果
}

//用法：f.call(this,arg1)

function f(a,b){
  console.log(a+b)
  console.log(this.name)
}
let obj={
  name:1
}
// 此时调用f函数，并且将this指向obj，传入参数1和2
f.myCall(obj,1,2)//不传obj，this指向window

/**
call做了什么:

将函数设为对象的属性
执行和删除这个函数
指定this到函数并传入给定参数执行函数
如果不传入参数，默认指向 window

分析：如何在函数执行时绑定this

如var obj = {x:100,fn() { this.x }}
执行obj.fn() ,此时fn内部的this就指向了obj
可借此来实现函数绑定this
原生call、apply传入的this如果是值类型，会被new Object（如fn.call('abc')）
 */

//在JavaScript中，call方法的作用是将一个函数作为指定对象的方法来调用，
//并且可以指定函数内部的this指向以及传入参数。