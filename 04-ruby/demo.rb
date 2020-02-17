name = %w| justin batya dave gloria camilla sri phill pouyan nick gordon|
name.shuffle  #random

name.shuffle.each_slice(5).to_a #divide 2 teams
name.rotate()
name.rotate(3) # rotate 3

require 'pry'
binding.pry