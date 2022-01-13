# --- Directions
# Write a program that console logs the numbers
# from 1 to n. But for multiples of three print
# “fizz” instead of the number and for the multiples
# of five print “buzz”. For numbers which are multiples
# of both three and five print “fizzbuzz”.
# --- Example
#   fizzBuzz(5);
#   1
#   2
#   fizz
#   4
#   buzz

def fizzbuzz(n):
    for i in range(1, n+1):
        ans = ""
        if i % 3 == 0: ans += "fizz"
        if i % 5 == 0: ans += "buzz"
        ans = ans or i 
        print(ans)

fizzbuzz(15)