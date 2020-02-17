
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
planeteers[1]
new_planeteers = planeteers.push("Heart")
puts new_planeteers
# ["Earth", "Wind", "Captain Planet", "Fire", "Water", "Heart", "heart"]


rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers.concat(rangers)
# heroes = ["Earth","Wind", "Captain Planet","Fire","Water","Heart","Red","Blue","Pink","Yellow","Black"]
alp_heroes = heroes.sort

random_heroes = heroes[(rand() * heroes.length).floor]
# random_heroes = heroes.sample(1)
# shuffle method
heroes = ["Earth","Wind", "Captain Planet","Fire","Water","Heart","Red","Blue","Pink","Yellow","Black"]
new_heroes = []
heroes.each do |hero|
if (hero.split('')).first == "B"
new_heroes.push(hero)
  end
end
p new_heroes



ninja_turtle = {
  name: "Michelangelo", 
 weapon: "Nunchuks", 
  radical: "true"
}
ninja_turtle[:age]=10
dele_ninja = ninja_turtle.except!(:radical)
# not working for delete
ninja_turtle[:pizza_topping] = ["cheese", "pepperoni", "peppers"]
ninja_turtle[:pizza_topping][0]

ninja_turtle.keys
# found all keys
ninja_turtle.each do |key|
  puts key
end


 ninja_turtle.each do |pair|
  puts "#{pair[0]}'s is equal to #{pair[1]}"
end

# do end same as {}
# key n value not working properly

require 'pry'
binding.pry


# planeteers.sort
# planeteers.shuffle
# planeteers.sample

# heroes_b = planeteers.select do |hero|
#   # strip like trim in js to trim space before sereach B
#   hero.strip.charc.first == 'B'
# end

# //another way
# words = []
# planeteers.each do |word|
#   if word[0] =='B'
#     words << word
#   end
  
#   ninja_turtle[:age] = 10
#   ninja_turtle.delete(:radical)
#   # if string then "radical" inside delete