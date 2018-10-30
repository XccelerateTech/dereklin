
const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }
    countDown(seconds) {
        let time = seconds;
        const interval = setInterval(emitInterval, 1000);
        const that = this;
        function emitInterval() {
            if (time == 0) {
                clearInterval(interval);
            }
            that.emit('tick', time);
            time --;
        }
    }
}
module.exports = Timer;
