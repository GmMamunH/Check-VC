let grade = prompt('Enter Your Marks:');

if (grade <= 100 && grade >= 80) {
    document.getElementById("result").innerHTML = 'Your result is "A+"'
    document.getElementById("per").innerHTML = 'মিষ্টি খাওয়াবেন নাকি খাবেন?'
    // document.getElementById("per").innerHTML = ('Your result is "A+"');
    // document.getElementById("per").innerHTML = ('মিষ্টি খাওয়াবেন নাকি খাবেন?'); 
} else if (grade < 80 && grade >= 70) {
    document.getElementById("result").innerHTML = ('Your result is "A"');
  document.getElementById("per").innerHTML = ('আর একটু কষ্ট করতে হতো'); 
} else if (grade < 70 && grade >= 60) {
  document.getElementById("result").innerHTML = ('Your result is "A-"');
  document.getElementById("per").innerHTML = ('আর আফসোস করে কি হবে।');
} else if (grade < 60 && grade >= 50) {
  document.getElementById("result").innerHTML = ('Your result is "B"');
  document.getElementById("per").innerHTML = ('পড়ার থেকে আড্ডার পরিমান বেশি ছিল।');
} else if (grade < 50 && grade >= 40) {
  document.getElementById("result").innerHTML = ('Your result is "C"');
  document.getElementById("per").innerHTML = ('আড্ডার পরিমান বেশি ছিল।');
} else if (grade < 40 && grade >= 33) {
  document.getElementById("result").innerHTML = ('Your result is "D"');
  document.getElementById("per").innerHTML = ('ফাঁকির পরিমান বেশি ছিল।');
} else if(grade < 33 && grade >= 0){
  document.getElementById("result").innerHTML = ('Your result is "F"');
  document.getElementById("per").innerHTML = ('বাবা তোমার কর্মের ফল। আর এক বার চেষ্টা কর।');
}else {
  document.getElementById("result").innerHTML = (grade + ' your number is wrong');
}

// let num1 = 50;
// let num2 = 5;
// let operator = '-';

// let result;

// switch(operator){
//     case '+':
//         result = num1 + num2;
//         console.log(`${num1} + ${num2} = ${result}`);
//         break;

//     case '-':
//         result = num1 - num2;
//         console.log(`${num1} - ${num2} = ${result}`);
//         break;

//     case '*':
//         result = num1 * num2;
//         console.log(`${num1} * ${num2} = ${result}`);
//         break;

//     case '/':
//         result = num1 / num2;
//         console.log(`${num1} / ${num2} = ${result}`);
//         break;

// }