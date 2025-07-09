const user = {
    username: "lovely",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "lovely"
//     console.log(this.username);
// }

// coffee()

// const chai = function () {
//     let username = "lovely"
//     console.log(this.username);
// }

const coffee =  () => {
    let username = "lovely"
    console.log(this);
}


// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "lovely"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()