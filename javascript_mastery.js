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
// console.log(countSheep(3))

function DNAtoRNA(dna) {
    // let n = dna.split('')
    // let m = n.map(x => {
    //     if (x == 'T') {
    //         x = 'U'
    //     } return x
    // })
    // return m.join('')

    // return dna.split('T').join('U')

    return dna.replace(/T/g)

}
console.log(DNAtoRNA('GCAT'))