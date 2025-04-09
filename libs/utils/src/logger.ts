type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private context: string;

  constructor(context: string) {
    this.context = context;
  }

  private log(level: LogLevel, message: string, ...meta: any[]) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] [${this.context}] ${message}`;
    
    switch (level) {
      case 'debug':
        console.debug(formattedMessage, ...meta);
        break;
      case 'info':
        console.info(formattedMessage, ...meta);
        break;
      case 'warn':
        console.warn(formattedMessage, ...meta);
        break;
      case 'error':
        console.error(formattedMessage, ...meta);
        break;
    }
  }

  debug(message: string, ...meta: any[]) {
    this.log('debug', message, ...meta);
  }

  info(message: string, ...meta: any[]) {
    this.log('info', message, ...meta);
  }

  warn(message: string, ...meta: any[]) {
    this.log('warn', message, ...meta);
  }

  error(message: string, ...meta: any[]) {
    this.log('error', message, ...meta);
  }
}

export const createLogger = (context: string) => {
  return new Logger(context);
};
