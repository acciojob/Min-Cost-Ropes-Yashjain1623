function mincost(arr) {
    // Edge case: If there's only one rope, no cost to merge
    if (arr.length <= 1) {
        return 0;
    }
    
    let minHeap = arr.slice(); // Create a copy of array (heap)
    let totalCost = 0;
    
    // Convert array to a min-heap (sort it in ascending order)
    minHeap.sort((a, b) => a - b);
    
    // Perform greedy merging
    while (minHeap.length > 1) {
        // Extract two smallest ropes
        let first = minHeap.shift();
        let second = minHeap.shift();
        
        // Calculate cost to merge
        let cost = first + second;
        totalCost += cost;
        
        // Push the merged rope length back into the heap
        minHeap.push(cost);
        // Re-sort the heap (although not efficient in terms of heap operations, this works for this approach)
        minHeap.sort((a, b) => a - b);
    }
    
    return totalCost;
}
  
}

module.exports=mincost;
