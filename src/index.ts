import { Bot } from '@Bot/bot';
import { config } from '@Config';
import { Logger, utils } from '@Utils';

(async function main() {
  const bot = new Bot({ config, utils });

  if (config.isDev) {
    Logger.setDebugMode(true);
  }

  try {
    await bot.startPolling().then(() => Logger.Info('Bot has been started!'));
  } catch (error: any) {
    Logger.Error('Bot failed to start!').Debug(error.stack).Info('Retrying after 10 seconds...');
    setTimeout(() => main(), 10e3);
  }
})();
