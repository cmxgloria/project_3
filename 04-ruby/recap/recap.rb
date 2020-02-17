planeteers.sort
planeteers.shuffle
planeteers.sample

heroes_b = planeteers.select do |hero|
  # strip like trim in js to trim space before sereach B
  hero.strip.charc.first == 'B'
end

//another way
words = []
planeteers.each do |word|
  if word[0] =='B'
    words << word
  end
  