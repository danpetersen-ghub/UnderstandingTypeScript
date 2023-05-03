type Message = any;

function hello(name: string, message: Message): string {
    return `Hello ${name} the message today is ${message}`;
}

console.log(
    hello("dan", "its dark today")
);