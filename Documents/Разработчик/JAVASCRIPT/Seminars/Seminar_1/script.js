const hello = function(userName, surname, age){
    console.log(`Привет ${userName} ${surname} с возрастом ${age}`);
}

let userName = "Владимир";
let surname = "Назаров";
let age = 44;

hello(userName, surname, age);

function func(num = 5) {
    console.log(num * num);
}

func(2);  // 4
func(3);  // 9
func();   // 25 , по умолчанию num = 5