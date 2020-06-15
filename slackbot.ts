export async function sendMessage(channel: string, text: string) {
  const response = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": `Bearer ${Deno.env.get("SLACK_TOKEN")}`,
    },
    body: JSON.stringify({
      channel,
      text,
      as_user: true,
    }),
  });

  return response;
}
