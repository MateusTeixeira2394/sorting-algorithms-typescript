import changeValues from "../tools/changeValues.tool";
import getTheLowestItemPosition from "../tools/getTheLowestItemPosition.tool";

// The algorithm works finding the lowest value of the list on each interaction 
// and changing its position with the current item
export default function selectionSort(list: number[]): void {

    for (let index = 0; index < list.length; index++) {

        // Get the lowest item position
        let lowestItemIndex: number = getTheLowestItemPosition(list, index);
        
        // Change value between the current position with the lowest value position
        changeValues(list, index, lowestItemIndex);

    }

}