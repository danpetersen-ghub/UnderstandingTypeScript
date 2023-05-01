type Message = any;

function hello(name: string, message: Message) {
    return console.log(`Hello ${name} the message today is ${message}`)
}

hello("dan", "its dark today");