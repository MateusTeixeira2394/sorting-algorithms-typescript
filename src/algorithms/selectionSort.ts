import changeValues from "../tools/changeValues.tool";
import getTheLowestItemPosition from "../tools/getTheLowestItemPosition.tool";

// This sort works changing the current position to the next lowest item of the array
export default function selectionSort(list: number[]): void {

    for (let index = 0; index < list.length; index++) {

        // Get the lowest item position
        let lowestItemIndex: number = getTheLowestItemPosition(list, index);
        
        // Change value between the current position with the lowest value position
        changeValues(list, index, lowestItemIndex);

    }

}