
print "Enter the file name "
file_name = gets.chomp
loc_array = IO.read(file_name)
puts "The lenght of the file is #{loc_array.split.length} lines"
  