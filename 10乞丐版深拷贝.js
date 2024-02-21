/*
 * @Author: STATICHIT 2394412110@qq.com
 * @Date: 2024-02-21 17:47:52
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2024-02-21 17:49:11
 * @FilePath: \面试手写题\10乞丐版深拷贝.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//把一个对象序列化成为 JSON 的字符串，并将对象里面的内容转换成字符串，
//最后再用 JSON.parse() 的方法将 JSON 字符串生成一个新的对象
function fun(target){
  return JSON.parse(JSON.stringify(target));
}

//局限性很大
// 会忽略 undefined
// 会忽略 symbol
// 不能序列化函数
// 无法拷贝不可枚举的属性
// 无法拷贝对象的原型链
// 拷贝 RegExp 引用类型会变成空对象
// 拷贝 Date 引用类型会变成字符串
// 对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null
// 不能解决循环引用的对象，即对象成环 (obj[key] = obj)。