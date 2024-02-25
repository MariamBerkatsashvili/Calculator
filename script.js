// 1. კალკულატორი

// მომხმარებელს შეჰყავს მისთვის სასურველი რიცხვები და არითმეტიკული მოქმედება, 
// თუმცა რადგან prompt აბრუნებს სტრიქონს, გაწერილი აქვს Number(),
// რათა typeof იყოს რიცხვი და არა სტრიქონი და შეასრულოს მათემატიკური მოქმედება 

let num1;
let num2;
let operator;
const arr = ["+", "-", "*", "/"];
let result;

//do - while ციკლი, სანამ მომხმარებელი არ შეიყვანს ვალიდურ რიცხვს
do{
    //მომხმარებლის მიერ პირველი რიცხვის შეყვანა  
    num1=Number(prompt('Please enter the first Number'));

    //ვალიდაცია: შეყვანილი უნდა იყოს რიცხვითი მნიშვნელობა (ternary)
    num1/1!==num1 ? alert(`Please enter a valid number`) : '';
    
} while (num1-0!==num1);
console.log(num1);


//do - while ციკლი, სანამ მომხმარებელი არ შეიყვანს ვალიდურ ოპერატორს მასივიდან
do{
    //მომხმარებლის მიერ მათემატიკური ოპერატორის შეყვანა  
    operator=prompt('Please enter the operator (+,-,*,/)');

    //ვალიდაცია: გრაფა არ უნდა იყოს ცარიელი  (ternary)
    !operator ? alert('Invalid operator') && console.warn('Invalid operator') : '';
    //ვალიდაცია: შეყვანილი უნდა იყოს მათ. მოქმედება მასივიდან (ternary)
    !arr.includes(operator) ? alert('Invalid operator') && console.warn('Invalid operator'): '';
    
} while (!operator || !arr.includes(operator));
console.log(operator);


//do - while ციკლი, სანამ მომხმარებელი არ შეიყვანს ვალიდურ რიცხვს
do{
    //მომხმარებლის მიერ მეორე რიცხვის შეყვანა  
    num2=Number(prompt('Please enter the second Number'));

    //ვალიდაცია: შეყვანილი უნდა იყოს რიცხვითი მნიშვნელობა (ternary)
    num2/1!==num2 ? alert(`Please enter a valid number`) : '';
    // ვალიდაცია: თუ არაფერს შეიყვანს, დაბრუნდეს ოპერატორზე
} while (num2/1!==num2);
console.log(num2);




//ფუნქცია - თუ მომხმარებელმა არასწორად შეიყვანა მონაცემები, თავიდან შეყვანის ფუნქცია
function startAgain(){
    num1;
    console.log(num1);
    operator;
    console.log(operator);
    num2;
    console.log(num2);
    
}


//თუ მომხმარებელზე ჩაწერა ნულზე გაყოფა, შეტყობინება, რომ არ შეიძლება და ხელახლა შეყვანა
if(operator==="/" && num2===Number("0")){
    alert('It cannot be divided by zero');
    console.error('It cannot be divided by zero');
    
}else{
    //use switch for different cases   
    switch (operator){
        //სტანდარტული ოპერაციები
        case '+': result=num1+num2;
        break;
        case "-": result=num1-num2;
        break;
        case "*": result=num1*num2;
        break;
        case "/": result=num1/num2;
        break;
        default: result="Invalid operation1";
    }

    // ფუნქცია - თუ მომხმარებელმა სწორად შეიყვანა მონაცემები, გამოიტანოს შედეგი, თუ არა და დაუწეროს invalid operation 

    function lastResult(){
        if(isNaN(result)){
        alert ('invalid operation. Input data correctly');
        console.error('invalid operation');
        startAgain();
    }else{
        alert(`Result of ${num1} ${operator} ${num2} =` + result);
        console.log(`Result of ${num1} ${operator} ${num2} =` + result);
    }
    }
    lastResult();
}

