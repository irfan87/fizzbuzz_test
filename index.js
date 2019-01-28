/*
    Write a program that prints the number from 1 t0 100.
    Print "Fizz" when number is multiple with 3.
    Print "Buzz" when number is multiple with 5.
    Print "FizzBuzz" when number is multiple with 3 and 5 (3 * 5 = 15)
*/

fizzbuzzlisting = () => {
    for(let i = 1; i < 101; i++) {
        if(i % 15 == 0) {
            console.log("FizzBuzz");
        } else if(i % 3 == 0) {
            console.log("Fizz");
        } else if(i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzzlisting();