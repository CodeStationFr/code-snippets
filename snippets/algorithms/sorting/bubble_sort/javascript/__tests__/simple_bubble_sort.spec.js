import { describe, it, expect } from 'vitest';
import { bubbleSort, bubbleSortInPlace } from '../simple_bubble_sort.js';

describe('bubbleSort', () => {
    it('should sort an array of positive numbers', () => {
        expect(bubbleSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it('should sort an array with negative numbers', () => {
        expect(bubbleSort([3, -2, -1, 0, 2, 1])).toEqual([-2, -1, 0, 1, 2, 3]);
    });

    it('should return an empty array when input is empty', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    it('should return the same array if already sorted', () => {
        expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should not modify the original array', () => {
        const arr = [3, 2, 1];
        bubbleSort(arr);
        expect(arr).toEqual([3, 2, 1]);
    });

    it('should handle arrays with one element', () => {
        expect(bubbleSort([42])).toEqual([42]);
    });

    it('should sort an array of strings lexicographically', () => {
        expect(bubbleSort(['banana', 'apple', 'pear'])).toEqual(['apple', 'banana', 'pear']);
    });

    it('should sort an array with mixed numbers and strings', () => {
        expect(bubbleSort([2, '10', 1])).toEqual([1, 2, '10']); // selon le comportement JS
    });

    it('should not crash with objects but result may be unexpected', () => {
        expect(bubbleSort([{}, 1, 'a'])).toBeDefined(); // résultat imprévisible
    });
});


describe('bubbleSortInPlace', () => {
    it('should sort an array of positive numbers in place', () => {
        const arr = [5, 2, 9, 1, 5, 6];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it('should sort an array with negative numbers in place', () => {
        const arr = [3, -2, -1, 0, 2, 1];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([-2, -1, 0, 1, 2, 3]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([]);
    });

    it('should not change an already sorted array', () => {
        const arr = [1, 2, 3, 4];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should handle arrays with one element', () => {
        const arr = [42];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([42]);
    });

    it('should sort an array of strings lexicographically in place', () => {
        const arr = ['banana', 'apple', 'pear'];
        bubbleSortInPlace(arr);
        expect(arr).toEqual(['apple', 'banana', 'pear']);
    });

    it('should sort an array with mixed numbers and strings in place', () => {
        const arr = [2, '10', 1];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([1, 2, '10']); // selon le comportement JS
    });

    it('should not crash with objects but result may be unexpected', () => {
        const arr = [{}, 1, 'a'];
        bubbleSortInPlace(arr);
        expect(arr).toBeDefined(); // résultat imprévisible
    });
});