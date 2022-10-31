// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
// 2. console.log best friend's firstName and your favorite food

const yuliaB = {
    firstname: "Yulia",
    lastName: "Balenko",
    favFood: "chowder",
    bestFriend: {
        name: "Kate",
        surname: "Smith",
        favouriteFood: "stew"
    }
}

console.log("My best friend\'s first name is", yuliaB.bestFriend.name)
console.log("My favorite food is", yuliaB.favFood)



// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X


const board = [
    [' ', '0', ' '],
    [' ', 'x', '0'],
    ['x', ' ', 'x'],
]

console.log("Initial board see below")
console.log(board[0])
console.log(board[1])
console.log(board[2])


// 4. After the array is created, O claims the top right square. Update that value.
// 5. Log the grid to the console.
board[0][2] = '0'

console.log("Updated board see below")
console.log(board[0])
console.log(board[1])
console.log(board[2])


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const emailVerification = new RegExp('^([a-zA-Z0-9\.\-\_]*)@([a-zA-Z0-9\-]*)\.([a-zA-Z]*)$');
res = emailVerification.test('myEmail!123@test1.com')
console.log(res)
if (res) {
    console.log("Email format is correct")
} else {
    console.log("Email format is not correct")
}


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


// 10. log this value using console.log
