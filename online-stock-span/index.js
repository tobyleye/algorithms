
var StockSpanner = function() {
    this.stockPrices = [] 
 };
 
 /** 
  * @param {number} price
  * @return {number}
  */
  StockSpanner.prototype.next = function(price) {
      let stockPrices = this.stockPrices
      stockPrices.push(price)
      let maxSpan = 0
      for (let i=stockPrices.length-1; i>=0; i--) {
          let currentPrice = stockPrices[i]
          if (currentPrice<= price) {
              maxSpan += 1
          } else {
              if (maxSpan > 0) {
                  break
              }
          }
          
      }
      return maxSpan
  };
 
 /** 
  * Your StockSpanner object will be instantiated and called as such:
  * var obj = new StockSpanner()
  * var param_1 = obj.next(price)
  */

 let obj = new StockSpanner()
 obj.next(32)
 obj.next(82)
 obj.next(73)
 obj.next(99)
 obj.next(91)

