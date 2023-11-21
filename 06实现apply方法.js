//利用this的上下文特性。apply其实就是改一下参数的问题
Function.prototype.myApply = function(context = window,args){
  //这里传参和call传参不一样
  if(typeof context !=='object')context=new Object(context);//值类型，变为对象
  let fnKey=Symbol();
  context[fnKey]=this;
  let result = context[fnKey](...args);
  delete context[fnKey];
  return result;
}
//使用
function f(a,b){
  console.log(a+b)
  console.log(this.name)
}
let obj={
  name:'张三'
}
f.myApply(obj,[1,2])// 此时调用f函数，并且将this指向obj，传入参数[1, 2]

/**
 * 除了参数传递方式不同外，myCall和myApply方法在功能上是相似的，
 * 都可以用来调用一个函数并指定函数内部的this指向。下面是它们之间的主要区别：
 * 1.参数传递方式：myCall方法的参数是以逗号分隔的参数列表，
 *                而myApply方法的参数是以数组形式传递的。
 * 2.参数个数：由于参数传递方式的不同，myCall方法可以接受任意多个参数，
 *            而myApply方法只接受两个参数，第一个是需要绑定的对象，第二个是参数数组。
 * 如果参数个数已知且较少，可以使用myApply；如果参数个数不确定或较多，可以使用myCall。
 */