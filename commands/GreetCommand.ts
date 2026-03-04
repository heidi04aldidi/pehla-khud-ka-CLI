export class GreetCommand {

  greet(name: string, uppercase: boolean): string {
    let message = `Hello, ${name}!`;

    if (uppercase) {
      message = message.toUpperCase();
    }

    return message;
  }
}