/**
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 *
 * The function repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order. This process is repeated until
 * the array is sorted. The algorithm stops early if no swaps are made during a pass,
 * indicating that the array is already sorted.
 *
 * @param {number[]} arr - The array of numbers to be sorted. The original array is not modified.
 * @returns {number[]} The sorted array in ascending order.
 */
export const bubbleSort = (arr) => {
    const result = [...arr]; // clone the array. Be careful with large arrays, as this can be memory intensive.
    const n = result.length;

    let swapped;
    
    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
    
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Swap if elements are in the wrong order
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }
    
        // If no two elements were swapped, the array is sorted
        if (!swapped) break;
    }
    
    return result;
};



export const bubbleSortInPlace = (arr) => {
    const n = arr.length;

    let swapped;
    
    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
    
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if elements are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
    
        // If no two elements were swapped, the array is sorted
        if (!swapped) break;
    }
    
    return arr;
};



/**
 * Sorts an array of numbers in ascending order using the Shaker Sort algorithm (also known as Cocktail Sort).
 *
 * The function works by repeatedly passing through the list in both directions, swapping adjacent elements
 * if they are in the wrong order. This process continues until no swaps are made during a complete pass,
 * indicating that the array is sorted.
 *
 * @param {number[]} arr - The array of numbers to be sorted. The original array is modified in place.
 * @returns {number[]} The sorted array in ascending order.
 */
export const shakerSortInPlace = (arr) => {
    const n = arr.length;
    let swapped = true;
    let start = 0;
    let end = n - 1;

    while (swapped) {
        swapped = false;

        // Forward pass
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        end--;

        // Backward pass
        for (let i = end; i > start; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true;
            }
        }
        start++;
    }
    return arr;
}; 


/**
    * Sorts an array of numbers in ascending order using the Comb Sort algorithm.
    * Comb Sort is an improvement over Bubble Sort that eliminates small values near the end of the list,
    * which can cause the algorithm to run slowly.
    * The function works by comparing elements that are a certain distance apart (the "gap") and gradually reducing the gap. 
 */
export const combSortInPlace = (arr) => {
    const n = arr.length;
    let gap = n;
    let swapped = true;

    while (gap > 1 || swapped) {
        // Update the gap for the next comb
        gap = Math.max(1, Math.floor(gap / 1.3));
        swapped = false;

        // Compare elements at the current gap
        for (let i = 0; i + gap < n; i++) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                swapped = true;
            }
        }
    }
    return arr;
};