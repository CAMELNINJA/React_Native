import {makeAutoObservable} from "mobx";
import timer from "../modules/Timer/Timer";

class Timer {
    secondsPassed = 0;
    // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
    constructor() {
        makeAutoObservable(this);
    }

    startIncrease() {
        console.log(`timer work`);
        this.secondsPassed += 1;
    }

    stopIncrease() {
        console.log(`timer is dont stoped is log`);

    }

    clearTimer() {
        console.log(`timer cleared`);
        this.secondsPassed = 0;
    }
}

export default new Timer()