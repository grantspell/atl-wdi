puts "What was the subtotal?"
subtotal = gets.chomp.to_r
puts "Enter tip percentage (Leave the % symbol off)"
tax = gets.chomp.to_f / 100
subtotal = subtotal + (subtotal * tax)
puts "How many people is this split between?"
number_of_people = gets.chomp.to_i
puts "How much would you like to tip?"
puts "1) 15%"
puts "2) 18%"
puts "3) 20%"
puts "4) Custom amount"
option = gets.chomp.to_i
if option == 1
  percent = 0.15
elsif option == 2
  percent = 0.18
elsif option == 3
  percent = 0.20
else
  puts "Enter custom percent (Leave the % symbol off)"
  percent = gets.chomp.to_f / 100
end

total_tip = (subtotal * percent)
total = subtotal + total_tip
tip_per_person = total_tip / number_of_people

puts "Each person should tip $#{tip_per_person.round(2)}"
puts "The party total is $#{total.round(2)}, with tip."