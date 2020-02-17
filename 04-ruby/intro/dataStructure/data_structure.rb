# 1: require 'pry'
# 2: fruits = ['banana', 'apple','grape']
# => 3: binding.pry

# [1] pry(main)> fruits
# => ["banana", "apple", "grape"]
# [2] pry(main)> fruits.length
# => 3
# [3] pry(main)> fruits[fruits.length-1]
# => "grape"
# [4] pry(main)> fruits.last
# => "grape"
# [5] pry(main)> fruits[5]
# => nil
# [6] pry(main)> fruits[-1]
# => "grape"
# [7] pry(main)> fruits.join(' ')
# => "banana apple grape"
# [8] pry(main)> fruits.join(' ').upcase
# => "BANANA APPLE GRAPE"
# [9] pry(main)> ls
# self.methods: inspect  to_s
# locals: _  __  _dir_  _ex_  _file_  _in_  _out_  _pry_  fruits

# binding.pry if you want to pause from that position, can put in different line in many times depends on

require 'pry'
fruits = ['banana', 'apple','grape']
number = [[1,2,3],[4,5,6]]

rows = 5
rows.times do
end

binding.pry
