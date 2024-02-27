// 1. კალკულატორი
 
 
//ცვლადების ინიცირება
let prompt1;
let prompt2;
let num1;
let num2;
let operator;
const arr = ["+", "-", "*", "/"];
let result;
 
//პირველი რიცხვის შეყვანის ფუნქცია
function Num1Input(){
 
    //do - while ციკლი, სანამ მომხმარებელი არ შეიყვანს ვალიდურ რიცხვს
    do {
        //მომხმარებლის მიერ პირველი რიცხვის შეყვანა
        prompt1 = prompt('Please enter the first number');
 
        //ვალიდაცია: მომხმარებლის მიერ მონაცემის შეყვანის აუცილებლობა
        if (prompt1 === null || prompt1.trim() === "") {
            alert('Please enter a valid number');
            console.error('Please enter a valid number');
            continue;
        }
 
        // რადგან prompt აბრუნებს სტრიქონს, გაწერილი აქვს Number(),
        // რათა typeof იყოს რიცხვი და არა სტრიქონი და შეასრულოს მათემატიკური მოქმედება
        num1 = Number(prompt1);
        
        //ვალიდაცია: თუ მომხმარებლის მიერ შეყვანილი მონაცემი არაა რიცხვი
        if (isNaN(num1)) {
            alert('Please enter a valid number');
            console.error('Please enter a valid number');
            continue;
        }
    } while (isNaN(num1) || num1 === null);
    console.log(num1);
}
 
// მათემატიკური ოპერატორის ფუნქცია
function operation(){
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
}
 
//მეორე რიცხვის შეყვანის ფუნქცია
function Num2Input(){
 
    do {
        prompt2=prompt('Please enter the Second number');;
       
        //ვალიდაცია: მომხმარებლის მიერ მონაცემის შეყვანის აუცილებლობა
        if (prompt2 === null || prompt2.trim() === "") {
            alert('Please enter a valid number');
            console.error('Please enter a valid number');
            continue;
        }
 
        // რადგან prompt აბრუნებს სტრიქონს, გაწერილი აქვს Number(),
        // რათა typeof იყოს რიცხვი და არა სტრიქონი და შეასრულოს მათემატიკური მოქმედება
        num2 = Number(prompt2);
 
        //ვალიდაცია: თუ მომხმარებლის მიერ შეყვანილი მონაცემი არაა რიცხვი
        if (isNaN(num2)) {
            alert('Please enter a valid number');
            console.error('Please enter a valid number');
            continue;
        }
    } while (isNaN(num2) || num2 === null);
    console.log(num2);
 
}
 
 
 
// ფუნქცია - თუ მომხმარებელმა სწორად შეიყვანა მონაცემები, გამოიტანოს შედეგი, თუ არა და
//დაუწეროს "invalid operation"
function lastResult(){
   
    //თუ მომხმარებელზე ჩაწერა ნულზე გაყოფა, შეტყობინება, რომ არ შეიძლება და ხელახლა შეყვანა
    if(operator==="/" && num2===0){
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
            default: result="Invalid operation";
        }
        //სწორად შეყვანილი მონაცემების შედეგი
        alert(`Result of ${num1} ${operator} ${num2} =` + result);
        console.log(`Result of ${num1} ${operator} ${num2} =` + result);
    }
   
 
}
   
 
//ფუნქციების გამოძახება
function calculator(){
    Num1Input();
    operation();
    Num2Input();
    lastResult();
}
calculator();