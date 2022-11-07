import InsertionSort from './algorithms/insertionSort';
import MergeSort from './algorithms/mergeSort';
import SelectionSort from './algorithms/selectionSort';
import ILogCell from './interfaces/logCell.interface';
import { Context } from './strategies/sortAlgorithmStrategy';

const list: number[] = [15, 25, 30, 45, 50, 20, 22, 28, 33, 35, 40]
const logTable: ILogCell[] = []

const mergeSort: Context = new Context(new MergeSort());
const insertionSort: Context = new Context(new InsertionSort());
const selectionSort: Context = new Context(new SelectionSort());

mergeSort.executeStrategy(list);
insertionSort.executeStrategy(list);
selectionSort.executeStrategy(list);

logTable.push(insertionSort.getLogCell());
logTable.push(selectionSort.getLogCell());
logTable.push(mergeSort.getLogCell());


console.table(logTable);
