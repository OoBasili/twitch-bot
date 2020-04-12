import {Client, Options, ChatUserstate} from 'tmi.js';

const options: Options = {
  identity: {
    username: 'basilioobot',
    password: ''
  },
  channels: [
    'basilioo197',
  ]
};

const client: Client = Client(options);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

function onMessageHandler (target: string, context: ChatUserstate, msg: string, self: boolean) {
  if (self) { return; }

  if (context["user-id"] === '???????') {
    client.say(target, `@${context["display-name"]} привет`);
  }
}

function onConnectedHandler (addr: string, port:number) {
  console.log(`* Connected to ${addr}:${port}`);
}