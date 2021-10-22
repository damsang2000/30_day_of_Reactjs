// note arrow function
// 1.arrow funtion not is context in object method
// 2.arrow function not is constructor function

// Module js
// export/import
// export:-default/-not default
// import:import nameExport from linkfileExport

// enhanced object literals
// 1.Định nghĩa key:value cho object
// let name='sang'
// let age=21
// const person={
//     name,
//     age
// }
// console.log(person)
// 2.Định nghĩa method cho object
// let name='sang'
// let age=21
// const person={
//     name,
//     age,
//     getName(){
//         return this.name
//     }
// }
// console.log(person.getName())
// 3.Định nghĩa key cho object dưới dạng biến
// let fieldName = "name";
// let fieldPrice = "price";
// const course = {
//   [fieldName]: "javacripts",
//   [fieldPrice]: 1000,
// };
// console.log(course);

// rest parameters and spread and destructuring
// example rest parameters
// function logger(a,...rest) {
//     console.log(rest)
// }
// logger(1,2,3,4)

// example destructuring
// const person={
//     name:'sang',
//     age:21
// }
// function logger({name,age}) {
//     console.log(name,age)
// }
// logger(person)

// example spread
// let arr1=['javacripts','nodejs','php']
// let arr2=['reactjs','vuejs']
// let arr3=[...arr1,...arr2]
// console.log(arr3)
// const person={
//     name:'sang',
//     age:21,
//     address:'18 nguyen duc thuan'
// }
// const person1={
//     ...person,
//     address:'140 le trong tan'
// }
// console.log(person1)
// let arr=[1,3,4]
// function logger(a,...rest) {
//     for(let item of rest) {
//         console.log(item)
//     }
// }
// logger(...arr)

