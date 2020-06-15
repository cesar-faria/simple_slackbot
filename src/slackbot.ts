export class Slackbot {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  async sendMessage(channel: string, text: string) {
    const response = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        channel,
        text,
        as_user: true,
      }),
    });

    return response;
  }
}
