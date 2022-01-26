# // --- Directions
# // Write a function that accepts a positive number N.
# // The function should console log a pyramid shape
# // with N levels using the # character.  Make sure the
# // pyramid has spaces on both the left *and* right hand sides
# // --- Examples
# //   pyramid(1)
# //       '#'
# //   pyramid(2)
# //       ' # '
# //       '###'
# //   pyramid(3)
# //       '  #  '
# //       ' ### '
# //       '#####'

def pyramid(n):
    for i in range(n):
        hash_fill = 2*i + 1
        space_fill = ((2*n -1) - hash_fill) // 2
        print(" "*space_fill + "#"*hash_fill + " "*space_fill)

pyramid(5)