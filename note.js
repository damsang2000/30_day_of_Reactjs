"use strict";
// ** note arrow function
    // 1.arrow funtion not is context in object method
    // 2.arrow function not is constructor function

// ** Module js
    // export/import
    // export:-default/-not default
    // import:import nameExport from linkfileExport

// ** enhanced object literals
    // ? 1.Định nghĩa key:value cho object
    // let name='sang'
    // let age=21
    // const person={
    //     name,
    //     age
    // }
    // console.log(person)
    // ? 2.Định nghĩa method cho object
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
    // ? 3.Định nghĩa key cho object dưới dạng biến
    // let fieldName = "name";
    // let fieldPrice = "price";
    // const course = {
    //   [fieldName]: "javacripts",
    //   [fieldPrice]: 1000,
    // };
    // console.log(course);

// ** rest parameters and spread and destructuring
    // ? example rest parameters
    // function logger(a,...rest) {
    //     console.log(rest)
    // }
    // logger(1,2,3,4)

    // ? example destructuring
    // const person={
    //     name:'sang',
    //     age:21
    // }
    // function logger({name,age}) {
    //     console.log(name,age)
    // }
    // logger(person)

    // ? example spread
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

// ** IIFE(Immediately Invoked Function Expression) trong javacripts
    // ? NOTE IIFE
    // ? 1.Create IIFE
    // ? 2.Dùng dấu ; trước IIFE
    // ? 3.IIFE là hàm 'private'
    // ? 4.Sử dụng IIFE khi nào ?
    // ? 5.Các cách tạo ra một IIFE
    // ? 6.Ví dụng sử dụng IIFE

    // ? create IIFE
    // ((message) => {
    //   console.log(message)
    // })('HELLO')

    // ? Dùng dấu ; trước IIFE
    // const fullName='dam sang'
    // ;(function () {
    //    console.log('hello')
    // })()

    // ? IIFE là hàm 'private'
    // ;(function Show() {
    //     console.log('hello')
    // })()
    // Show()

    // ? Sử dụng IIFE khi nào
    // Sử dụng khi muốn một hàm chạy ngay và biến không bị ảnh hưởng bởi biến global

    // ? Các cách tạo ra 1 IIFE
        // ? 1.expression function
        // ;(function() {
        //     // code
        // })()
        // ? 2.arrow function
        // ;(()=>{
        //     // code
        // })()
        // ? 3.dùng toán tử đằng trước IIFE
        // -function () {
        //    // code
        // }()

    // ? Ví dụ sử dụng IIFE
    // dùng để bảo toàn tính toàn vẹn dữ liệu
    // const app = (function () {
    //     // private
    //     const cars=[]
    //     return {
    //         add(car){
    //             cars.push(car)
    //         },
    //         edit(index,car){
    //             cars[index]=car
    //         },
    //         remove(index){
    //             cars.splice(index,1)
    //         },
    //         show(){
    //             console.log(cars)
    //         }
    //     }
    // })()
    // app.add('honda')

// ** Scope(Phạm vi) trong javacripts
    // ? Các loại phạm vi:
        // todo Global -Toàn cầu
            // Biến được khai báo ở phạm vi global,có thể truy cập ở bất kỳ đâu
            // let name='sang'
        // todo Code block -Khối mã:let,const
            // Biến được khai báo bên trong block,chỉ được truy cập bên trong block
            // {
            //   const message='hello'
            //   console.log(message)
            // }
            // if else
        // todo Local scope -Hàm:var,function
            // Biến được khai báo bên trong hàm chỉ được khai báo bên trong hàm
            // function logger() {
            //     const name='sang'
            //     console.log(name)
            // }
    // ? Khi gọi hàm luôn có 1 phạm vi mới được tạo ra
    // ? Các hàm có thể truy cập các biến được khai báo trong phạm vi 
    // ? và bên ngoài nó
    // ? Cách thức một biến được truy cập
    // const age=18
    // {
    //     {
    //         {
    //             {
    //                 console.log(age)
    //             }
    //         }
    //     }
    // }
    // ? Khi nào một biến bị xóa khỏi bộ nhớ ?
        // todo Biến toàn cầu?
            // Biến được xóa khi trình duyệt tắt
        // todo Biến trong code block và trong hàm?
            // Khi hàm thực thi xong thì biến sẽ tự xóa
        // todo Biến trong hàm được tham chiếu 1 hàm?
            // 

            // function makeCouter() {
            //     let couter=0
            //     function increase() {
            //         return couter++
            //     }
            //     return increase
            // }
// ** Closure trong javacripts
    // là 1 hàm có thể ghi nhớ nơi nó dc tạo và truy cập được ở biến bên 
    // ngoài phạm vi của nó
    // Example
    // function makeCouter() {
    //     let couter=0
    //     function increase(params) {
    //         return ++couter
    //     }
    //     return increase
    // }
    // const couter1=makeCouter()
    // console.log(couter1())
    // console.log(couter1())
    // console.log(couter1())
// ** Ứng dụng Closure
    // ? Closure có tính bao đóng,toàn vẹn dữ liệu
    // ? Biến được tham chiếu trong closure sẽ không được xóa khỏi bộ nhớ
    // ? khi hàm cha thực thi xong
    // ? Các khái niệm javacripts nâng cao rất dễ gây nhầm lẫn(IIFE,Closure)
    // Example
    // function createLogger(namespace) {
    //     function logger(message) {
    //         return `[${namespace}] ${message}`
    //     }
    //     return logger
    // }
    // const errorLogger=createLogger('Error')
    // console.log(errorLogger('Hàm gửi mail bắt đầu chạy'))
    // console.log(errorLogger('Đang sửa mail'))
    // console.log(errorLogger('Đã gửi thành công'))
    
    // Example
    // function createStorage(key) {
    //     const store=JSON.parse(localStorage.getItem(key)) ?? {}
    //     const save=()=>{
    //         localStorage.setItem(key,JSON.stringify(store))
    //     }
    //     const storage={
    //         get(key){
    //             return store[key]
    //         },
    //         set(key,value){
    //             store[key]=value
    //             save()
    //         },
    //         remove(key){
    //             delete store[key]
    //             save()
    //         }
    //     }
    //     return storage
    // }
    // const Setting=createStorage('Setting')
    // Setting.set('fullName','sang')
    // Setting.set('age',21)
    // Setting.set('address','18 nguyen duc')
    // console.log(Setting.get('age'))
    // console.log(Setting.save())
    // 
// ** Hosting trong javacripts
    // Đưa phần khai báo biến lên đầu phạm vi
    // ? Hosting với 'var','function declaration'
    // Example 
    // console.log(age)
    // console.log(fullName)
    // var age=13
    // Example
    // console.log(sum(5,6))
    // function sum(a,b) {
    //     return a+b
    // }
    // ? Hosting với 'let','const'
    // Không được tạo giá trị và được đưa vào 'Temporal Dead Zone' 
    // Example
    // {
    //     console.log(fullName)
    //     let fullName='sang'
    // }
// ** Strict mode của javacripts
    // ? Báo lỗi gán lại giá trị cho thuộc tính có writable:false
    // ? Báo lỗi khi hàm có tham số trùng tên
    // ? Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
    // ? Không đặt tên biến,tên hàm bằng một số từ khóa 'nhạy cảm' của ngôn ngữ
    // fullName='Nguyen Van A'
    // function testFunc() {
    //     age=19
    // }
    // console.log(fullName)

    // example
    // const person=Object.freeze({
    //     name:'sang'
    // })
    // person.name='anh'

    // Example
    // function sum(a,a) {
    //     console.log(a+a)
    // }
    // sum(9,6)
// ** Value types and reference types
    // ? Value types(Primitive data types)
        // todo -string
        // todo -Number
        // todo -Boolean
        // todo -BigInt
        // todo -Symbol
        // todo -undefined
        // todo -null
    // ? reference types(Non-primitive data types)
        // todo Object
        // todo Array
        // todo Function
// ** Từ khóa this trong javacripts(Trỏ về đối tượng nó đang thuộc về)
    //Example
    // const person={
    //     // thuộc tính:Property
    //     name:'sang',
    //     age:21,
    //     address:'18 nguyen duc thuan',
    //     // Phương thức:Method
    //     getName(){
    //         return this.name
    //     }
    // }
    // console.log(person.getName())

    // Example
    // function Person(name,age,address) {
    //     this.name=name
    //     this.age=age
    //     this.address=address
    //     this.talk=function () {
    //         console.log('talk')
    //     }
    // }
    // const student=new Person('sang',21,'18 nguyễn đức thuận')
    // student.talk()

    // Example
    // const button=document.querySelector('button')
    // button.addEventListener('click',function () {
    //     console.log(this)
    // })

// ** Call trong javacripts
    // ? Gọi hàm với call method
        // function random() {
        //     console.log(Math.random())
        // }
        // random.call()
    // ? Gọi hàm và bind this,lưu ý trong strict mode vẫn có this nếu được
        // const person={
        //     name:'sang',
        //     age:21
        // }
        // const person1={
        //     name:'sang1',
        //     age:21,
        //     getName(){
        //         console.log(`${this.name} ${this.age}`)
        //     }
        // }
        //  person1.getName.call(person)

        // this.name='sang'
        // this.age=21
        // function getName() {
        //     console.log(`${this.name} ${this.age}`)
        // }
        // getName.call(this)
    // ? Thể hiện tính kế thừa(extends) trong OOP
        // function Person(name,age) {
        //     this.name=name
        //     this.age=age
        // }
        // function student(name,age,legs) {
        //     Person.call(this,name,age)
        //     this.legs=legs
        // }
        // const student1=new student('sang',21,2)
        // console.log(student1)
    // ? Mượn hàm (function borrowing),thêm ví dụ với argument
        // function show() {
        //    const arr=Array.prototype.slice.call(arguments)
        // //  let arr=[1,3,4]
        //  arr.forEach(element => {
        //     console.log(element) 
        //  });
        // }
        // show(1,3,4,5)