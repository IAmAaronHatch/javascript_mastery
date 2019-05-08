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

// function grow (x) {
//     let sum = 1;
//     for(let i=0; i < x.length; i++) {
//         sum = sum * x[i] 
//     }
//     return sum
// }

function grow (x) {
    return x.reduce ((a, b) => a * b)
}
console.log(grow([1,2,3,4,5]))

// function enough(cap, on, wait) {
//     // your code here
//     let cantTake = 0;
//     let total = on + wait;
//     if (cap >= total) {
//         return 0
//     } else if (cap < total) {
//         cantTake = total - cap
//         return cantTake
//     }
// }

function enough (cap, on, wait) {
    return (cap <= on + wait) ? ( on + wait - cap) : 0
}
console.log(enough(10, 5, 5))
console.log(enough(90, 50, 50))
console.log(enough(1000, 213, 21))

// function sum(numbers) {
//     return numbers.reduce((x, y) => x + y)
// };

function sum(numbers) {
    if (numbers.length < 1 || numbers == undefined) {
        return 0
    } else {
        return numbers.reduce((x, y) => x + y)
    }
};

// Had to add a catch all for an array that was empty, or else it threw out an error for []

console.log(sum([1, 5.2, 4, 0, -1]))

function greet() {
    var arr = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33];
    return arr.map(function (i) {
        return String.fromCharCode(i);
    }).join('');

}

console.log(greet())

// Write a function that takes in an array of integers and removes the lowest value, then returns the adjusted array.  If there are multiple instances of the same number, remove the number with the lowest index.  If passed an empty array, your function should return an empty array.

// Do not change the order of the remaining elements of the array.

// EXAMPLE:

// var sampleArr = [9, 2, 7, 3, 1, 5, 6, 4, 8, 1]

// Function should return: [9, 2, 7, 3, 5, 6, 4, 8, 1]

// var intArray = (arr) => {

//   let updatedArray = []

//   for(let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(arr[i]===arr[j]) {
//         updatedArray.push(arr.splice(i, 1))

//       }
//     }
//   }

//   return updatedArray
// }

// console.log(intArray([1,4,3,5,6,2,1])) ==> returns [[1],[3],[6],[1]]

//If you loop throught this and compare I to J, and splice it out, it will remove just the first lower integer.
//You could also map instead of a nested for loop?

function removeNumbers (arr) {
    let lowest = Math.min(...arr);
    let lowestIndex = arr.indexOf(lowest);
    arr.splice(lowestIndex, 1);
    return arr;
}
console.log(removeNumbers([1, 4, 3, 5, 6, 2, 1]))

function sumMix(x) {
    let total = 0
    x.map(a => {
        total += Number(a)
    })
    return total
}
console.log(sumMix([9, 3, '7', '3']))