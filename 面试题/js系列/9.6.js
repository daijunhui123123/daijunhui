class Parent {
    constructor() {
        this.name = 'parent'
    }
    getname() {
        return this.name
    }
}

class Child extends Child {
    constructor(type, name) {
        super(name)
        this.type = type
    }
}
let c = new Child('child',)

