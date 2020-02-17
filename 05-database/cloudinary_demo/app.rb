require 'cloudinary'
require 'sinatra'

# auth = {
#   cloud_name: "dwqpcgpoh",
#   api_key:    "569897335542267",
#   api_secret: "Zd5AQ3ZwbX5Dg67Sru4I47NRZDs"
# }
# p Cloudinary::Uploader.upload("test.png", auth)
# in terminal ruby app.rb , it shows details

get '/' do
  erb :home
end

post '/signup' do
  auth = {
    cloud_name: "dwqpcgpoh",
    api_key:    "569897335542267",
    api_secret: "Zd5AQ3ZwbX5Dg67Sru4I47NRZDs"
  }
  
p Cloudinary::Uploader.upload(params[:avatar][:tempfile], auth)
erb :home
# return "uploaded"
end