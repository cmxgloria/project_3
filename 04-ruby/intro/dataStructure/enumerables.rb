a collection
banana
kiwi
mango
["title", "sharknado"]
["year", 2000]
["stars", ["sharks", "tornadoes"]]
title
key title and the value sharknado
year
key year and the value 2000
stars
key stars and the value ["sharks", "tornadoes"]
title
year
stars
10
fruits = ['banana','kiwi','mango']
fruits.each do |fruit|
  puts fruit
end

movie = {
  "title" => "sharknado",
  "year" => 2000,
  "stars" => ["sharks", "tornadoes"]
}

movie.each do |key_val_pair|
    p key_val_pair
end

movie.each do |pair|
  puts pair[0]
  # puts pair.first, both way to print all just key
  puts "key #{pair[0]} and the value #{pair[1]}"
end


movie.each do |key, val|
  puts key
end

 numbers = [1,2,3,4]
 sum = 0
 numbers.each do |num|
  sum +=num
 end
 puts sum
 another way easier , puts.sum

p can see the original data type, similar puts

 numbers = [1,2,3,4]
doubled = []
 numbers.each do |num|
  new_num = num * 2
  doubled.push(new_num)
 end 
 p doubled

map can use for any collection, not only array like js

numbers = [1,2,3,4]

doubled = numbers.map do |num|
  num * 2
 end 
 p doubled

 more_numbers = [3,5,6,12,8,10]
 new_arr = []
 more_numbers.each do |num|
  if num.even?
    new_arr << num
 end
end
 puts new_arr


 map and select give the copy  and new array, and map(transfer one to one inside array) for one to one map, that is different from select

 more_numbers = [3,5,6,12,8,10]
 new_arr = more_numbers.select do |num|
  if 
    num.even?
end
 p new_arr