//实例.__proto__===构造函数.prototype
function _instanceof(instance, classOrFunc) {
  //由于instance要检测的是某对象，需要有一个前置判断条件
  //基本数据类型直接返回false
  if (typeof instance !== 'object' || instance == null) return false;

  let proto = Object.getPrototypeOf(instance);//等价于instance.__proto__
  while (proto) {//当protp == null时，说明已经找到了Object的基类null，退出循环
    //实例的原型等于当前构造函数的原型
    if (proto == classOrFunc.prototype) return true;
    //否则沿着原型链__proto__一层一层向上查
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
// 步骤1：先取得当前类的原型，当前实例对象的原型链
// ​步骤2：一直循环（执行原型链的查找机制）
// 取得当前实例对象原型链的原型链（proto = proto.__proto__，沿着原型链一直向上查找）
// 如果 当前实例的原型链__proto__上找到了当前类的原型prototype，则返回 true
// 如果 一直找到Object.prototype.__proto__ == null，Object的基类(null)上面都没找到，则返回 false