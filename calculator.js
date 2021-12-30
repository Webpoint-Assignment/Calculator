function add(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1/num2;
}

let choice=window.prompt("Enter operation add,sub,mul,div");
let num1=parseInt(window.prompt("Enter number1"));
let num2=parseInt(window.prompt("Enter number2"));
if (choice=="add"){
    document.write("Sum of two number num1 and num2:"+" "+ add(num1,num2));
}
else if(choice=="sub"){
    document.write("Difference of two number num1 and num2:"+" "+sub(num1,num2))
}
else if(choice=="mul"){
    document.write("product of two number num1 and num2:"+" "+mul(num1,num2))
}
else if(choice=="div"){
    document.write("Division of two number num1 and num2:"+" "+div(num1,num2))
}
else{
    document.write("INvalid")
}