

// var operation=prompt("Enter the operation (sum, sub, div, mul, mod):");
// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function div(a, b) {
//     return a / b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function mod(a, b) {
//     return a % b;
// }
// var num1=parseInt(prompt("Enter the first number:"));
// var num2=parseInt(prompt("Enter the second number:"));
// var result;
// if (operation === "sum") {
//     result = sum(num1, num2);
// } else if (operation === "sub") {
//     result = sub(num1, num2);
// } else if (operation === "div") {
//     result = div(num1, num2);
// } else if (operation === "mul") {
//     result = mul(num1, num2);
// } else if (operation === "mod") {
//     result = mod(num1, num2);
// } else {
//     result = "Invalid operation";
// }
// console.log("Result:", result);



// cart = ['pants', 'kurta', 'shoes'];

// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     .then(function(orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function(Payment) {
//         console.log(Payment);
//     })
//     .catch(function(err) {
//         console.log(err.message);
//     });


// function createOrder(cart) {
//     const pr = new Promise(function(resolve, reject) {
//         if(!validateCart(cart)) {
//             const err = new Error("cart not valid");
//             reject(err);
//         }

//         const orderId = "7015";
//         if(orderId) {
//             resolve(orderId);
//         }
//     });

//     return pr;
// }


// function validateCart(cart) {
//     return true;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function(resolve, reject) {
//         resolve("Payment Successful");
//     });
// }




































// // const car = {
// //     model:"mustang",
// //     price:20000,
// // }

// // var count = 0;
// // function a() {
// //     count++;
// //     console.log(count);
// // }
// // const users = [
// //     {firstName : 'akshay', lastName : 'saini', age : 26},
// //     {firstName : 'Modi', lastName : 'Narendra', age : 75},
// //     {firstName : 'Mohan', lastName : 'lal', age : 50},
// //     {firstName : 'Jhanvi', lastName : 'kapoor', age : 26},
// // ]

// // const output = users.reduce(function(acc, curr) {
// //     if(curr.age < 30)
// //         acc.push(curr.firstName);
// //     return acc;
// // }, [])
// // console.log(output);
// // a();
// // console.log("start call back");
// // setTimeout(function cb(){
// //     console.log("call back");
// // }, 5000);
// // console.log("end call back");
// // console.log(car);
// // console.log(Object.keys(car));
// // console.log(Object.values(car));
// // console.log(Object.entries(car));


// // const arr = ['red',432, true];
// // arr[1] = 88;
// // console.log(arr)
// // arr.push('khan');
// // console.log(arr);
// // //arr.pop();

// // function functionName(paramas) {
// //     code to be excuted
// // }

// // function sum(a, b) {
// //     return a + b;
// // }

// // function sub(a, b) {
// //     return a - b;
// // }

// // function product(a, b) {
// //     return a * b;
// // }

// // function modules(a, b) {
// //     return a % b;
// // }

// // console.log(sum(6, 7));  

// // console.log(sub(8, 7)); 

// // console.log(product(6, 7)); 

// // console.log(modules(6, 7)); 