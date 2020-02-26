// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(arr) {
    //    The i-th element array is the price of the stock on day i
    //     ex prices = [5,4,7]
    //     If it's day 2, the stock price today is 4
    //     Can buy one stock and sell one stock at most
    //     Find out when to buy and when to sell
    //     
    //     Buy at day stock is lowest price, sell when it's highest
    // The highest amount is the limiting factor here...
        //     [5,4,7,10,2,3,1]
    //     For this, buy on day 2(index 1) and sell on day 4 (index 3)
    //  10-4 = 6
        
        
        //     [5,4,7,10,2,3,1,9,18,2]
        
        let maxProfit = 0;
        for (var i = 0; i<arr.length;i++){
    //         Compare one element to the rest...
            for (var j = i+1; j<arr.length;j++){
    //             If the element at arr[i] < arr[j], subtract them
                if(arr[i]<arr[j]){
    // If the result of this subtraction is greater than maxProfit, reset maxProfit to this result
                    if( (arr[j]-arr[i]) > maxProfit){
                        maxProfit = (arr[j]-arr[i]);
                    }
                }
            }
        }
            
            return maxProfit;    
        
    };
    
    //ex.      [5,4,7,10,2,3,1,9,18,2]
    //  i = 0
    // 5 is compared to all numbers after it, running into numbers greater than it: 7,10,9,18
    // maxProfit here will be 13 since the biggest difference is between 5 and 18
    // i = 1
    // 4 is compared to all numbers after it, running into numbers greater than it: 5,7,10,9,18
    // maxProfit here will be 14 since the biggest difference is between 4 and 18
    // and so on until maxProfit is finally 17
    
    // By checking this way, we ensure to only make calculations when necessary
    // AND we don't have to do calculations we already did before (ex. we already did 18-5 when arr[i] = 5, no need to do 18-5 again when arr[i] = 18)