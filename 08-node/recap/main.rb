     
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/about' do
 # save in html by default the server to tell the clinet the content type is html
 erb :about
end




get '/api/about' do 
  # serve json instead
  content_type 'application/json'
  # format is nice json
  {color: 'black', likes: 'coding'}.to_json
end




# ruby main.rb to run localhost
# node server.js to run localhost; need to run server after request then show html on web app