// It will return the lowest Item position from the list
export default function getTheLowestItemPosition(list: number[], initialIndex: number = 0): number {

    let lowestItemIndex: number = initialIndex

    for (let index = initialIndex; index < list.length; index++) {

        if (list[index] < list[lowestItemIndex]) {

            lowestItemIndex = index

        }

    }

    return lowestItemIndex;

}