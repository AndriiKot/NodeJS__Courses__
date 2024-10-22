const EventEmitter = require("node:events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", `${message}: ${new Date()}`);
  }
}

const logger = new Logger();

logger.on("message", (data) => console.log(data));

logger.log("Hi Andrii!");
logger.log("Hi Oxi!!!");
logger.log("Hello Petro!");

