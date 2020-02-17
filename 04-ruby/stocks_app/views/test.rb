# https://github.com/tyrauber/stock_quote
# gem install stock_quote, after register # API Token: pk_d3343d83c8ae4936877d951e634b4c8f 


require "stock_quote" #3rd party to use
# require "pry"
StockQuote::Stock.new(api_key: "pk_d3343d83c8ae4936877d951e634b4c8f")
stock = StockQuote:: Stock.quote("aapl")

# p stock.latest_price    if like normal way


# if want to exit press Q
# follow the steps one by one and find out all all price 
# pry(main)> stock.class
# => StockQuote::Stock
# [6] pry(main)> stock.company_name
# => "Apple, Inc."
# pry(main)> stock.latest_price
# => 311.34