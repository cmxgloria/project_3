objects liternals in js
hashes in ruby
dictionaries in python
associtive array in php

original
[1] pry(main)> movie["title"]---(inside have to be string or number extrally from the key, not variable)
=> "sharknado"
movie = {
  "title" => "sharknado",
  "year" => 2000,
  "stars" => ["sharks", "tornadoes"]
}

new syntax -json
[3] pry(main)> new_movie[:review][:author]
=> "dt"

new_movie = {
  title: "sharknado",
  year: 2000,
  stars: ["sharks", "tornadoes"],
  review: {
    score: 5,
    author: "dt"
  }
}

[1] pry(main)> new_movie
=> {:title=>"sharknado", :year=>2000, :stars=>["sharks", "tornadoes"]}


song.class ----Hash
object_id
song = ['zero','one','two']
song = {
  0 => 'zero'
  1 => 'one',
  2 => 'two'
}
require 'pry'
binding.pry

if lot of same title, :title for all same key word, object_id will be same; if just "title", the object_id will be different

new data type - symbol for no need to copy

 movies = [
   { :title => "sharknado"},
   { :title => "jaw1"},
   { :title => "jaw2"},
   { :title => "jaw3"}
 ]
