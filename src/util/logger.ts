/* eslint-disable no-console */
import { colors } from './consts';

/**
 * Enum for logger logLevel.
 * @readonly
 * @enum {string}
 */
export const enum logLevel {
  Debug = 'Debug', // only on dev env
  Info = 'Info', // get to stdout
  Warn = 'Warn', // get to stderr
  Error = 'Error' // get to stderr
}

/**
 * custom Logger
 *
 */
class Logger {
  private componentName: string;

  /**
   * create a new Logger
   * @param {string} componentName Name of component
   */
  public constructor(componentName: string) {
    this.componentName = componentName;
  }

  /**
   * private internal log function
   */
  private static log(level: logLevel, componentName: string, message: any): void {
    const time = new Date();
    let color = colors.FgWhite;
    switch (level) {
      case logLevel.Debug:
        color = colors.FgCyan;
        break;
      case logLevel.Info:
        color = colors.FgGreen;
        break;
      case logLevel.Warn:
        color = colors.FgYellow;
        break;
      case logLevel.Error:
        color = colors.FgRed;
        break;
      default:
        color = colors.FgWhite;
        break;
    }
    console.log(`${time.toISOString()} - ${color}[${level}][${componentName}]${message}${colors.Reset}`);
  }

  public static raw(message: any): void {
    if (typeof message === 'object') {
      console.log(JSON.stringify(message));
    } else {
      console.log(message);
    }
  }

  public info(message: any): void {
    Logger.log(logLevel.Info, this.componentName, message);
  }

  public error(message: any): void {
    Logger.log(logLevel.Error, this.componentName, message);
  }

  public debug(message: any): void {
    Logger.log(logLevel.Debug, this.componentName, message);
  }

  public warn(message: any): void {
    Logger.log(logLevel.Warn, this.componentName, message);
  }
}

const getLogger = (componentName: string): Logger => new Logger(componentName);

export default getLogger;
