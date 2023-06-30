//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr){
    for (let x = 0; x < arr.length; x++) 
    if (str.toLowerCase().includes(arr[x].toLowerCase()))
        {return "Matched dog_name"}
    else 
        {return "No Matches"};
    }

console.log(findWords(dog_string, dog_names))



//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

 arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++)
        {if (i % 2 === 0) 
        arr.splice(i, 1, "even index")};
    return arr   
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// def multiply(a, b):
//   return a * b

function multiply(a,b){
    return a * b;
}

console.log(multiply(10,5))


// def people_with_age_drink(age):
//     if age < 14:
//         return "drink toddy"
//     elif age < 18:
//         return "drink coke"
//     elif age < 21:
//         return "drink beer"
//     else:
//         return "drink whisky"


function people_with_age_drink(age){
    if (age < 14)
        {return "drink toddy"}
    else if (age < 18)
        {return "drink coke"}
    else if (age < 21)
        {return "drink beer"}
    else
        {return "drink whisky"};

}

console.log(people_with_age_drink(25))
console.log(people_with_age_drink(19))
console.log(people_with_age_drink(15))
console.log(people_with_age_drink(2))