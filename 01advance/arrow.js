// const sayHello = function (name) {
//     return "Hey there, " + name + " !" 

// }

// console.log(sayHello('Sammy'));

const sayHello = (name) => {
    return `Hey there ${name} !`  

}

console.log(sayHello('Sammy'));

const todos = [{
    title: 'Bye bread',
    isDone: true
},{
    title:'Go to Gym',
    isDone: true,
},{
    title: 'Record youtube video',
    isDone: false
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone);

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This canon camera is of ${this.price}$`
    }
}

console.log(cameras.myDes());

// This is only for Redux people
// const func = () => ({key: 'value'});