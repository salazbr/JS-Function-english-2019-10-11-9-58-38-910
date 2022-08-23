
function palindrome(message){

    // convert string to an array
    const arrayValues = message.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(message == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true
