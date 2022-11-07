import ILogCell from "../../interfaces/logCell.interface";
import ISortAlgorithm from "../../interfaces/sortAlgorithm.interface";
import { performance } from 'perf_hooks'
import { time } from "console";

export class Context {

    private strategy: ISortAlgorithm
    private logCell: ILogCell = {}

    constructor(strategy: ISortAlgorithm) {
        this.strategy = strategy
    }

    public executeStrategy(list: number[]): number[] {

        const timeStart: number = performance.now()
        const result: number[] = this.strategy.sort(list);
        const timeStop: number = performance.now()

        this.logCell = {
            name: this.strategy.constructor.name,
            result: JSON.stringify(result),
            time: `${(timeStop - timeStart) * 1000} microseconds`
        }

        return result
    }

    public getLogCell() {
        return this.logCell
    }

}