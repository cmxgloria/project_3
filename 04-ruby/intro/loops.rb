# even
num  = 1
while num <=10
  if num % 2 == 0
    puts num
  end
  num +=1
end


# num.even? predicate method
# questions means the method returns a boolen

# guess name
secret = 7
print ("guess the num")
guess = gets().chomp().to_i
# requrie 'pry'
# binding.pry
while guess != secret
  puts ('try again')
  guess = gets().chomp().to_i
end
puts ("not bad")

# make it simplify
secret = 7
print "guess the num"
guess = gets.chomp.to_i
while guess != secret
  puts 'try again'
  guess = gets.chomp.to_i
end
puts "not bad"
