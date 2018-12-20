// Remove String Spaces
    // Remove the spaces from the string, then return the resultant string.

function noSpace (x) {
    return x.split(' ').join('');
}

// regex

function noSpace(x) {
    return x.replace(/\s/g, '');
}
console.log(noSpace('Example Tests For this function'))