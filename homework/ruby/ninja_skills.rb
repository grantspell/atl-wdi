# # CHALLENGE 1 : BOOLEANS

# ## 1 | Create a variable `a` and set it equal to true

#  a = true

# ## 2 | Create a variable `b` and set it equal to false

#  b = false

# ## 3 | Write a statement using `a` and `b` that evaluates to false [puts the result to the terminal]

# puts a == b

# ## 4 | Write a statment using `a` and `b` that evaluates to `true` [puts the result to the terminal]

# puts b = a

# ## 5 | Commit -m "1. Boolean Skills"

# # CHALLENGE 2 : Nil

# a_simple_variable = nil

# p a_simple_variable
# puts "#{ a_simple_variable } was here!"
# print a_simple_variable
# puts a_simple_variable.class

# # CHALLENGE 3 : INTEGERS

# ## 1

# puts d = 5

# ## 2

# puts e = 8.88

# ## 3

# puts d = e

# ## COMMIT

# # CHALLENGE 4 : STRINGS

# ## 1

# christine = "Hi, I'm Christine"

# ## 2

# likesTo = "long walks on the beach, kinda."

# ## 3

# tims = " and I like "
# puts christine + tims + likesTo

# ## 4

# g = "2"

# ## 5

# gToNumber = 2

# ## 6

# puts g + gToNumber.to_s

# ## COMMIT

# # CHALLENGE 5 : INPUT AND OUTPUT

# puts "Please enter a number.."
# input = gets.chomp
# num = input.to_i
# puts num * 2

# greeting = "Hello! I am "
# interests = " and I love "
# punctuation = "!"
# puts "What is your name?"
# user_name = gets.chomp
# puts "What do you like to do?"
# user_interests = gets.chomp
# puts greeting << user_name << interests << user_interests << punctuation

# # CHALLENGE 6 : ARRAYS

# myFirstArray = []
# myFirstArray = ["love", "champagne", "seacrest", "rocky", "balboa", 2, 5, 7, 9]
# puts myFirstArray[-1]
# puts myFirstArray[0]
# myFirstArray[1] = "Joe"
# myFirstArray[2] = 3
# t = true
# myFirstArray.push(t)
# puts myFirstArray << myFirstArray[3].class

# CHALLENGE 7 : HASHES

puts myFavoriteAnimals = {
    :Edgar => "Donkey",
    :Gypsy => "Dog",
    :Grant => "Feline",
    :Jan => "Turtle",
    :Pam => "Hedgehog",
}

puts myFavoriteAnimals[:Edgar] = "Bear"

puts favoriteMovie = { 
  
 }

puts favoriteMovie = {
    :movie => "The Parent Trap"
}