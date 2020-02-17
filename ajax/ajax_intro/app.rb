require "httparty"
# synchronize, blocking
puts "request demo"
# get response from server
result = HTTParty.get('http://omdbapi.com/?t=jaws&apikey=2f6435d9')
# how far to get result, depend on server and network
puts result["Title"]
puts "the end"

