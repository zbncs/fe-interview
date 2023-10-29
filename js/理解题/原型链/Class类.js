class Parent {
    constructor(props) {
        this.firstName = 'zs'
        this.lastName = 'm'
    }

    getName() {
        return this.firstName + this.lastName
    }

    setName(name) {
        this.lastName = name
    }
}

class Child extends Parent{
    constructor(firstName, lastName, age) {
        super(firstName, lastName)
        this.age = age
    }

    getAge() {
        return this.age
    }


}

const c = new Child('gg', 'dd', 20)

console.log(c.__proto__ === Child.prototype)

console.log(c.__proto__.__proto__ === Parent.prototype)

// 子类的显式原型的隐式原型等于父类的显式原型
console.log(Child.prototype.__proto__ === Parent.prototype)

console.log(Child.__proto__.__proto__.constructor)
console.log(1, Child.__proto__.__proto__ === Function.prototype)

console.log(2, Child.__proto__ === Parent)

console.log(Child.prototype.__proto__.__proto__.constructor === Object)
