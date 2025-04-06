let num = Math.floor(Math.random()*10 ) + 1;
let guess = prompt(" guess the number between  0 to 10 or enter quit to exit  : ");
while(guess != "quit"){
    if (guess==num) {
        alert(" congrats you guessed it right ");
        break;
    }
    else if(guess > num ) {
        guess = prompt("  enter little lower or  enter quit to exit  : ");

    }
    else if(guess < num ) {
        guess = prompt("  enter little higher or  enter quit to exit  : ");

    }
    else{
        alert(" something went wrong !")
    }
}