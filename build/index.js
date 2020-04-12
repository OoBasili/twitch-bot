"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmi_js_1 = require("tmi.js");
const options = {
    identity: {
        username: 'basilioobot',
        password: ''
    },
    channels: [
        'basilioo197',
    ]
};
const client = tmi_js_1.Client(options);
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();
function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    }
    if (context["user-id"] === '???????') {
        client.say(target, `@${context["display-name"]} привет`);
    }
}
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
