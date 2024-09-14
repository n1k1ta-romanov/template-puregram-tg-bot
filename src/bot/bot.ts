import { Telegram } from 'puregram';

import { TConfig } from '@Config';
import { type Utils } from '@Utils';

export interface IBotOptions<Config extends TConfig = TConfig> {
  config: Config;
  utils: Utils;
}

export class Bot<Config extends TConfig = TConfig> {
  /**
   * Bot configuration
   */
  public config: Config;

  /**
   * Bot utils
   */
  public utils: Utils;

  /**
   * Telegram
   */
  public telegram: Telegram;

  /**
   * Constructor
   */
  public constructor(public options: IBotOptions<Config>) {
    this.config = options.config;
    this.utils = options.utils;

    this.telegram = new Telegram({ token: this.config.BOT_TOKEN });

    this.telegram.updates.on('message', async (context, next) => {
      await context.send('Hello, World!');

      return next();
    });
  }

  /**
   * Starts listening updates
   */
  public startPolling() {
    return this.telegram.updates.startPolling();
  }

  /**
   * Stops listening updates
   */
  public stopPolling() {
    return this.telegram.updates.stopPolling();
  }

  /**
   * Returns custom tag
   */
  public get [Symbol.toStringTag](): string {
    return this.constructor.name;
  }
}
