import getTheLowestItemPosition from "../tools/getTheLowestItemPosition.tool";

// This sort works changing the current position to the next lowest item of the array
export default function selectionSort(list: number[]): void {

    for (let index = 0; index < list.length; index++) {

        // Get the lowest item position
        let lowestItemIndex: number = getTheLowestItemPosition(list, index);
        
        // --- init the changing rountine ---

        // aux receive the value of the current item 
        let aux: number = list[index];

        // the current item receive the lowest value
        list[index] = list[lowestItemIndex];

        // the item with the lowest value receive 
        // the value from the current item
        list[lowestItemIndex] = aux;

    }

}