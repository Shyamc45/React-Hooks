
function UserInput(callback) {
    const name = prompt("Enter name: ");
    callback(name);
}
UserInput((name) => {
    console.log(`Hello, ${name}!`);
});

export default UserInput;