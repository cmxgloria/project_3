require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require "stock_quote"
StockQuote::Stock.new(api_key: "pk_d3343d83c8ae4936877d951e634b4c8f")
#hidden route for static files in public

# our own custom routes

get '/' do
  erb :home #by default look for template in views
end
# binding.pry

get '/about' do
  erb :about 
  # erb :about ,:layout: false if dont need false, all information in layout will gone
end

# get '/quote' do
#   # stock = StockQuote::Stock.quote("aapl")
#   stock = StockQuote::Stock.quote(params[:ticker]) #@ticker = param[:ticker]
#   return stock.latest_price.to_s
# end

# http://localhost:4567/quote?ticker=aapl  311.34
# http://localhost:4567/quote?ticker=msft  163.18
# http://localhost:4567/quote?ticker=googl  1439.2
# http://localhost:4567/quote?ticker=tsla    518.5


# use another way to create quote.erb n add some methods

get '/quote' do
  stock = StockQuote::Stock.quote(params[:stock_name]) #@ticker = param[:ticker]
  @name = stock.company_name.to_s
  @price = stock.latest_price.to_s
  erb :quote  #this is return , but stay last, nothing below erb,otherwise those "gkghkshf" will return instead of erb :quote
end

# get '/hello' do
#   "hello pokerface"
#   "hello #{params[:name]}"
# end
# use this one to delete ?, show http://localhost:4567/hello/dt
get '/hello/:name' do #: dynamic
  "hello #{ params[:name]}"
end