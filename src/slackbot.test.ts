import { assert } from "../test_deps.ts";
import { Slackbot } from "./slackbot.ts";

Deno.test({
  name: "construct Slackbot()",
  fn() {
    const slackbot = new Slackbot("token");
    assert(slackbot instanceof Slackbot);
  },
});
