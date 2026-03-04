export class TimeCommand {

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleString();
  }

}