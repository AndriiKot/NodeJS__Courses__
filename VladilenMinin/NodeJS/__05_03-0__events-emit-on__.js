const EventEmitter = require("node:events");

class Logger extends EventEmitter {
  constructor() {
    super();
    this.count = 0;
  }
  log(message) {
    this.count++;
    this.emit("message", `${message}: ${new Date()} count: ${this.count}`);
  }
}

const logger = new Logger();

logger.on("message", (data) => console.log(data));

logger.log("Hi Andrii!");
logger.log("Hi Oxi!!!");
logger.log("Hello Petro!");
