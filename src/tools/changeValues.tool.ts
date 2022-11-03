export default function changeValues(list: number[], position1: number, position2: number): void {

    // The list can be changed only if it has at least 2 elements
    if (list.length > 1) {

        // aux receive the value of the position 1 of the list
        let aux: number = list[position1];

        // position 1 of the list receive the value of the position 2
        list[position1] = list[position2];

        // position 2 of the list receive the value of the aux
        list[position2] = aux;

    }

}