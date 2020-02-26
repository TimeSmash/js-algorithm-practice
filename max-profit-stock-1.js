// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(arr) {
    let maxProfit = 0;
    for (var i = 0; i<arr.length;i++){
        for (var j = i+1; j<arr.length;j++){
            if(arr[i]<arr[j]){
                if( (arr[j]-arr[i]) > maxProfit){
                    maxProfit = (arr[j]-arr[i]);
                }
            }
        }
    }
        
        return maxProfit;    
};
    
    