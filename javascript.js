// 1.Write a function that takes in a string and returns it when reversed


function fooding(string){

   return string.split('').reverse().join('')
  

}
let food = "eating";
let reverse = fooding(food)
console.log(reverse)


// 2. Write a function that takes in the following array and consoles
// the target if it is found else
//null
 
 function devideArray(arr){
    if(arr.length <=1){
        return arr;
    }
    let middle =Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right =arr.slice(middle);
    console.log({left})
    console.log({right})
    return sortedArray(devideArray(left),devideArray(right))





 }
function sortedArray(left,right){
    let emptyArray=[];
    while (left.length && right.length){
        
        if (right[0]<left[0]){
            emptyArray.push(right.shift())
            
        }
        else{
            emptyArray.push(left.shift())
        }
    }
    return[...emptyArray,...left,...right]
}
// let arr= [2,8,0,23,5,45,76]
// console.log(devideArray(arr))

function binarysearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex = (leftIndex + rightIndex)/2
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rightIndex = middle-1
        }
        else{
            leftIndex = middleIndex+1
        }

    }
    return -1
}
   
    let arr1 = [0,2,5,8,23,45,76];
    let target=23

    console.log((arr1,target))

   //3. Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for (years = 2000;years <= 2023;years++)
if (years%4===0 ){
console.log(years+"is a leep year");
}
else {
    console.log (years+"is not a leep year");
}

//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.


for (var number = 1; number < 101; number++) {
    if (number % 15 == 0) console.log("FizzBuzz");
    else if (number % 3 == 0) console.log("Fizz");
    else if (number % 5 == 0) console.log("Buzz");
    else console.log(number);
}


 // 5. Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
function arrays(z){
    console.log(z*4);
}
let numbers=[12,87,45,75,23,64,73]
numbers.forEach(arrays)




 // 6 .Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = ["10","24","45","56","67"]


function arrayStrings(arr){
    return arr.map(Number)
  }
  let stringArray = ["10","24","45","56","67"]
  console.log(arrayStrings(stringArray))


