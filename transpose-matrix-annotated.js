function transpose(arr){
	let transposed = []
//     All rows should have the same length in the grid, so just grab the length of the first row
    let subarrLength = arr[0].length
    
//  Make a row whose length should be the same as original rows 
//  For the transposed grid, each row in it will be arr.length long
//  because we have to go through each row once and take something from it to put in the new row 
// ex. if arr = [1,2][3,4][5,6] first row will be [1,3,5]      
	for (var i=0;i<subarrLength;i++){
// 		initialize row, which will be product of transposing subarr 
        let row = []
		for(var j=0;j<arr.length;j++){
//          Select the row in the array with j, j++ to next row later
//          Take the same index from each row (i) and add it to row var. 
            row.push(arr[j][i])
        }
		transposed.push(row)
    }
	return transposed
}

// ex. [[1,2,3],[4,5,6],[7,8,9]]
// i = 0, slowly increases til 3
// j = 0, push arr[0][0] to row
// j =1, push arr[1][0] to row
// j = 2, push arr [2][0] to row
// j is 3 -> 3 is NOT <3, exit j loop
// push finished row to transposed
// i++
// i = 1, continue process