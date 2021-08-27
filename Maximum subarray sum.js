var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

var maxSequence = function(arr){
  if(!arr.length) return 0
  var maxint = Math.pow(2, 53)

    var max_so_far = -maxint - 1

    var max_ending_here = 0

      

    for (var i = 0; i < arr.length; i++)

    {

        max_ending_here = max_ending_here + arr[i]

        if (max_so_far < max_ending_here)

            max_so_far = max_ending_here
 

        if (max_ending_here < 0)

            max_ending_here = 0 

    }

    return max_so_far>-1?max_so_far:0
}