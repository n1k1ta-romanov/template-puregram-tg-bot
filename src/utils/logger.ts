import chalk, { Chalk } from 'chalk';
import moment from 'moment';

export class Logger {
  private static debugMode: boolean = false;

  /**
   * Prints the colorful message in console with current time and prefix
   */
  private static log(color: Chalk, type: string, ...message: any[]): typeof Logger {
    const time = moment().format('HH:mm:ss');

    // eslint-disable-next-line no-console
    console.log(`[${chalk.bold.white(time)}][${color.bold(type)}]`, color(message));

    return this;
  }

  /**
   * Sets the debug mode
   */
  public static setDebugMode(mode: boolean) {
    Logger.debugMode = mode;
  }

  /**
   * Logs the default log
   */
  public static Log(...message: any[]): typeof Logger {
    // eslint-disable-next-line no-console
    console.log(message);

    return this;
  }

  /**
   * Logs the info message
   */
  public static Info(...message: any[]): typeof Logger {
    return this.log(chalk.cyan, 'INFO', message);
  }

  /**
   * Logs the default message
   */
  public static Message(...message: any[]): typeof Logger {
    return this.log(chalk.blueBright, 'MESSAGE', message);
  }

  /**
   * Logs the warn message
   */
  public static Warn(...message: any[]): typeof Logger {
    return this.log(chalk.yellow, 'WARN', message);
  }

  /**
   * Logs the error message
   */
  public static Error(...message: any[]): typeof Logger {
    return this.log(chalk.red, 'ERROR', message);
  }

  /**
   * Logs the debug message
   */
  public static Debug(...message: any[]): typeof Logger {
    return this.debugMode ? this.log(chalk.gray, 'DEBUG', message) : this;
  }
}
