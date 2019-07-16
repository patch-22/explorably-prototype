class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    speak() {
        console.log(this.sound)
    }

    hurt() {
        this.sound = 'owwww'
        this.name = this.name + ' is hurt'
    }
}


class Dog extends Animal {
    constructor(name) {
        super(name, 'bark')
    }

    wag() {
        console.log('you did a wag')
    }
}

const dave = new Dog('dave')
dave.speak()
dave.hurt()
dave.speak()
dave.wag()
// console.log(dave)