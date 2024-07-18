// console.log("Hello and Bienvenue");
// console.log(40+38);


// var name = "Ola"
// let age = 50

// console.log(name);
// console.log(age);

//function declaration
// function greet(){
//     console.log('Hello', name);
// }
// function age_five(){
//     console.log(name, 'will be', age + 5, 'in 2029');
// }

//Function expression
// const welcome = function(){
//     console.log('Welcome to the seven');
// };

// const greeting = function(){
//     console.log('Speaker: it is nice meeting you', name)
//     console.log(name,': my pleasure')
// }


//calling/invoking the function
// greet();
// age_five();
// welcome();
// greeting();

//_______________________________________________
//_________LOOPS_________________
//____FOR__LOOPS_____
//___WHILE__LOOPS___
//____DO WHILE___LOOPS


//FOR LOOP
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// names = ["Paula", "Chris", "Daniel", "Ayo", "Jesse", "Finn"]
// console.log(names.length)
// for(let i = 0; i <= 5; i++){
//     console.log(names[i])
// }

//___WHILE LOOP___
// let i = 0
// while(i < 5){
//     console.log(i)
//     i++
// }

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++
// }

// let i = 1;
// while(i <= 100){
//     console.log(i);
//     i += 3
// }


//CONDITIONAL STATEMENT_____

// if (name == "Shade"){
//     console.log("The name is correct")
// } else if (name = "Ola") {
//     console.log("The name is also correct")
// } 
// else {
//     console.log("The name is not correct")
// }

// if (name == "Shade"){
//     console.log("The name is correct")
// } else (name = "Ola") {
//     console.log("The name is also correct")
// } 
// else {
//     console.log("The name is not correct")
// }


// let i = 1;
// while(i <= 100){
//     console.log(i);
//     i -= 5
// }

// Username = "Sillyrabbit"
// Password = "silly"

// username = prompt("Username")
// password = prompt("Password")

// if (Username == username && Password == password){
//     alert("submitted")
// }else{
//     alert("Incorrect username or password")
// }
    
// age = 20

// if (age < 13){
//     console.log("You are a child")
// }else if (age < 20){
//     console.log("You are a teenager")
// }else{
//     console.log("You are an adult")
// }

time = 1300

if (time > 0000){
    console.log("It is morning")
}else if (time > 1200){
    console.log("It is afternoon")
}
else if (time > 1600){
    console.log("It is evening")
}
else if (time > 1900){
    console.log("It is night")
}else{
    console.log("midnight again")
}

clock = 2200

if (clock <= 1159) {
    document.getElementById('demo').innerHTML = "Good morning"
}
else if (clock <= 1600) {
    document.getElementById('demo').innerHTML = "Good afternoon"
}
else if (clock <= 1900) {
    document.getElementById('demo').innerHTML = "Good evening"
}
else if (clock <= 2400) {
    document.getElementById('demo').innerHTML = "Good night"
}
else {
    document.getElementById('demo').innerHTML = "invalid input"
}