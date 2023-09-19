let num = Math.floor((Math.random() * 9) + 1);
let userInput = document.getElementById("number");
const submit = document.getElementById("submit");
submit.addEventListener("click", function(num, userInput){
    let result = "";
    if(num == userInput){
        result = 'Congratulations, your guess is correct! The correct number is ${num}';
        results.textContent = result; 
    }
    else {
        result = "Your guess is incorrect. Try again." 
        results.textContent = result;
    }
}); 
