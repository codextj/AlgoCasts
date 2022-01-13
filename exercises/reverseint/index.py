#  --- Directions
#  Given an integer, return an integer that is the reverse
#  ordering of numbers.
#  --- Examples
#    reverseInt(15) === 51
#    reverseInt(981) === 189
#    reverseInt(500) === 5
#    reverseInt(-15) === -51
#    reverseInt(-90) === -9

def reverse_int(n):
    sign = 1
    if n < 0:
        n *= -1
        sign = -1

    return sign * int("".join(reversed(list(str(n)))))

print(reverse_int(-51))

def reverse_int2(n):
    sign = 1
    if n < 0:
        n *= -1
        sign = -1

    rev = 0
    while (n >0):
        rmd = n % 10 # rightmost digit
        rev = rev*10 + rmd
        n //=10 # needs to be round down to int 

    return sign * rev

print(reverse_int2(-9000))
