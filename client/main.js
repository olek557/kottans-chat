import {Username} from './modules/username.js';
import {Socket} from './modules/socket.js';
import {Messages} from './modules/messages.js';

document.addEventListener('DOMContentLoaded', () => {
  const socket = new Socket();
  const username = new Username('#username');
  const messages = new Messages('#messages');

  socket.onSetUsername(name => {
      username.render(name);
      messages.renderSystemMessage(`${name} assigned to you`);
  });
  socket.onUserJoined(name => {
    messages.renderSystemMessage(`${name} joined`);

  });
});
