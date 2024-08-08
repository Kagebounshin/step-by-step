// Random message generator

const messages = ["You're doing great", "Keep on going", "Dont worry about the future", "Take on day at a time", "You do look amazing"];

//Random messages function
const random = () => {
    console.log(messages[Math.floor(Math.random() * messages.length)]);
}

//calling function
random()


