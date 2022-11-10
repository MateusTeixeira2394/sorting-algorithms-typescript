import ISortAlgorithm from "../interfaces/sortAlgorithm.interface";
import changeValues from "../tools/changeValues.tool";

// this sort works, choosing the pivot which is the middle of the list and moving the elements with
// value lower than pivot to the left and the higher to the right. After that, call the same method 
// again in a recursive way to the list formed to the left and the right of the pivot element. Thus, 
// doing this until the list is ordered.
export default class QuickSort implements ISortAlgorithm {

    public sort(list: number[], start: number = 0, end: number = list.length - 1): number[] {

        let currentStart: number = start;
        let currentEnd: number = end;

        // Choose the pivot element on the middle position of the list
        let pivot: number = list[Math.floor((start + end) / 2)]

        // Balance the list, moving all the elements with lower value than the pivot
        // to the left and higher to the right
        while (currentStart <= currentEnd) {

            while (list[currentStart] < pivot) {
                currentStart++;
            }

            while (list[currentEnd] > pivot) {
                currentEnd--;
            }

            if (currentStart <= currentEnd) {
                changeValues(list, currentStart, currentEnd);
                currentStart++;
                currentEnd--;
            }

        }

        // Call the same method to the list formed to the left of the pivot
        if (start < currentEnd) {
            this.sort(list, start, currentEnd);
        }

        // Call the same method to the list formed to the right of the pivot
        if (currentStart < end) {
            this.sort(list, currentStart, end);
        }

        return list
    }

}