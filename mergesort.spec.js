// return a (sorted) array
// sort & merge part works
// handles empty array:  mergeSort([]) ==> []
// handles one-elem array:  mergeSort([42]) ==> [42]
// called recursively for anything longer than 1 elem

// Splitting:
// [4, 27, 3, 16, 7]
// [[4, 27], [3, 16, 7]]
// [[[4], [27]], [[3, 16], [7]]
// [[[[4]], [[[27]]], [[[3]]], [[[16]]], [[[7]]]]

// Merging & Sorting:
// [4, 27]    [3, 16]    [7]
// [3, 4, 16, 27]   [7]
// [3, 4, 7, 16, 27]

