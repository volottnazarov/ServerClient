const week = {
    1: "понедельник",
    2: "вторник",
    3: "среда"
}
console.log(week[2]);

//==================================================================================================

// const user = {
//     userName: "Владимир",
//     lastName: "Назаров",
//     age: 44
// }
// console.log(`${user.userName} - ${user.lastName} - ${user.age}`);
// user.fatherName = prompt('Введите отчество: ');
// console.log(`${user.userName} - ${user.lastName} - ${user.age} - ${user.fatherName}`);

//============================================================================================
//создать обьект, клячами кот будут эл-ты arr2, а свойствами зн-я arr1.

const arr1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const week2 = {};
for (let i = 0; i < arr1.length; i++) {
    week2[arr2[i]] = arr1[i]
        }
console.log(week2);

//========================================================================================================
//Дан обьект, рройтись по нему и возвести в квадрат значения
 const obj = {
    x: 1,
    y: 2,
    z: 3
 }
 for (const item in obj){
    console.log(obj[item] * obj[item]); // obj[item] ** 2
    obj[item] = obj[item] ** 2; //присваиваем новые зн-я
 }
 console.log(obj);

 //==============================================================================================
 // Загадка , ответ

const riddles ={
    question: "Зимой и летом одним цветом",
    answer: "елка",
    askQuestion(){
        let userAnswer = prompt(this.question);
        userAnswer = userAnswer.toLocaleLowerCase();
        if(userAnswer === this.answer){
            alert('Правильно, молодец !!!');
        }else{
            alert('Не правильно');
        }
    }
}
riddles.askQuestion();

