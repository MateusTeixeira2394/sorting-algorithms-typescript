import selectionSort from './algorithms/selectionSort';

const list1: number[] = [25, 15, 30]
const list2: number[] = [50, 45, 20]

const list: number[] = [...list1, ...list2]

selectionSort(list);

console.log(list);

