
print "Enter the current temperature "
current_temp = gets.chomp.to_i
print "Enter the Unit "   
temp_unit = ['F','C','K']
input_unit = gets.chomp.upcase
#while input_str != "q" do
until temp_unit.include?input_unit do
    puts "Wrong unit, Try Using K for kelvin, C for celsius and F for farenheit"
    input_unit = gets.chomp   
end
if input_unit == 'F'
    puts "The temperature entered is #{current_temp} and unit is #{input_unit}"
    puts "The temperature is " + ((current_temp + 459.67) / 1.8).round(2).to_s + " K"
    puts "The temperature is " +  (( current_temp - 32) / 1.8).round(2).to_s + " C"
elsif input_unit == 'C'
    puts "The temperature entered is #{current_temp} and unit is #{input_unit}"
    puts "The temperature is " + (current_temp + 273.15).round(2).to_s + " K"
    puts "The temperature is " +  (( current_temp * 1.8) + 32).round(2).to_s + " F"
elsif input_unit =='K'
    puts "The temperature entered is #{current_temp} and unit is #{input_unit}"
    puts "The temperature is " + ((current_temp * 1.8) - 459.67).round(2).to_s + " K"
    puts "The temperature is " +  (current_temp - 273.15).round(2).to_s + " C"
end