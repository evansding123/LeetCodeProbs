/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    //the number of ppl you need to fly is cost.length
    //[[10,20], [40,400], [500, 50], [20,30]]
    //sort the costs array according to the tuple with the biggest
    //iterate through first half of cost array, add the aCost to total
    //second half, bcost
    
    
    let totalCost = 0;
    
    costs.sort((a, b) => {
        return (
            (a[0] - a[1]) - (b[0] - b[1])
        )
    })
    
    const middle = costs.length / 2;
    
    for(let i = 0; i < costs.length; i++) {
        if(i < middle) {
            totalCost += costs[i][0];
        } else {
            totalCost += costs[i][1];
        }
    }
    
    return totalCost;

};