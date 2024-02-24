const bike = {
    company: 'Kawasaki',
    color: 'Lime Green',
    model: 'ZX-10R',
    price: '20lac',
    changeProperty: function(value) {
        console.log(value, `${this.company} ${this.model} ${this.color} variant...🏍️🏍️🏍️🏍️`)
    }
}

//bind() returns a new function where call() directly calls the function
const txt = 'Scratch your ass to get the'
const newFunc1 = bike.changeProperty.bind(bike, txt)
const newFunc2 = bike.changeProperty.bind(bike)

newFunc2('Scratch your ass to get the')
setTimeout(newFunc1, 1000);
setTimeout(() => bike.changeProperty(txt), 1000);
setTimeout(() => bike.changeProperty.bind(bike, txt)(), 1000);
setTimeout(() => newFunc1(), 1000);
