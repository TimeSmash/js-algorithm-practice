/**
 * @param {number[][]} A
 * @return {number[][]}
 */

function transpose(arr){
	let transposed = []
    let subarrLength = arr[0].length
    
	for (var i=0;i<subarrLength;i++){
        let row = []
		for(var j=0;j<arr.length;j++){
            row.push(arr[j][i])
        }
		transposed.push(row)
    }
	return transposed
}
