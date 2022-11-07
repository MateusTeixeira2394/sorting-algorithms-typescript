import ISortAlgorithm from "../interfaces/sortAlgorithm.interface";

// This method merge two sorted list and return the result
// Beware: This method only merge the sorted lists. If them are not
export default class MergeSort implements ISortAlgorithm {

    sort(list: number[]): number[] {

        // If the list has only one item, the method will return it. 
        // Otherwise, the method will slice the list in two parts 
        // and call the mergeSort again in each part
        if (list.length > 1) {

            // Find the middle index of the list to slice it
            // in two parts
            const middleIndex: number = Math.floor(list.length / 2);

            // The first sliced part will call the merge Sort again in 
            // a recursive way until the list1 receive the first 
            // part ordered
            let list1: number[] = this.sort(list.slice(0, middleIndex));

            // The same thing is did to the list2
            let list2: number[] = this.sort(list.slice(middleIndex));

            // It is used the mergeSortList algorithm to merge and sort
            // the list1 and list2. Finally, the method returns the
            // result
            return this.mergeSortedList(list1, list2);


        } else {

            return list

        }

    }

    // ordered, the method will only merge them
    private mergeSortedList(list1: number[], list2: number[]): number[] {

        let index1: number = 0;
        let index2: number = 0;
        let finalList: number[] = []

        while (
            index1 < list1.length &&
            index2 < list2.length
        ) {

            if (list1[index1] < list2[index2]) {
                finalList.push(list1[index1]);
                index1++;
            } else {
                finalList.push(list2[index2])
                index2++;
            }

        }

        return finalList.concat(index1 < list1.length ? list1.slice(index1) : list2.slice(index2));

    }

}
