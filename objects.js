const mySym = Symbol("key1")


const JsUser = {
    name: "Lovely",
    "full name":"Lovely Sharma",
    [mySym]: "mykey1",
    age: 19,
    location: "Uttarakhand",
    email: "lovelysharma6187@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
JsUser.email = "lovely@chatgpt.com"

JsUser.email = "lovely@microsoft.com"


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());