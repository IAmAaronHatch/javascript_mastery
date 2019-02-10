// Remove String Spaces
    // Remove the spaces from the string, then return the resultant string.

function noSpace (x) {
    return x.split(' ').join('');
}

// regex

function noSpace(x) {
    return x.replace(/\s/g, '');
}
// console.log(noSpace('Example Tests For this function'))


// Reverse List Order 
    // take in a list(array) and return it in reverse order

function reverseList(list) {
    return list.reverse()
}

// console.log(reverseList([1,2,3,4]))

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (n) {
    return n * (n + 1)/2
}
// console.log(summation(8))

// Given a non-negative integer, such as 3, return a string "1 sheep... 2 sheep... 3 sheep..."

var countSheep = function (num) {
    let statement = '';
    for(let i=1; i<=num; i++){
        statement += `${i} sheep...`
    }
    return statement 
}
// console.log(countSheep(6))

function DNAtoRNA(dna) {
    // let n = dna.split('')
    // let m = n.map(x => {
    //     if (x == 'T') {
    //         x = 'U'
    //     } return x
    // })
    // return m.join('')

    return dna.split('T').join('U')

    // return dna.replace(/T/g, "U")

}
// console.log(DNAtoRNA('GCAT'))

function finalGrade(exam, projects) {
    let finalG = 0;
    // if(exam >= 90 || projects>10) {
    //     finalG = 100
    // } else if (exam >= 75 || projects == 5) {
    //     finalG = 90
    // } else if (exam >= 50 || projects == 2) {
    //     finalG = 75
    // }
    // return finalG

}
console.log(finalGrade(85, 5))

// Return the name of the day that corrisponds with the number value passed in. If not a num, return "Wrong, please enter a number between 1 and 7"

function whatday(num) {
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (1<=num==num<8) {
        return week[num - 1]
    } else {
        return "Wrong, please enter a number between 1 and 7"
    }

}
console.log(whatday())

function spEng(sentence) {
    let eng = /english/i 
    return eng.test(sentence)
}
console.log(spEng('HelEnglish'))


function isToday(date) {
    // console.log('date', date)
    let today = new Date();
    // console.log('today', today)
    let diff = Math.abs(date - today)
    if (diff > 10) {
        return false
    } else {
        return true
    }
    // if (today == date) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(isToday(new Date()))

// var diff = Math.abs(a - b);

// if (diff > 50) {
//     console.log('diff greater than 50');
// }

// given an array of integers, give the sum of the positive one 
// function positiveSum(arr) {
//     let sum = 0
//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             sum += arr[i]
//         }
//     }
//     return sum
// }
function positiveSum (arr) {
    let sum = 0;
    arr.map(x => {
        if(x > 0){
            sum += x
        }
    })
    return sum
}
console.log(positiveSum([1, 2, 3, -4, 100, -1203, 10]))