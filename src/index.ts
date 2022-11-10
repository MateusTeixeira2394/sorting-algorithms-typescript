import InsertionSort from './algorithms/insertionSort';
import MergeSort from './algorithms/mergeSort';
import QuickSort from './algorithms/quickSort';
import SelectionSort from './algorithms/selectionSort';
import ILogCell from './interfaces/logCell.interface';
import { Context } from './strategies/sortAlgorithmStrategy';

const unsortedList: number[] = [15, 25, 30, 45, 50, 20, 22, 28, 33, 35, 40, 90, 29, 44, 67, 50, 26, 66, 35, 43, 58, 53, 33, 37, 18, 7, 69, 89, 21, 94]
const logTable: ILogCell[] = []

const mergeSort: Context = new Context(new MergeSort());
const insertionSort: Context = new Context(new InsertionSort());
const selectionSort: Context = new Context(new SelectionSort());
const quickSort: Context = new Context(new QuickSort());

insertionSort.executeStrategy([...unsortedList]);
selectionSort.executeStrategy([...unsortedList]);
mergeSort.executeStrategy([...unsortedList]);
quickSort.executeStrategy([...unsortedList]);

logTable.push({
    name: 'Unsorted List',
    result: JSON.stringify(unsortedList),
    time: '0 microseconds'
})
logTable.push(insertionSort.getLogCell());
logTable.push(selectionSort.getLogCell());
logTable.push(mergeSort.getLogCell());
logTable.push(quickSort.getLogCell());


console.table(logTable);
