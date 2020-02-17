

# donald_trump/
# |
# +--README.md
# |
# boris_johnson/
# |
# +--README.md
# |
# scott_morrision/
# |
# +--README.md
# |
require 'pry'
hackers = ['donald trump', 'boris johnson','scott morrision']
require 'fileutils'
# FileUtils.touch('README.md')
# # create file
# FileUtils.mkdir('test')
# # create folder
# FileUtils.touch('README.md')
hackers.each do |hacker|
  names =hacker.split(' ')
  dirname = "#{names[0].capitalize}_#{names[1].capitalize}"
  # dirname = hacker.gsub(' ', '_').capitalize
  FileUtils.mkdir(dirname)
# inside the mkdir have to put variable, not string even if variable is string
  FileUtils.touch("#{dirname}/README.md")
end

# printout like as below

# [1] pry(main)> dirname
# => "Donald_trump"
# [2] pry(main)> hackers
# => ["donald trump", "boris johnson", "scott morrision"]
# [3] pry(main)> hacker
# => "donald trump"

# rm -r */ means remove all the files
