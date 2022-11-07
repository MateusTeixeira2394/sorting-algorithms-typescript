import ISortAlgorithm from "../interfaces/sortAlgorithm.interface";
import changeValues from "../tools/changeValues.tool";



// This algorithm works as follows: On each interaction 
// the algorithm will rebalance the previous items of the current position
export default class InsertionSort implements ISortAlgorithm {

    sort(list: number[]): number[] {

        let resultList: number[] = [...list]

        for (let index = 0; index < resultList.length; index++) {

            // It will go through any previus items and it will
            // change the position if the current item is smaller
            // than the previus
            while (
                index > 0 &&
                resultList[index] < resultList[index - 1]
            ) {

                changeValues(resultList, index, index - 1);

                index--;

            }

        }

        return resultList
    }

}