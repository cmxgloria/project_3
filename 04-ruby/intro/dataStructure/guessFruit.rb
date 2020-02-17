fruits = ['orange','kiwi','mango','banana','kiwi']
secret_fruit =  fruits.sample
puts "it starts with #{secret_fruit[0]} and it ends with #{secret_fruit[-1]} and it is #{secret_fruit.length} letters long. Guess the fruit"
input_str = gets.chomp   
while secret_fruit != input_str
        puts "Wrong!!!, Try again"
        input_str = gets.chomp   
end
puts "You guessed it right"