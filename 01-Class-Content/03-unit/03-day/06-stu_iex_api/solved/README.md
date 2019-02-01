# iexTrading API Exploration

## Answers

* How would I query the iexTrading API to get all of the stock information related to Apple Inc.?

`https://api.iextrading.com/1.0/stock/aapl/quote`

* How would I query the iexTrading API to get all of the stock information related to Microsoft Inc.?

`https://api.iextrading.com/1.0/stock/msft/quote`

* CHALLENGE: Using the documentation, figure out how you would retrieve the prices of multiple stocks in one.

`https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft&types=quote&range=1m`