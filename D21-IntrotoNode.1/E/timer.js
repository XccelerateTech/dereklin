const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        let time ;
        const that = this;
        let ;
    }
    emitInterval() {
        if (time == 0) {
            clearInterval(interval);
        }
        this.that.emit('tick', time);
        time --;
    }
    start(second){
        this.time = second;
        interval = setInterval(this.emitInterval(), 1000);
    }
    pause(){
        this.clearInterval();
    }
    stop(){

    }
}
module.exports = Timer;
