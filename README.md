# Simple Slackbot

[![tag](https://img.shields.io/badge/deno->=1.0.0-green.svg)](https://github.com/denoland/deno)

Simple Slackbot is a wrapper for the [Slack Web API](https://api.slack.com/)

## Usage
```ts
import { Slackbot } from "https://raw.githubusercontent.com/cesar-faria/simple_slackbot/master/mod.ts";

const slackbot = new Slackbot("token");
slackbot.sendMessage("#channel", "message");
```
