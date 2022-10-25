//traffic light code wars
// const changingStoplight = (current) => {
//     if (current == "green"){
//         return "yellow"
//     } else if (current == "yellow") {
//         return "red"
//     } else {
//         return "green"
//     }
// }
// console.log(changingStoplight("yellow"))

// how many light sabers do you own

// const owningLightsabers = (name) => {
//     if(name === "Zach") {
//         return 18      //return name === "Zach" ? 18 : 0
//     } else {
//         return 0
//     }
// }
// console.log(owningLightsabers("Cody"))

// const owningLightsabers = (name) => name === "Zach" ? 18 : 0

// console.log(owningLightsabers("Gary"))



////////////////////////////////
// Easy Going
////////////////////////////////
// function 1

// const logNumbers = () => {
//     for(let i = 1; i <= 20; i++) {
//         console.log(i)
//     }
// }
// logNumbers();

////////////////////////////////
// Get Even
////////////////////////////////
// const logEvenNumbers = () => {
//     for(let i = 0; i <= 200; i +=2) {
//         console.log(i)
//     }
// }
// logEvenNumbers();

////////////////////////////////
// Fizz Buzz
////////////////////////////////
const getMyNumbers = () => {
    let num;
    for(let i=1; i<101; i++){
        num=i;
    
    if(num%3===0 && num%5===0){
        console.log(`FizzBuzz`);
    }
    else if(num%3===0){
        console.log(`Fizz`);
    }
    else if(num%5===0){
        console.log(`Buzz`);
    }
    else {
        console.log(num);
    }
}
}
getMyNumbers();


////////////////////////////////
// Wild Wild Life
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////