import { Color, Logger } from '@starkow/logger';
import { Telegram } from 'puregram';

import { config } from 'config';

const telegram = new Telegram({ token: config.BOT_TOKEN });

telegram.updates.on('message', (context, next) => {
  context.send('Hello world!');

  return next();
});

telegram.updates
  .startPolling()
  .then(() => Logger.create('Bot', Color.Blue)('has been started!'))
  .catch(Logger.error);
