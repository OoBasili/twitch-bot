import { Options, ChatUserstate, Client } from 'tmi.js';

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

function onMessageHandler(target: string, context: ChatUserstate, msg: string, self: boolean): void {
  if (self)
    return;

  if (context['user-id'] === '???????') {
    client.say(target, `@${context['display-name']} привет`);
  }
}

function onConnectedHandler(addr: string, port: number): void {
  console.log(`* Connected to ${addr}:${port}`);
}

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();