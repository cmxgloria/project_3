# example = 'madam'
# if example.reverse() == example
#   puts ('yes')
# else
#   puts ('no')
# end

# similar to replace() in JS
example = 'racing care'
# example.gsub(/match/, 'replacement')
if example.gsub(' ', '').reverse() == example.gsub(' ', '')
  puts ('yes')
else
  puts ('no')
end