type User =  {
    name: string;
    phoneNumber: string;
};

/**
 * An array of `User` objects representing the users in the application.
 */

let users: Array<User> = [
    {name: 'John', phoneNumber: '9389209'},
    {name: 'Jane', phoneNumber: '8940380'}
];2


// Example of union type
type Status = 'active' | 'inactive' | 'pending';

// Function that uses union type
function updateUserStatus(user: User, status: Status): void {
    console.log(`Updating ${user.name}'s status to ${status}`);
}

// Usage
let newUser: User = { name: 'Alice', phoneNumber: '1234567' };
updateUserStatus(newUser, 'active');

// Another example with union of different types
type ID = string | number;

function printID(id: ID) {
    console.log(`ID: ${id}`);
}

printID(123);
printID("ABC-456");

// Union with null
type MaybeUser = User | null;

function getUser(id: number): MaybeUser {
    return id === 1 ? users[0] : null;
}

let result = getUser(1);
console.log(result?.name); // Safe access using optional chaining
