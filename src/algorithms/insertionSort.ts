import ISortAlgorithm from "../interfaces/sortAlgorithm.interface";
import changeValues from "../tools/changeValues.tool";



// This algorithm works as follows: On each interaction 
// the algorithm will rebalance the previous items of the current position
export default class InsertionSort implements ISortAlgorithm {

    sort(list: number[]): number[] {

        for (let index = 0; index < list.length; index++) {

            // It will go through any previus items and it will
            // change the position if the current item is smaller
            // than the previus
            while (
                index > 0 &&
                list[index] < list[index - 1]
            ) {

                changeValues(list, index, index - 1);

                index--;

            }

        }

        return list
    }

}