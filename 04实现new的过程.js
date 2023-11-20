function myNew(constructor, ...args) {
  //1.基于原型链, 创建一个新对象,继承构造函数constructor的原型对象(Person.prototype)上的属性
  let newObj = Object.create(constructor.prototype);
  //添加属性到新对象上,并获取obj函数的结果
  //调用构造函数,将this调换为新对象,通过强行复制的方式为新对象添加属性
  //2.将newObj作为this,执行constructor,传入参数
  let res = constructor(newObj, args);//改变this指向新创建的对象

  //如果函数的执行结果有返回值并且是一个对象,返回执行的结果,否则,返回新创建的对象地址
  return typeof res === 'object' ? res : newObj;
}

// 用法
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    //如果构造函数内部,return一个引用类型的对象,则整个构造函数失效,而是返回整个引用类型的对象,而不是返回this
    //在实例中就没法获取Person原型上的getName方法
  }
}

Person.prototype.say = function(){
  console.log("我今年",this.age,"岁了")
}
let p1=myNew(Person,"Statichit",18);
console.log(p1.name);
console.log(p1);
p1.say();
// new操作符做了这些事：
// 创建一个全新的对象obj，继承构造函数的原型：这个对象的__proto__要指向构造函数的原型prototype
// 执行构造函数，使用 call/apply 改变 this 的指向（将obj作为this）
// 返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象obj