/**
 * An array of `User` objects representing the users in the application.
 */
var users = [
    { name: 'John', phoneNumber: '9389209' },
    { name: 'Jane', phoneNumber: '8940380' }
];
2;
// Function that uses union type
function updateUserStatus(user, status) {
    console.log("Updating ".concat(user.name, "'s status to ").concat(status));
}
// Usage
var newUser = { name: 'Alice', phoneNumber: '1234567' };
updateUserStatus(newUser, 'active');
function printID(id) {
    console.log("ID: ".concat(id));
}
printID(123);
printID("ABC-456");
function getUser(id) {
    return id === 1 ? users[0] : null;
}
var result = getUser(1);
console.log(result === null || result === void 0 ? void 0 : result.name); // Safe access using optional chaining
