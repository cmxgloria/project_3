     
require 'sinatra'

get '/' do

  # from the form retrieve the movie title
  file = File.new('history.txt')
  file.puts # movie title
  # file.close
  
  erb :index
end





